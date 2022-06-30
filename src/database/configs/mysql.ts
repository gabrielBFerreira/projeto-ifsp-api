import { DataSource } from 'typeorm';

const rootDir = process.env.NODE_ENV === 'dev' ? './src' : './dist';

export const mysqlConnection = new DataSource({
  name: 'mysql',
  type: 'mysql',
  host: process.env.NODE_ENV === 'dev' ? 'mysql' : '127.0.0.1',
  ...(process.env.NODE_ENV !== 'dev' && {
    port: Number(process.env.MYSQL_PORT),
  }),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  logging: true,
  entities: [`${rootDir}/database/entities/mysql/*{.ts,.js}`],
  migrations: [`${rootDir}/database/migrations/*{.ts,.js}`],
  subscribers: [`${rootDir}/database/subscribers/*{.ts,.js}`],
});
