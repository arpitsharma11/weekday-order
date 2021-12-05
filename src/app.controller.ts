import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  createOrder(): string {
    return "Weekday's Finding Hidden Gems Assignment, check description to test the project";
  }
}
