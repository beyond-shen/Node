function rethrow() {
  if (DEBUG) {
    var backtrace = new Error;
    return function(err) {
      if (err) {
        backtrace.stack = err.name + ': ' + err.message +
                          backtrace.stack.substr(backtrace.name.length);
        err = backtrace;
        throw err;
      }
    };
  }
  return function(err) {
    if (err) {
      throw err;  // Forgot a callback but don't know where? Use NODE_DEBUG=fs
    }
  };
}

function assertEncoding(encoding) {
  if (encoding && !Buffer.isEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}






fs.readFile = function(path, options, callback_) {
  var callback = maybeCallback(arguments[arguments.length - 1]);


  if (util.isFunction(options) || !options) {
    options = { encoding: null, flag: 'r' };
  } else if (util.isString(options)) {
    options = { encoding: options, flag: 'r' };
  } else if (!util.isObject(options)) {
    throw new TypeError('Bad arguments');
  }

  var encoding = options.encoding;
  assertEncoding(encoding);

  // first, stat the file, so we know the size.
  var size;
  var buffer; // single buffer with file data
  var buffers; // list for when size is unknown
  var pos = 0;
  var fd;

  var flag = options.flag || 'r';
  fs.open(path, flag, 438 /*=0666*/, function(er, fd_) {
    if (er) return callback(er);
    fd = fd_;

    fs.fstat(fd, function(er, st) {
      if (er) {
        return fs.close(fd, function() {
          callback(er);
        });
      }

      size = st.size;
      if (size === 0) {
        // the kernel lies about many files.
        // Go ahead and try to read some bytes.
        buffers = [];
        return read();
      }

      if (size > kMaxLength) {
        var err = new RangeError('File size is greater than possible Buffer: ' +
            '0x3FFFFFFF bytes');
        return fs.close(fd, function() {
          callback(err);
        });
      }
      buffer = new Buffer(size);
      read();
    });
  });

  function read() {
    if (size === 0) {
      buffer = new Buffer(8192);
      fs.read(fd, buffer, 0, 8192, -1, afterRead);
    } else {
      fs.read(fd, buffer, pos, size - pos, -1, afterRead);
    }
  }

  function afterRead(er, bytesRead) {
    if (er) {
      return fs.close(fd, function(er2) {
        return callback(er);
      });
    }

    if (bytesRead === 0) {
      return close();
    }

    pos += bytesRead;
    if (size !== 0) {
      if (pos === size) close();
      else read();
    } else {
      // unknown size, just read until we don't get bytes.
      buffers.push(buffer.slice(0, bytesRead));
      read();
    }
  }

  function close() {
    fs.close(fd, function(er) {
      if (size === 0) {
        // collected the data into the buffers list.
        buffer = Buffer.concat(buffers, pos);
      } else if (pos < size) {
        buffer = buffer.slice(0, pos);
      }

      if (encoding) buffer = buffer.toString(encoding);
      return callback(er, buffer);
    });
  }
};
