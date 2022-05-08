import dotenv from 'dotenv';

const { NODE_ENV } = process.env;
let path = '.env';

switch (NODE_ENV) {
  case 'dev':
    path = '.env.dev';
    break;

  case 'uat':
    path = '.env.uat';
    break;

  default:
    path = '.env';
}

dotenv.config({
  path,
});
