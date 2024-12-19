require('dotenv').config();  

module.exports = {
  apps: [
    {
      name: 'mvm_api',
      script: 'npx',
      args: 'ts-node src/index.ts',
      watch: true,
      env: {
        NODE_ENV: 'development',
        PORT: process.env.PORT,
        DB_TYPE: process.env.DB_TYPE,
        DB_HOST: process.env.DB_HOST,
        DB_PORT: process.env.DB_PORT,
        DB_USERNAME: process.env.DB_USERNAME,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_DATABASE: process.env.DB_DATABASE,
        JWT_SECRET: process.env.JWT_SECRET,
        UI_BASE_URL: process.env.UI_BASE_URL
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: process.env.PORT,
        DB_TYPE: process.env.DB_TYPE,
        DB_HOST: process.env.DB_HOST,
        DB_PORT: process.env.DB_PORT,
        DB_USERNAME: process.env.DB_USERNAME,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_DATABASE: process.env.DB_DATABASE,
        JWT_SECRET: process.env.JWT_SECRET,
        UI_BASE_URL: process.env.UI_BASE_URL
      },
    },
  ],
};
