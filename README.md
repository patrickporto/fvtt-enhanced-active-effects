![](https://img.shields.io/badge/Foundry-v0.8.8-informational)
![Latest Release Download Count](https://img.shields.io/github/downloads/patrickporto/fvtt-enhanced-active-effects/latest/module.zip)
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fenhancedactiveeffects&colorB=4aa94a)

# Enhanced Active Effects

Enhanced Active Effects improves the Active Effects with additional features.

* Execute macro on apply or remove active effect.
* [Token Magic FX](https://github.com/Feu-Secret/Tokenmagic)
* [Item Macro](https://github.com/Kekilla0/Item-Macro)

## Using
The following reference table can be used in anything system with active effects:

|Attribute Key|Change Mode|Effect Value|Description|
|----|:----:|:----:|----|
|data.enhancedactiveeffects.macroOnApply|Custom|\<Macro Name>|Execute a macro on apply active effect
|data.enhancedactiveeffects.macroOnRemove|Custom|\<Macro Name>|Execute a macro on remove active effect
|data.enhancedactiveeffects.itemMacroOnApply|Custom|-|Execute a item macro on apply active effect
|data.enhancedactiveeffects.itemMacroOnRemove|Custom|-|Execute a item macro on remove active effect
|data.enhancedactiveeffects.tokenmagic|Custom|\<Preset Name>|Apply Token Magic special effect 



## Installation

From the Foundry VTT setup screen, go to "Add-on Modules", and search for "Compendium Explorer".  
Alternatively, you can install using the manifest path

```
https://github.com/patrickporto/fvtt-enhanced-active-effects/releases/latest/module.json
```
