import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import router from "./routers";

dotenv.config();

class App {
  public app;
  public port;

  constructor(port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeCors();
    this.initializeHelmet();
    this.initializeRouters();
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }

  private initializeCors() {
    this.app.use(cors());
  }

  private initializeHelmet() {
    this.app.use(helmet());
  }

  private initializeRouters() {
    this.app.use(router);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running port: ${this.port}`);
    });
  }
}

export default App;
