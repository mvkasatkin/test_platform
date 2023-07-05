import { Module } from "@nestjs/common";
import { Feat2Service } from "./feat2.service";

@Module({
  providers: [Feat2Service],
  exports: [Feat2Service],
})
export class Feat2Module {}
