import {MODULE_NAME, TOKENMAGIC} from "../constants.js";
import BasePlugin from "../base-plugin.js";

export class TokenMagicAE extends BasePlugin {
  get active() {
    console.warn(`${MODULE_NAME} | Token Magic is deactivated`)
    return game.modules.get("tokenmagic")?.active
  }

  async on(effectData) {
    const changes = effectData?.changes?.filter(c => c.key === TOKENMAGIC) ?? []
    if (changes.length === 0 ) {
      return
    }

    for (const change of changes) {
      await TokenMagic.addFilters(this.token, change.value);
    }
  }
  async off(effectData) {
    const changes = effectData?.changes?.filter(c => c.key === TOKENMAGIC) ?? []
    if (changes.length === 0 ) {
      return
    }

    for (const change of changes) {
      await TokenMagic.deleteFilters(this.token, change.value);
    }
  }
}

export default TokenMagicAE
