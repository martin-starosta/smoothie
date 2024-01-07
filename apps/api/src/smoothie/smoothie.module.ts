import { Module } from '@nestjs/common';
import { SmoothieController } from './smoothie.controller';
import { SmoothieService } from './smoothie.service';
import { PrismaService } from 'src/prisma-module/prisma.service';

@Module({
  controllers: [SmoothieController],
  providers: [SmoothieService, PrismaService],
})
export class SmoothieModule {}
