import { Feat1Controller } from "./feat1.controller";
import { Feat1Service } from "./feat1.service";
import { PlatformTest, PlatformTestNestApplication } from "@rsdk/testing";
import { HttpTransport } from "@rsdk/http.server";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";

let testingApp: PlatformTestNestApplication<NestFastifyApplication>;

beforeAll(async () => {
  const platformTest = PlatformTest.create({
    transports: [
      new HttpTransport(new FastifyAdapter()),
    ],
  });
  const moduleRef = await platformTest.createTestingModule({
    controllers: [Feat1Controller],
    providers: [Feat1Service],
  }).compile()

  testingApp = await moduleRef.createNestApplication<NestFastifyApplication>();
  await testingApp.init();
  await testingApp.getHttpAdapter().getInstance().ready();
})

afterAll(async () => {
  await testingApp.close();
})

it('should complete', async () => {
  const feat1ServiceMock: Feat1Service = {
    getRandomNumber: jest.fn().mockReturnValue(Promise.resolve(1))
  }
  const controller = new Feat1Controller(feat1ServiceMock)
  expect(await controller.getRandomNumber()).toBe(1);
});
