import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { MicroserviceM2Service } from "./microservice-m2.service";

@Controller()
export class MicroserviceM2Controller {
  constructor(private readonly service: MicroserviceM2Service) {
  }

  @MessagePattern("greeting")
  async getTask(@Payload() data: any) {
    console.log('получили данные от микросервиса М1: ' + data);
    return this.service.doSomething(data);
  }
}
