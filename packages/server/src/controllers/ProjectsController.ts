import { Controller, Get } from '@tsed/common';
import { Returns, ContentType } from '@tsed/schema';

import { BaseController } from './BaseController';
import { Project } from '../entities/Project';

@Controller('/projects')
export class ProjectsController extends BaseController {
  @Get('/')
  @ContentType('application/json')
  @Returns(200, Array).Of(Project)
  find(): Promise<Project[]> {
    return Project.find();
  }
}
