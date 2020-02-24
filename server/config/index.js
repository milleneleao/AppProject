const config = {};

config.JWT_KEY = 'devdeck101_jwt_secret';
config.SALT_ROUNDS = 13;

config.USER = 'postgres';
config.HOST = 'localhost';
config.DB   = 'AppProject';
config.PSW  = 'masterkey';//MillenePass
config.PORT = 5432;

module.exports = config; 