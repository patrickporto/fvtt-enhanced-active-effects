Hooks.once('init', async () => {
});

Hooks.once('ready', async () => {
  try {
    console.error(`${MODULE_NAME} | Loading custom sheet for ${game.system.id}`)
    const {ActiveEffectConfig} = await import(`./systems/${game.system.id}.js`)
    CONFIG.ActiveEffect.sheetClass = ActiveEffectConfig
  } catch (e) {
    console.error(`${MODULE_NAME} | custom sheet does not exist for ${game.system.id}`)
  }
});

Hooks.on('deleteActiveEffect', async activeEffect => {
  const _parent = activeEffect?.parent
  if (_parent) {
    const {CoreMacro} = await import("./core-macro.js")
    const coreMacro = new CoreMacro({ actor: _parent })
    coreMacro.off(activeEffect.data)

    const {ItemMacro} = await import("./item-macro.js")
    const itemMacro = new ItemMacro({ actor: _parent })
    itemMacro.off(activeEffect.data)

    const {TokenMagicAE} = await import("./token-magic.js")
    const tokenMagic = new TokenMagicAE({ actor: _parent })
    tokenMagic.off(activeEffect.data)
  }
})

Hooks.on('preCreateActiveEffect', async (activeEffect) => {
  const _parent = activeEffect?.parent
  if (_parent) {
    const item = await fromUuid(activeEffect.data.origin)
    const {CoreMacro} = await import("./core-macro.js")
    const coreMacro = new CoreMacro({ actor: _parent })
    coreMacro.on(activeEffect.data)

    const {ItemMacro} = await import("./item-macro.js")
    const itemMacro = new ItemMacro({ actor: _parent })
    itemMacro.on(activeEffect.data)

    const {TokenMagicAE} = await import("./token-magic.js")
    const tokenMagic = new TokenMagicAE({ actor: _parent })
    tokenMagic.on(activeEffect.data)
  }
})
