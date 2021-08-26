import { Controller, Post, BodyParams } from '@tsed/common';
import { Returns, ContentType } from '@tsed/schema';
import { BadRequest } from '@tsed/exceptions';
import nodemailer from 'nodemailer';

import { BaseController } from './BaseController';
import { Message } from '../entities/Message';

@Controller('/contact')
export class ContactController extends BaseController {
  @Post('/')
  @ContentType('application/json')
  @Returns(200, Boolean)
  sendMessage(@BodyParams() message: Message): Promise<boolean> {
    if (!message) {
      throw new BadRequest('Invalid request data');
    }
    if (!message.email || message.email.length === 0) {
      throw new BadRequest('Invalid email address');
    }
    if (!message.name || message.name.length === 0) {
      throw new BadRequest('Invalid name');
    }
    if (!message.message || message.message.length === 0) {
      throw new BadRequest('Invalid message');
    }

    const mail = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || ''),
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
      }
    });
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: 'Portfolio Contact Form',
      text: `From: ${message.name.replace(/(<([^>]+)>)/gi, "")} <${message.email.replace(/(<([^>]+)>)/gi, "")}>` + "\n\n" + `${message.message.replace(/(<([^>]+)>)/gi, "")}`
    };

    return mail.sendMail(mailOptions)
      .then(console.log)
      .then(result => true)
      .catch(error => false);
  }
}
