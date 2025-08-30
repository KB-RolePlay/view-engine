import denjucks from "denjucks";
import type { Engine,ViewConfig } from "../../viewEngine.type.ts";

export const denjuckEngine: Engine = (
  template: string,
  data: object = {},
  config: ViewConfig = {},
  filename: string = "",
) => {

  if (config.viewRoot) {
    denjucks.configure(config.viewRoot);
  }

  return new Promise<string>((resolve, reject) => {
    try {
      const result = denjucks.renderString(template, data) as string;
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });

};
