export const MODULE_NAME = 'Enhanced Active Effects'

export const MACRO_ON_APPLY = 'data.enhancedactiveeffects.macroOnApply'
export const MACRO_ON_REMOVE = 'data.enhancedactiveeffects.macroOnRemove'
export const ITEMMACRO_ON_APPLY = 'data.enhancedactiveeffects.itemMacroOnApply'
export const ITEMMACRO_ON_REMOVE = 'data.enhancedactiveeffects.itemMacroOnRemove'
export const TOKENMAGIC = 'data.enhancedactiveeffects.tokenmagic'


export const getChangeKeys = () => ({
  [MACRO_ON_APPLY]: game.i18n.localize('ENHANCEDACTIVEEFFECTS.Macro') + ' - ' + game.i18n.localize('ENHANCEDACTIVEEFFECTS.ExecuteOnApply'),
  [MACRO_ON_REMOVE]: game.i18n.localize('ENHANCEDACTIVEEFFECTS.Macro') + ' - ' + game.i18n.localize('ENHANCEDACTIVEEFFECTS.ExecuteOnRemove'),
  ...(game.modules.get("itemacro")?.active ? {
    [ITEMMACRO_ON_APPLY]: game.i18n.localize('ENHANCEDACTIVEEFFECTS.ItemMacro') + ' - ' + game.i18n.localize('ENHANCEDACTIVEEFFECTS.ExecuteOnApply'),
    [ITEMMACRO_ON_REMOVE]: game.i18n.localize('ENHANCEDACTIVEEFFECTS.ItemMacro') + ' - ' + game.i18n.localize('ENHANCEDACTIVEEFFECTS.ExecuteOnRemove'),
  } : {}),
  ...(game.modules.get("tokenmagic")?.active ? {
    [TOKENMAGIC]: game.i18n.localize('ENHANCEDACTIVEEFFECTS.TokenMagic'),
  } : {})
})
