class BasePlugin {
  constructor({actor}) {
    this.actor = actor;
    this.token = actor.isToken ? actor.token.object : actor.getActiveTokens()[0]
  }

  get active() {
    return true
  }
}

export default BasePlugin
