import { Inject, Injectable } from "@nestjs/common";
import { Feat2Service } from "../feat2/feat2.service";

@Injectable()
export class Feat1Service {
  // public constructor (
  //   @Inject(Feat2Service) private feat2Service: Feat2Service,
  // ) {}

  public getRandomNumber() {
    return 0
    // this.feat2Service.generateNumber()
  }
}
