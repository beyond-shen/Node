# 有道api的使用(需付费)

[有道智云](http://ai.youdao.com/app_detail.s?id=206e88b706f9f6de)

## 步骤

1. 登录有道智云进行注册(使用邮箱)
2. 点击应用管理--我的应用，创建自己的应用
3. 自然语言翻译下创建实例
4. 实例和应用进行绑定获取应用id和安全密钥

## js代码

```html
<!doctype html>
<head>
    <meta charset="utf-8"/>
</head>
<body>
<!-- <div>可打开浏览器控制台查看结果</div> <--></-->
<!-- <input id="input" type="text"> -->
<div id="order">电脑坏了，请及时修理</div>
<div id="trans"></div>
<!-- <script src="http://shared.ydstatic.com/js/jquery/jquery-3.1.1.min.js"></script> -->
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.js"></script>
<script type="text/javascript">

var appSecret = appSecret;
var key = '206e88b706f9f6de';//注意：暴露appSecret，有被盗用造成损失的风险
var salt = (new Date).getTime();
var query = $('#order').text();
console.log(query);
// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
var from = 'zh-CHS';
var to = 'en';
var str1 = key + query + salt +appSecret;
var sign = md5(str1);
$.ajax({
    url: 'http://openapi.youdao.com/api',
    type: 'post',
    dataType: 'jsonp',
    data: {
        q: query,
        appKey: key,
        salt: salt,
        from: from,
        to: to,
        sign: sign
    },
    success: function (data) {
        console.log(data);
        $('#trans').text(data.translation[0]);
    } 
});

</script>
</body>
</html>
```
