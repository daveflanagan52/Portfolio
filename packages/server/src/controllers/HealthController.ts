import { Controller, Get } from '@tsed/common';
import { Returns, ContentType } from '@tsed/schema';

import { BaseController } from './BaseController';
import { Photo } from '../entities/Photo';
import { ServiceUnvailable } from '@tsed/exceptions';

@Controller('/health')
export class HealthController extends BaseController {
  @Get('/')
  @ContentType('application/json')
  @Returns(200, Boolean)
  check(): Promise<boolean> {
    return Photo.find({ take: 1 })
    .then(() => true)
    .catch(() => {
      throw new ServiceUnvailable('Unable to connect to the database')
    });
  }
}
