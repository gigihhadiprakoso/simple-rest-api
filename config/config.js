const database = {
    DEV: {
        host: 'localhost',
        user:'root',
        password:'',
        database:'simplerestapi',
        port: '5433',
        driver: 'mysql'
    },
    LIVE:{
        host: 'ec2-44-198-204-136.compute-1.amazonaws.com',
        user:'ythsojogaeosla',
        password:'fe41adc7586125195120e7b252ec03dfc4ef0f0822d48a5106f4f75ecf76ffcc',
        database:'dd0aacuid9cf67',
        port: '5432',
        driver: 'postgres'
    }
}


let config = {
    environment:process.env.LIVE ? 'LIVE' : 'DEV',
}

config.DB = database[config.environment];
module.exports = config
