import cors from 'cors';
import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';

import './configs/dotenv';
import './database';
import { routes } from './routes';
import swaggerFile from './swagger.json';
import { ErrorHandler } from './utils/ErrorHandler';

const app = express();

app.use(cors());
app.use(express.json());

const swaggerOptions = {
  customCss:
    'html { background-color: #F9DFCE } .swagger-ui .info .title { color: #E05C96; font-family: "Times New Roman" } .swagger-ui { border-style: ridge } .topbar { display: none }',
  customSiteTitle: 'Donna Monique - API',
};

app.use(routes);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile, swaggerOptions));

app.use((error: Error, req: Request, res: Response, _: NextFunction) => {
  if (error instanceof ErrorHandler) {
    return res.status(error.code).json({
      code: error.code,
      message: error.message,
    });
  }

  return res.status(500).json({
    code: 500,
    message: 'Erro interno. Tente novamente mais tarde.',
  });
});

app.listen(3333, () => {
  console.log('A API está no ar!');
});
