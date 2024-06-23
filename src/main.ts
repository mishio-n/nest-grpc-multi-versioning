import { join } from 'node:path';
import { NestFactory } from '@nestjs/core';
import { type MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Interceptor } from './interceptor';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:3000',
        package: ['hello.v1', 'hello.v2'],
        protoPath: [
          join(__dirname, '../proto/hello/v1/hello.proto'),
          join(__dirname, '../proto/hello/v2/hello.proto'),
        ],
      },
    },
  );

  app.useGlobalInterceptors(new Interceptor());
  app.listen();
}
bootstrap();
