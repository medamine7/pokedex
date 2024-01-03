import { createRepository } from "~/repository/factory"
import { App } from "vue"
import { ApiKey } from "~/utils/symbols";

const apiPlugin = {
  install(app: App) {
    const repository = createRepository();
    app.provide(ApiKey, repository);
  }
}

export default apiPlugin