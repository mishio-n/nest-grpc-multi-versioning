import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  type SayHelloRequest,
  SayHelloResponse,
  VersionResponse,
  NewMethodResponse,
} from './hello_pb';

@Controller()
export class HelloV2Controller {
  @GrpcMethod('HelloService', 'SayHello')
  sayHello(data: SayHelloRequest): SayHelloResponse {
    return new SayHelloResponse({
      message: `Hello, ${data.name}`,
    });
  }

  @GrpcMethod('HelloService', 'Version')
  version(): VersionResponse {
    return new VersionResponse({
      version: 2,
    });
  }

  @GrpcMethod('HelloService', 'NewMethod')
  newMethod(): NewMethodResponse {
    return new NewMethodResponse({
      message: 'only callable v2',
    });
  }
}
