import { Container, decorate, injectable } from 'inversify';

import {
    BaseRestService, SpecMiddleware,
    LoggerService, BaseDbConnection,
    VaultService, ConfigurationService, BaseORMConnection
} from '../../shared'
import { ExampleController } from './controllers/example.controller'
import { ExampleApi } from './api/example.api'
import { ExampleService } from './services'

decorate(injectable(), BaseRestService);
decorate(injectable(), BaseDbConnection);

export class ContainerConfig {
    static getContainer() {
        const container = new Container({ defaultScope: 'Singleton' });

        // middleware
        container.bind<SpecMiddleware>(SpecMiddleware).toSelf();

        // repos
        container.bind<BaseORMConnection>(BaseORMConnection).toSelf();

        // services
        container.bind<LoggerService>(LoggerService).toSelf();
        container.bind<ExampleService>(ExampleService).toSelf();
        container.bind<VaultService>(VaultService).toSelf();
        container.bind<ConfigurationService>(ConfigurationService).toSelf();

        // controllers
        container.bind<ExampleController>(ExampleController).toSelf();

        // apis
        container.bind<ExampleApi>(ExampleApi).toSelf();

        return container;
    }
}