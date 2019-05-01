import * as configStore from 'config';

import { LoggerService, BaseServer, SpecMiddleware, IMicroservice, BaseORMConnection } from '../../../shared'
import { ExampleApi } from '../api'
import { EXAMPLE_SCHEMA } from '../models/db';

const config: IMicroservice = <IMicroservice>configStore.get('config.microservices.[MS_NAME]');

export class Server extends BaseServer {

  constructor(
    public exampleApi: ExampleApi,
    public specMiddleware: SpecMiddleware,
    public logger: LoggerService,
    dbConnection: BaseORMConnection) {

    super(
      config,
      logger,
      specMiddleware
    )

    dbConnection.connect(EXAMPLE_SCHEMA, config.db);
  }

  setRoutes() {
    this.app.use(config.general.baseUrlPath, this.exampleApi.router);
  }
}