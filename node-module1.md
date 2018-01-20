# node第三方模块

## mssql

该模块是用来通过node来连接sql server数据库的

```js
	var sqlstring = "insert into assignlist (wizid,assigntime,assignuserid,assigntouserid) values ('aa','" + myTime + "','kkk','mmm')";
	const pool = new sql.ConnectionPool(options, err => {
		pool.request()
		.query(sqlstring,function(err,data){
			if(err){
                console.dir('select id failed !!!!!!!')
            }
            console.log('ok');
			pool.close()
		})
	})

	pool.on('error', err => {
        // ... error handler
        console.dir('save note failed !!!!!!!')
        pool.close();
    })
```

## nodemailer 邮件发送

node模块用来进行邮件发送的，现在实现了腾讯企业邮箱和qq邮箱的发送

### 安装

```
npm install nodemailer --save
```

### 引用模块

```js
var nodemailer = require('nodemailer'); 
```

### 各个邮件使用的区别

每个邮件使用的host不同

### 注意事项

需要在邮箱里面开启stmp服务

1. qq邮箱:设置--账户--服务
2. 腾讯企业邮箱:设置--客户端设置--默认开启

### js代码

```js
  // 创建一个smtp发送实例，也可以使用别的模式发送
	var smtpTransport = nodemailer.createTransport({
			// host: 'smtp.qq.com',  //qq
			host: "smtp.exmail.qq.com", //腾讯企业邮箱
			secureConnection: true,
			port: 465,
	     auth: {  
	    // user: '1025460475@qq.com',
	    user:'yongzhe.shen@axesoft.cn',
	    pass: 'reFkQGidfE8hwCSq' //授权码,腾讯企业邮箱授权码在微信绑定中开启安全登录后生成密码 
	    // pass: 'nxefjvepjpbhbbdc' //qq的授权码在账户下服务里面获取
	  
	  }  
	  });  
	  var mailOptions = {  
	    from: 'yongzhe.shen@axesoft.cn', // 发送者 
	    to: '1025460475@qq.com,373187220@qq.com', // 接受者,可以同时发送多个,在引号中以逗号隔开 
	    subject: 'nodemailer2.5.0邮件发送', // 标题  
	    //text: 'Hello world', // 文本  
	    html: `<h2>nodemailer基本使用:</h2><h3>  
	    <a href="http://blog.csdn.net/zzwwjjdj1/article/details/51878392">  
	    http://blog.csdn.net/zzwwjjdj1/article/details/51878392</a></h3>`   
	  };  
	  
	  smtpTransport.sendMail(mailOptions, function (err, info) {  
	    if (err) {  
	      console.log(err);  
	      return;  
	    }  
	  
	    console.log('发送成功');  
	    res.render('email.ejs');
	  }); 
```
