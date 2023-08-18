import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "microM2",
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://localhost:5672"],
          queue: "queue_M2",
          queueOptions: {
            durable: false
          }
        }
      }
    ])
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {
}
