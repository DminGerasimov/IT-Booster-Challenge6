export default {
  connection: {
    host: 'redis',
    port: 6379,
    db: 0,
    username: 'admin_user',
    password: 'your_secure_password',
  },
  prefix: 'bull-queue',
  // https://api.docs.bullmq.io/interfaces/v5.DefaultJobOptions.html
  defaultJobOptions: {
    attemps: 3,
    removeOnComplete: false,
    // An amount of milliseconds to wait until this job can be processed. 
    delay: 6000,
    backoff: {
      type: 'exponential',
      delay: 1000,
    },
    sizeLimit: 256,
  },
};
