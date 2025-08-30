//! engines
export { dejsEngine } from "./lib/engines/dejs/dejs.engine.ts";
export { etaEngine } from "./lib/engines/eta/eta.engine.ts";

//! type
export type { Engine, Adapter, ViewConfig } from "./lib/viewEngine.type.ts";

//! adapters
export { oakAdapter } from "./lib/adapters/oak/oak.adapter.ts";

//! viewEngine entry
export { viewEngine } from "./lib/viewEngine.ts";
