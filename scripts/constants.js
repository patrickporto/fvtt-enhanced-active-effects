export const MACRO_ON_APPLY = 'data.enhancedactiveeffects.macroOnApply'
export const MACRO_ON_REMOVE = 'data.enhancedactiveeffects.macroOnRemove'
export const ITEMMACRO_ON_APPLY = 'data.enhancedactiveeffects.itemMacroOnApply'
export const ITEMMACRO_ON_REMOVE = 'data.enhancedactiveeffects.itemMacroOnRemove'

export const ON_APPLY = [MACRO_ON_APPLY, ITEMMACRO_ON_APPLY]
export const ON_REMOVE= [MACRO_ON_REMOVE, ITEMMACRO_ON_REMOVE]

export const changeKeys = {
    [MACRO_ON_APPLY]: game.i18n.localize('ENHANCEDACTIVEEFFECTS.Macro') + ' - ' + game.i18n.localize('ENHANCEDACTIVEEFFECTS.ExecuteOnApply'),
    [MACRO_ON_REMOVE]: game.i18n.localize('ENHANCEDACTIVEEFFECTS.Macro') + ' - ' + game.i18n.localize('ENHANCEDACTIVEEFFECTS.ExecuteOnRemove'),
    [ITEMMACRO_ON_APPLY]: game.i18n.localize('ENHANCEDACTIVEEFFECTS.ItemMacro') + ' - ' + game.i18n.localize('ENHANCEDACTIVEEFFECTS.ExecuteOnApply'),
    [ITEMMACRO_ON_REMOVE]: game.i18n.localize('ENHANCEDACTIVEEFFECTS.ItemMacro') + ' - ' + game.i18n.localize('ENHANCEDACTIVEEFFECTS.ExecuteOnRemove'),
}