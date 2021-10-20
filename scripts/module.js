import {MODULE_NAME} from "./constants.js";

const plugins = ['core-macro', 'item-macro', 'token-magic']

Hooks.once('init', async () => {
});

Hooks.once('ready', async () => {
  try {
    console.info(`${MODULE_NAME} | Loading custom sheet for ${game.system.id}`)
    const {ActiveEffectConfig} = await import(`./systems/${game.system.id}.js`)
    CONFIG.ActiveEffect.sheetClass = ActiveEffectConfig
  } catch (e) {
    console.warn(`${MODULE_NAME} | custom sheet does not exist for ${game.system.id}`)
  }
});

Hooks.on('deleteActiveEffect', async activeEffect => {
  const _parent = activeEffect?.parent
  if (_parent) {
    for (const pluginModule of plugins) {
      const Plugin = (await import(`./plugins/${pluginModule}.js`)).default
      const plugin = new Plugin({ actor: _parent })
      if (plugin.active) {
        plugin.off(activeEffect.data)
      }
    }
  }
})

Hooks.on('preCreateActiveEffect', async (activeEffect) => {
  const _parent = activeEffect?.parent
  if (_parent) {
    for (const pluginModule of plugins) {
      const Plugin = (await import(`./plugins/${pluginModule}.js`)).default
      const plugin = new Plugin({ actor: _parent })
      if (plugin.active) {
        plugin.on(activeEffect.data)
      }
    }
  }
})
