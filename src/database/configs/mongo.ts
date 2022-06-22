import { DataSource } from 'typeorm';

const rootDir = process.env.NODE_ENV === 'dev' ? './src' : './dist';

export const mongoConnection = new DataSource({
  name: 'mongodb',
  type: 'mongodb',
  url: `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${
    process.env.MONGO_INITDB_ROOT_PASSWORD
  }@${
    process.env.NODE_ENV === 'dev'
      ? 'mongo'
      : `127.0.0.1:${process.env.MONGO_PORT}`
  }/${process.env.MONGO_DATABASE}?authSource=admin`,
  useUnifiedTopology: true,
  synchronize: false,
  logging: true,
  entities: [`${rootDir}/database/entities/mongo/*{.ts,.js}`],
  migrations: [`${rootDir}/database/migrations/*{.ts,.js}`],
  subscribers: [`${rootDir}/database/subscribers/*{.ts,.js}`],
});
