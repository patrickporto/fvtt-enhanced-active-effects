import * as constants from "./constants.js";
import {ON_REMOVE} from "./constants.js";

export class Macro {
  constructor({actor, item}) {
    this.actor = actor;
    this.item = item;
  }

  getMacroContext() {
    return mergeObject({
      token: ChatMessage.getSpeaker({ actor: this.actor }).token,
      actor: this.actor.id,
    }, {}, { overwrite: false });
  }

  async on(effectData) {
    const changes = effectData?.changes?.filter(c => constants.ON_APPLY.includes(c.key)) ?? []
    if (changes.length === 0 ) {
      return
    }
    return this.executeMacro(changes)
  }
  async off(effectData) {
    const changes = effectData?.changes?.filter(c => constants.ON_REMOVE.includes(c.key)) ?? []
    if (changes.length === 0 ) {
      return
    }
    return this.executeMacro(changes)
  }

  async executeMacro(changes) {
    for (const change of changes) {
      if ([constants.MACRO_ON_APPLY, constants.MACRO_ON_REMOVE].includes(change.key)) {
        this._executeCoreMacro(change)
      }
      if ([constants.ITEMMACRO_ON_APPLY, constants.ITEMMACRO_ON_REMOVE].includes(change.key)) {
        this._executeItemMacro(change)
      }
    }
  }

  async _executeCoreMacro(change) {
    const macro = game.macros.getName(change.value)
    if (!macro) {
      ui.notifications.warn(`No macro ${change.value} found`)
      console.error(`Execute Core Macro | No macro ${change.value} found`);
      return
    }
    const context = this.getMacroContext()
    return macro.execute(context)
  }

  async _executeItemMacro(change) {
    if (!this.item.hasMacro()) {
      ui.notifications.warn(`No macro found in ${this.item.name}`)
      console.error(`Execute Item Macro | No macro found in ${this.item.name}`);
      return
    }
    const context = this.getMacroContext()
    return this.item.executeMacro(context)
  }
}