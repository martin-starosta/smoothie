import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-module/prisma.service';
import { Smoothie } from '@prisma/client';

type CreateSmoothieDto = {
  name: string;
};

@Injectable()
export class SmoothieService {
  constructor(private prisma: PrismaService) {}

  async smoothies(): Promise<Smoothie[]> {
    return await this.prisma.smoothie.findMany();
  }

  async smoothieOfDay(): Promise<Smoothie> {
    //Get random smoothie from the database
    const smoothies = await this.prisma.smoothie.findMany();
    const randomIndex = Math.floor(Math.random() * smoothies.length);
    return smoothies[randomIndex];
  }

  async createSmoothie(data: CreateSmoothieDto): Promise<Smoothie> {
    return await this.prisma.smoothie.create({ data });
  }

  async updateSmoothie(id: number, data: CreateSmoothieDto): Promise<Smoothie> {
    return await this.prisma.smoothie.update({ where: { id }, data });
  }
}
