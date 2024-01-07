import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { SmoothieService } from './smoothie.service';
import { Smoothie } from '@prisma/client';

@Controller('smoothie')
export class SmoothieController {
  constructor(private smoothieService: SmoothieService) {}

  @Get()
  async getSmoothies(): Promise<Smoothie[]> {
    return await this.smoothieService.smoothies();
  }

  @Get('today')
  async getSmoothieOfDay(): Promise<Smoothie> {
    return await this.smoothieService.smoothieOfDay();
  }

  @Post()
  async createSmoothie(@Body() postData: { name: string }): Promise<Smoothie> {
    const { name } = postData;
    return await this.smoothieService.createSmoothie({ name });
  }

  @Put(':id')
  async updateSmoothie(
    @Param('id') id: string,
    @Body() postData: { name: string },
  ): Promise<Smoothie> {
    const { name } = postData;
    return await this.smoothieService.updateSmoothie(parseInt(id), { name });
  }
}
