import {
  ITEMMACRO_ON_APPLY,
  ITEMMACRO_ON_REMOVE,
  MODULE_NAME
} from "../constants.js";
import BasePlugin from "../base-plugin.js";

class ItemMacro extends BasePlugin {
  get active() {
    console.warn(`${MODULE_NAME} | Item Macro is deactivated`)
    return game.modules.get("itemacro")?.active
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

export default ItemMacro
