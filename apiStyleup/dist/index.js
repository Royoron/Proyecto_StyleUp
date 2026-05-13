import "dotenv/config";
import { app } from "./app.js";
import { env } from "./config/env.js";
app.listen(env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`StyleUp API escuchando en puerto ${env.PORT}`);
});
//# sourceMappingURL=index.js.map