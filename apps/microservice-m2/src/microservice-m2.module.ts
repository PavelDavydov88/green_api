import { Module } from "@nestjs/common";
import { MicroserviceM2Service } from "./microservice-m2.service";
import { MicroserviceM2Controller } from "./microservice-m2.controller";

@Module({
  controllers: [MicroserviceM2Controller],
  providers: [MicroserviceM2Service]
})
export class MicroserviceM2Module {
}
