import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// відповідає за обробку HTTP-запитів до кореневого шляху додатка
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getGoHome(): string {
    return this.appService.getGoHome();
  }
}
