var http = require('http');

var httpProxy = require('http-proxy');

var myproxy = httpProxy.createProxyServer({});
http.createServer((req,res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  myproxy.web(req,res,{target: 'http://services.groupkt.com/country/get/all'});
}).listen(8000)

