import {ITEMMACRO_ON_APPLY, ITEMMACRO_ON_REMOVE} from "./constants.js";

export class ItemMacro {
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
    const changes = effectData?.changes?.filter(c => c.key === ITEMMACRO_ON_APPLY) ?? []
    if (changes.length === 0 ) {
      return
    }
    return this._executeMacro(changes, effectData)
  }

  async off(effectData) {
    const changes = effectData?.changes?.filter(c => c.key === ITEMMACRO_ON_REMOVE) ?? []
    if (changes.length === 0 ) {
      return
    }
    return this._executeMacro(changes, effectData)
  }

  async _executeMacro(changes, effectData) {
    const item = await fromUuid(effectData.origin)
    for (const change of changes) {
      if (!item.hasMacro()) {
        ui.notifications.warn(`No macro found in ${item.name}`)
        console.error(`Execute Item Macro | No macro found in ${item.name}`);
        continue
      }
      const context = this.getMacroContext()
      return item.executeMacro(context)
    }
  }
}
