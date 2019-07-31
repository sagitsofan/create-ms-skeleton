import { Container, decorate, injectable } from 'inversify';

import {
    BaseRestService, SpecMiddleware,
    LoggerService, BaseDbConnection,
    VaultV2Service, ConfigurationService
} from '../../../shared'
import { ExampleApi } from '../api/'
import { MockService } from './mock.services.mock';
import { ExampleController } from '../controllers';
import { ExampleService } from '../services/example.service';

decorate(injectable(), BaseRestService);
decorate(injectable(), BaseDbConnection);

export class MockContainer {
    static getContainer() {
        const container = new Container({ defaultScope: 'Singleton' });

        // middleware
        container.bind<SpecMiddleware>(SpecMiddleware).toSelf();

        // services
        container.bind<LoggerService>(LoggerService).toSelf();
        container.bind<ExampleService>(ExampleService).toSelf();
        container.bind<VaultV2Service>(VaultV2Service).toSelf();
        container.bind<ConfigurationService>(ConfigurationService).toSelf();

        // controllers
        container.bind<ExampleController>(ExampleController).toSelf();

        // apis
        container.bind<ExampleApi>(ExampleApi).toSelf();

        return container;
    }
}