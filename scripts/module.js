Hooks.once('init', async () => {
});

Hooks.once('ready', async () => {
  const {ActiveEffectConfig} = await import(`./systems/${game.system.id}.js`)
  CONFIG.ActiveEffect.sheetClass = ActiveEffectConfig
});

Hooks.on('deleteActiveEffect', async activeEffect => {
  const _parent = activeEffect?.parent
  if (_parent) {
    const item = await fromUuid(activeEffect.data.origin)
    const {Macro} = await import("./macro.js")
    const macro = new Macro({ actor: _parent, item })
    macro.off(activeEffect.data)
  }
})

Hooks.on('preCreateActiveEffect', async (activeEffect, ...rest) => {
  const _parent = activeEffect?.parent
  if (_parent) {
    const item = await fromUuid(activeEffect.data.origin)
    const {Macro} = await import("./macro.js")
    const macro = new Macro({ actor: _parent, item })
    macro.on(activeEffect.data)
  }
})