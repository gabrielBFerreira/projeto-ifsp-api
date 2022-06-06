import { DataSource } from 'typeorm';

const rootDir = process.env.NODE_ENV === 'dev' ? './src' : './dist';

export const mongoConnection = new DataSource({
  name: 'mongodb',
  type: 'mongodb',
  url: `mongodb://mongo/${process.env.MONGO_DATABASE}`,
  username: process.env.MONGO_INITDB_ROOT_USERNAME,
  password: process.env.MONGO_INITDB_ROOT_PASSWORD,
  database: process.env.MONGO_DATABASE,
  useUnifiedTopology: true,
  synchronize: false,
  logging: true,
  entities: [`${rootDir}/database/entities/mongo/*{.ts,.js}`],
  migrations: [`${rootDir}/database/migrations/*{.ts,.js}`],
  subscribers: [`${rootDir}/database/subscribers/*{.ts,.js}`],
});
