import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getGoHome(): string {
    return 'Go home and read JS))';
  }
}
