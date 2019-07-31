import "reflect-metadata";
import { expect } from 'chai';
import 'mocha';

import { MockContainer } from '../mock/mock.container';
import { ExampleController } from ".";

describe('Microservice name: ExampleController', () => {

  const container = MockContainer.getContainer();
  const exampleController: ExampleController = container.get(ExampleController);

  it('Some unit test description', async () => {

    const req = {
      body: {
      }
    }

    await exampleController.getData(req, null, (data) => {
      expect(data.title).to.equal('Some string..');
      expect(data.visualization).to.be.an('array');
    });
  });

});