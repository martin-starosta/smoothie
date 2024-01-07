import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmoothieModule } from './smoothie/smoothie.module';
import { PrismaModule } from './prisma-module/prisma.module';

@Module({
  imports: [SmoothieModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
