class BasePlugin {
  constructor({actor}) {
    this.actor = actor;
  }

  get token() {
    if (this.actor.isToken) {
      return this.actor.token.object
    }
    const tokens = this.actor.getActiveTokens()
    if (tokens.length > 0) {
      return tokens[0]
    }
    return null
  }

  get active() {
    return true
  }
}

export default BasePlugin
