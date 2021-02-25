import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AppService {
  constructor(
    private readonly mailerService: MailerService
  ){}
  getHello(): string {
    return 'Hello World!';
  }

  public send_simple_mail(){
    this.mailerService
      .sendMail({
        to: 'dev.suhada@gmail.com',
        subject: 'Testing Nest Mailer',
        template: 'index', // merujuk ke -> /template/index.hbs
        context: {  // Data to be sent to template engine.
          code: 'cf1a3f828287',
          username: 'john doe',
        },
      })
      .then((success) => {
        console.log(success)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
