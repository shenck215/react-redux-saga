

var config;

if(__DEV__) {
	config = '';
}else if(__TEST__) {
	config = 'https://oxt.joyomm.com/joyowyb';
}else if(__BETA__) {
	config = 'https://tigert.joyomm.com/joyowyb';
}else if(__BUILD__) {
	config = 'http://adminwyb.joyowo.com';
}


module.exports = config;






