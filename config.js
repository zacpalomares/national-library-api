var WebConfig = {
  port: 8090
}

var DBConfig = {
  provider: 'postgres',
  host: 'localhost',
  port: '5432',
  username: 'OEK',
  password: 'password',
  database: 'postgres',
  drop_create: false,
}

module.exports = {
  WebConfig: WebConfig,
  DBConfig: DBConfig
}
