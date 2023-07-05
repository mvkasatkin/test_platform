import { PlatformApp } from '@rsdk/core';
import { HttpTransport } from '@rsdk/http.server';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { Feat1Module } from "./feat1/feat1.module";
import { Feat2Module } from "./feat2/feat2.module";

export const app = new PlatformApp({
  transports: [
    new HttpTransport(new FastifyAdapter()),
  ],
  modules: [
    Feat1Module,
    Feat2Module,
  ],
});
