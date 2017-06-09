

let config,ROOT_PATH;

if(__DEV__) {
	config = '';
	ROOT_PATH = '';
}else if(__ALPHA__) {
	config = 'https://oxt.joyomm.com/joyowyb';
	ROOT_PATH = '/joyowyb';
}else if(__BETA__) {
	config = 'https://tigert.joyomm.com/joyowyb';
	ROOT_PATH = '/joyowyb';
}else if(__BUILD__) {
	config = 'http://adminwyb.joyowo.com';
	ROOT_PATH = '/joyowyb';
}

export default {
	config,
	ROOT_PATH,
}






