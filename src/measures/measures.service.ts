import { Injectable } from '@nestjs/common';
import { CreateMeasureDto } from './dto/create-measure.dto';
import { UpdateMeasureDto } from './dto/update-measure.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class MeasuresService {
  constructor(private prisma: PrismaService) {}
  async create(createMeasureDto: Prisma.ShooperCreateInput) {
    const createMeasure = await this.prisma.shooper.create({
      data: {
        ...createMeasureDto,
      },
    });
    return createMeasure;
  }

  findAll() {
    return `This action returns all measures`;
  }

  findOne(id: number) {
    return `This action returns a #${id} measure`;
  }

  update(id: number, updateMeasureDto: UpdateMeasureDto) {
    return `This action updates a #${id} measure`;
  }

  remove(id: number) {
    return `This action removes a #${id} measure`;
  }
}
