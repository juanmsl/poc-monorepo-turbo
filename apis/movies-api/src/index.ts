import { MoviesAdapter, MoviesController } from "./infrastructure";

class MoviesAPI extends MoviesController {
  constructor() {
    const apiURL = `${process.env.API_URL}`;
    const accessToken = `${process.env.ACCESS_TOKEN}`;
    const adapter = new MoviesAdapter({ apiURL, accessToken });
    super(adapter);
  }
}

export default new MoviesAPI();

export * from './domain';
export * from './infrastructure';
