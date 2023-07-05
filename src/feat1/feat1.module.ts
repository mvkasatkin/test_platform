import { Module } from "@nestjs/common";
import { Feat1Controller } from "./feat1.controller";
import { Feat1Service } from "./feat1.service";

@Module({
  controllers: [Feat1Controller],
  providers: [Feat1Service],
})
export class Feat1Module {}
