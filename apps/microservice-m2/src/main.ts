import { NestFactory } from "@nestjs/core";
import { MicroserviceM2Module } from "./microservice-m2.module";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(MicroserviceM2Module, {
    transport: Transport.RMQ,
    options: {
      urls: ["amqp://localhost:5672"],
      queue: "queue_M2",
      queueOptions: {
        durable: false
      }
    }
  });
  await app.listen();
  console.log(`микросервис M2 запустился`);
}

bootstrap();
