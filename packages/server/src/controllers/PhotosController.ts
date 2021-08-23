import { Controller, Get } from '@tsed/common';
import { Returns, ContentType } from '@tsed/schema';

import { BaseController } from './BaseController';
import { Photo } from '../entities/Photo';

@Controller('/photos')
export class PhotosController extends BaseController {
  @Get('/')
  @ContentType('application/json')
  @Returns(200, Array).Of(Photo)
  find(): Promise<Photo[]> {
    return Photo.find();
  }
}
