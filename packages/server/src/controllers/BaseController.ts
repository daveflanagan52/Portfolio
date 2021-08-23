import { AfterRoutesInit, Controller } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection } from 'typeorm';

@Controller('/base')
export class BaseController implements AfterRoutesInit {
  protected connection: Connection;

  protected typeORMService: TypeORMService;

  constructor(typeORMService: TypeORMService) {
    this.typeORMService = typeORMService;
  }

  $afterRoutesInit() {
    this.connection = this.typeORMService?.get('default')!;
  }
}
