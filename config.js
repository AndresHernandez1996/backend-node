module.exports = {
  api: {
    port: process.env.API_PORT || 3001
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'notasecret!'
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'remotemysql.com',
    user: process.env.MYSQL_USER || 'xedSrhSFlI',
    password: process.env.MYSQL_PASS || '2pxBIdVN7V',
    database: process.env.MYSQL_DB || 'xedSrhSFlI'
  }
}
