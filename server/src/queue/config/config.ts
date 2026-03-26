import dotenv from 'dotenv';

const env = dotenv.config().parsed;
if (!env) throw Error('.env file not exist.');

export default {
  redis: {
    host: env.REDIS_HOST,
    port: env.REDIS_PORT,
    db: env.REDIS_DB,
    password: env.REDIS_PASSWORD,
    user: env.REDIS_USER,
  },
  prefix: 'bull-queue',
  defaultJobOptions: {
    attemps: 3,
    removeOnComplete: false,
    backoff: {
      type: 'exponential',
      delay: 1000,
    },
  },
};
