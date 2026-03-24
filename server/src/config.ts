import dotenv from "dotenv"


const env = dotenv.config().parsed
if (!env) throw Error('.env file not exist.')

export default {
    redis: {
        host: env.REDIS_HOST
    }
}