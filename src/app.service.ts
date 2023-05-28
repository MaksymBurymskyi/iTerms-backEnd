import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // привітальний рядок для прикладу
  getGoHome(): string {
    return 'Go home and study JS))';
  }
}
