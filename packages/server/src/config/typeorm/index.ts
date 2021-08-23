// @tsed/cli do not edit
import * as defaultConfig from './default.config.json';

export default [
  {
    ...defaultConfig,
    host: process.env.TYPEORM_HOST || 'localhost',
    username: process.env.TYPEORM_USERNAME || 'postgres',
    password: process.env.TYPEORM_PASSWORD || 'Asdf!234',
    database: process.env.TYPEORM_DATABASE || 'basedb',
    port: process.env.TYPEORM_PORT || 5431,
    type: process.env.TYPEORM_CONNECTION || 'postgres',
  } as any,
];
