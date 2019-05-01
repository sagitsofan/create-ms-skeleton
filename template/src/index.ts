import "reflect-metadata";
import * as configStore from 'config';

import { Server } from './server/server'
import { ExampleApi } from './api'
import { SpecMiddleware, LoggerService, SysConst, IMicroservice, BaseORMConnection } from '../../shared'
import { ContainerConfig } from './inversify.config';

const container = ContainerConfig.getContainer();
const config: IMicroservice = <IMicroservice>configStore.get('config.microservices.[MS_NAME]');

const server = new Server(
  container.get(ExampleApi),
  container.get(SpecMiddleware),
  container.get(LoggerService),
  container.get(BaseORMConnection)
)

server.start()

console.log(`--- ${config.general.name} Microservice---`)
console.log(SysConst.SERVER_STARTED, config.server.port)