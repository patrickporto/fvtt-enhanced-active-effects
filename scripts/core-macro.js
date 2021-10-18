import {MACRO_ON_APPLY, MACRO_ON_REMOVE} from "./constants.js";

export class CoreMacro {
  constructor({actor}) {
    this.actor = actor;
  }

  getMacroContext() {
    return mergeObject({
      token: ChatMessage.getSpeaker({ actor: this.actor }).token,
      actor: this.actor.id,
    }, {}, { overwrite: false });
  }

  async on(effectData) {
    const changes = effectData?.changes?.filter(c => c.key === MACRO_ON_APPLY) ?? []
    if (changes.length === 0 ) {
      return
    }
    return this._executeMacro(changes)
  }
  async off(effectData) {
    const changes = effectData?.changes?.filter(c => c.key === MACRO_ON_REMOVE) ?? []
    if (changes.length === 0 ) {
      return
    }
    return this._executeMacro(changes)
  }

  async _executeMacro(changes) {
    for (const change of changes) {
      const macro = game.macros.getName(change.value)
      if (!macro) {
        ui.notifications.warn(`No macro ${change.value} found`)
        console.error(`Execute Core Macro | No macro ${change.value} found`);
        continue
      }
      const context = this.getMacroContext()
      return macro.execute(context)
    }
  }
}
