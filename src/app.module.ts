import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';

@Module({
  imports: [ConfigModule.forRoot(), OrderModule],
  controllers: [AppController],
})
export class AppModule {}
