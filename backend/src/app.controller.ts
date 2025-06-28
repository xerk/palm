import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CheckinDto } from './dto/checkin.dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('checkin')
  checkin(@Body() body: CheckinDto) {
    return this.appService.checkin(body);
  }
}
