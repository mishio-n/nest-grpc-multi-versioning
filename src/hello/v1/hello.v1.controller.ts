import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  type SayHelloRequest,
  SayHelloResponse,
  VersionResponse,
} from './hello_pb';

@Controller()
export class HelloV1Controller {
  @GrpcMethod('HelloService', 'SayHello')
  sayHello(data: SayHelloRequest): SayHelloResponse {
    return new SayHelloResponse({
      message: `Hello, ${data.name}`,
    });
  }

  @GrpcMethod('HelloService', 'Version')
  version(): VersionResponse {
    return new VersionResponse({
      version: 'v1',
    });
  }
}
