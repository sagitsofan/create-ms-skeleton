import { injectable } from "inversify";
import { Router } from 'express';

import { IRoute } from '../../../shared';
import { ExampleController } from '../controllers';

@injectable()
export class ExampleApi implements IRoute {

  router: Router;

  constructor(private exampleController: ExampleController) {
    this.router = Router();
    this.setRoutes()
  }

  setRoutes = () => {

    /**
     * @swagger
     * /route-exapmle:
     *   get:
     *     tags:
     *       - search
     *     description: Returns all meta data
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of meta data
     */
    this.router.get('/routeExapmle', this.exampleController.getData)
  }
}