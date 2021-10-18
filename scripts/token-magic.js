import {TOKENMAGIC} from "./constants.js";

export class TokenMagicAE {
  constructor({actor}) {
    this.actor = actor;
    this.token = actor.isToken ? actor.token.object : actor.getActiveTokens()[0]
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
