var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
	var query = url.parse(req.url, true).query;
  var callback=query.callback||"callback";

	var data  = {
		status: 0,
		pieData: { //参保状态
			legend: ["在保中", "增保中", "减保中", "已停保", "未参保"], //参保状态
			series: [{
	                    value: 335,
	                    name: '在保中'
	                }, {
	                    value: 310,
	                    name: '增保中'
	                }, {
	                    value: 234,
	                    name: '减保中'
	                }, {
	                    value: 135,
	                    name: '已停保'
	                }, {
	                    value: 1548,
	                    name: '未参保'
	                }]
		}


	}
	res.writeHead(200, {
		'Access-Control-Allow-Origin' : '*'
	});
	res.end(JSON.stringify(data));
	//res.end(callback+'('+ JSON.stringify(data) + ')');
}).listen(3005, function() {
	console.log('server is runing...')
});