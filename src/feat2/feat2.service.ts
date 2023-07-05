import { Injectable } from "@nestjs/common";

@Injectable()
export class Feat2Service {
  public generateNumber() {
    return Math.round(Math.random() * 1000)
  }
}
