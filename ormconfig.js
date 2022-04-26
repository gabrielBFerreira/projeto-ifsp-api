const rootDir = process.env.NODE_ENV === 'dev' ? './src' : './dist';

export default [
  {
    name: 'mysql',
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    synchronize: false,
    logging: true,
    entities: [`${rootDir}/database/entities/**/*{.ts,.js}`],
    migrations: [`${rootDir}/database/migrations/**/*{.ts,.js}`],
    subscribers: [`${rootDir}/database/subscribers/**/*{.ts,.js}`],
    cli: {
      entitiesDir: `${rootDir}/database/entities`,
      migrationsDir: `${rootDir}/database/migrations`,
      subscribersDir: `${rootDir}/database/subscribers`,
    },
  },
  {
    name: 'mongodb',
    type: 'mongodb',
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    database: process.env.MONGO_DATABASE,
    synchronize: false,
    logging: true,
    entities: [`${rootDir}/database/entities/**/*{.ts,.js}`],
    migrations: [`${rootDir}/database/migrations/**/*{.ts,.js}`],
    subscribers: [`${rootDir}/database/subscribers/**/*{.ts,.js}`],
    cli: {
      entitiesDir: `${rootDir}/database/entities`,
      migrationsDir: `${rootDir}/database/migrations`,
      subscribersDir: `${rootDir}/database/subscribers`,
    },
  },
];
