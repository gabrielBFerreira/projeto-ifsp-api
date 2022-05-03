import { DataSource } from 'typeorm';

const rootDir = process.env.NODE_ENV === 'dev' ? './src' : './dist';

export const mysqlConnection = new DataSource({
  name: 'mysql',
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  logging: true,
  entities: [`${rootDir}/database/entities/*{.ts,.js}`],
  migrations: [`${rootDir}/database/migrations/*{.ts,.js}`],
  subscribers: [`${rootDir}/database/subscribers/*{.ts,.js}`],
});

export const mongoConnection = new DataSource({
  name: 'mongodb',
  type: 'mongodb',
  host: process.env.MONGO_HOST,
  port: Number(process.env.MONGO_PORT),
  database: process.env.MONGO_DATABASE,
  synchronize: false,
  logging: true,
  entities: [`${rootDir}/database/entities/**/*{.ts,.js}`],
  migrations: [`${rootDir}/database/migrations/**/*{.ts,.js}`],
  subscribers: [`${rootDir}/database/subscribers/**/*{.ts,.js}`],
});
