import { Controller, Get, Inject, Param } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(@Inject("microM2") private readonly client: ClientProxy) {
  }

  @Get("/:name")
  async getHello(@Param("name") name: string) {
    console.log(`Получили данные и отправляем в микросервис М2, ждем ответ от микросервиса`);
    return this.client.send("greeting",  name );
  }
}
