import dotenv from 'dotenv';

const env = dotenv.config().parsed;
if (!env) throw Error('.env file not exist.');

export default {
  connection: {
    host: 'redis',
    port: 6379,
    // db: 'My Redis Stack Database',
    username: 'admin_user',
    password: 'your_secure_password',
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
