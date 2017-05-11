

var env = 'dev'; //dev是本地开发环境，test是测试环境，beta是公测环境，product是正式环境

var config = {
	env: env
};


if( env === 'dev' ){
	config.appDomain = ''; 
}

module.exports = config;






