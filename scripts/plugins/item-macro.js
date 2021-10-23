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

  getMacroContext(context) {
    const speaker = ChatMessage.getSpeaker({ actor: this.actor })
    return mergeObject({
      token: canvas.tokens.get(speaker.token),
      actor: this.actor,
      speaker,
      ...context
    }, {}, { overwrite: false });
  }

  async on(effectData) {
    const changes = effectData?.changes?.filter(c => c.key === ITEMMACRO_ON_APPLY) ?? []
    if (changes.length === 0 ) {
      return
    }
    return this._executeMacro(changes, effectData, { action: "on" })
  }

  async off(effectData) {
    const changes = effectData?.changes?.filter(c => c.key === ITEMMACRO_ON_REMOVE) ?? []
    if (changes.length === 0 ) {
      return
    }
    return this._executeMacro(changes, effectData, { action: "off" })
  }

  async _executeMacro(changes, effectData, context = {}) {
    const item = await fromUuid(effectData.origin)
    for (const change of changes) {
      if (!item.hasMacro()) {
        ui.notifications.warn(`No macro found in ${item.name}`)
        console.error(`Execute Item Macro | No macro found in ${item.name}`);
        continue
      }
      return item.executeMacro(this.getMacroContext({item, ...context}), change.value)
    }
  }
}

export default ItemMacro
