import { Module } from '@nestjs/common';
import { MeasuresService } from './measures.service';
import { MeasuresController } from './measures.controller';
import { PrismaService } from 'src/common/prisma.service';

@Module({
  controllers: [MeasuresController],
  providers: [MeasuresService, PrismaService],
})
export class MeasuresModule {}
