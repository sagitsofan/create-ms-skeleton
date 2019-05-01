import { injectable } from "inversify";

@injectable()
export class ExampleController {

  constructor() {
  }

  getData = async (req, res, next) => {
    try {
      next("Got it!");
    }
    catch (ex) {
      next(`Error: ${ex}`);
    }
  }
}