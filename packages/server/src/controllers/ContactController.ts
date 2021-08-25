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
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
      }
    });
    const mailOptions = {
      from: message.email.replace(/(<([^>]+)>)/gi, ""),
      to: process.env.GMAIL_USERNAME,
      subject: 'Portfolio Contact Form',
      text: `From: ${message.name.replace(/(<([^>]+)>)/gi, "")} <${message.email.replace(/(<([^>]+)>)/gi, "")}>` + "\n\n" + `${message.message.replace(/(<([^>]+)>)/gi, "")}`
    };

    return new Promise((resolve, reject) => {
      mail.sendMail(mailOptions, function (error, result) {
        if (error)
          return reject(error);
        resolve(result);
      });
    })
      .then(result => true)
      .catch(error => false);
  }
}
