import { Feat1Controller } from "./feat1.controller";
import { Feat1Service } from "./feat1.service";

it('should complete', async () => {
  const feat1ServiceMock: Feat1Service = {
    getRandomNumber: jest.fn().mockReturnValue(Promise.resolve(1))
  }
  const controller = new Feat1Controller(feat1ServiceMock)
  expect(await controller.getRandomNumber()).toBe(1);
});
