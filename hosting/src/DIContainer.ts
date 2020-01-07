import * as Repositories from "./repositories";
import * as Services from "./services";

class DIContainer {
  get UserRepository() { return new Repositories.UserRepository(); }

  get SignInService() { return new Services.SignInService(this.UserRepository); }

  get UserService() { return new Services.UserService(this.UserRepository); }

  get CloudFunctionsService() { return new Services.CloudFunctionsService(); }
}

export default new DIContainer();