import {changeKeys} from "../constants.js";

const DLActiveEffectConfig = CONFIG.ActiveEffect.sheetClass

export class ActiveEffectConfig extends DLActiveEffectConfig {
    /** @override */
    static get defaultOptions() {
        return DLActiveEffectConfig.defaultOptions
    }

    /** @override */
    getData() {
        const data = super.getData()
        const availableChangeKeys = data?.availableChangeKeys ?? {}
        return foundry.utils.mergeObject(data, {
            availableChangeKeys: {
                ...availableChangeKeys,
                ...changeKeys,
            }
        })
    }

    /** @override */
    activateListeners(html) {
        html.find(".key select").on("change", this._refreshChangeOptions.bind(this)).trigger('change')
        super.activateListeners(html)
    }

    _refreshChangeOptions({target}) {
        const effectChange = $(target).closest('.effect-change')
        const key = $(target).val()
        if (Object.keys(changeKeys).includes(key)) {
            effectChange.find(".mode select").val(0).prop('disabled', true);
        } else {
            effectChange.find(".mode select").show().prop('disabled', false);
        }
    }
}