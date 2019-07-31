import "reflect-metadata";
import { expect } from 'chai';
import 'mocha';

import { MockContainer } from '../mock/mock.container';
import { ExampleController } from ".";

describe('DashboardController', () => {

  const container = MockContainer.getContainer();
  const exampleController: ExampleController = container.get(ExampleController);

  it('Some unit test description', async () => {

    const req = {
      body: {
        dashboard: "Open incidents",
        customers: [0],
        fromDate: "2019-07-09",
        toDate: "2019-07-09"
      }
    }

    await exampleController.getData(req, null, (data) => {
      expect(data.title).to.equal('Some string..');
      expect(data.visualization).to.be.an('array');
    });
  });

});