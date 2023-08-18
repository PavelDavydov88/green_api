import { Injectable } from "@nestjs/common";

@Injectable()
export class MicroserviceM2Service {

  async doSomething(data: any) {
    console.log('выполняем обработка данных: ' + data);
    return `Hello ${data}!`;
  }
}
