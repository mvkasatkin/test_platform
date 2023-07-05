import { Controller, Get } from "@nestjs/common";
import { Feat1Service } from "./feat1.service";

@Controller('feat1')
export class Feat1Controller {
  public constructor (
    private feat1Service: Feat1Service,
  ) {}

  @Get('number')
  public async getRandomNumber() {
    return this.feat1Service.getRandomNumber()
  }
}
