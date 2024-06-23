import { Module } from '@nestjs/common';
import { HelloV1Controller } from './v1/hello.v1.controller';
import { HelloV2Controller } from './v2/hello.v2.controller';

@Module({
  imports: [],
  controllers: [HelloV1Controller, HelloV2Controller],
  // controllers: [HelloV2Controller, HelloV1Controller],
})
export class HelloModule {}
