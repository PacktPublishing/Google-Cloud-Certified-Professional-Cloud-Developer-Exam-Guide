const {promisify} = require('util');
const redis = require('redis');
const REDISHOST = REDIS_INSTANCE_IP;
const REDISPORT = REDIS_INSTANCE_PORT;
const redisInit = redis.createClient(REDISPORT, REDISHOST);
const redisIncreaseCount = promisify(redisInit.incr).
bind(redisInit);
exports.increaseCount = async (req, res) => {
const response = await redisIncreaseCount('counter');
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end(`Visit count: ${response}`);
};