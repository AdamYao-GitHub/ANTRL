
import { Indicator, MetaObjectKey } from "./Interfaces"

const defaultIndicator: Indicator = {
    Indicator: false,
    FinalIndicator: false,
    RedefinedIndicator: null
}

export default class Node {
    Elements: Array<Object>
    Key: Object = {}
    CategoryCode: string
    EnabledIndicator: Indicator = defaultIndicator
    CreateEnabledIndicator: Indicator = defaultIndicator
    UpdateEnabledIndicator: Indicator = defaultIndicator
    DeleteEnabledIndicator: Indicator = defaultIndicator
    ReadOnlyOperationIndicator: Indicator = defaultIndicator
    TransientNodeIDIndicator: Indicator = defaultIndicator
    SeparatelyLockableIndicator: Indicator = defaultIndicator

    constructor(nodeOptions: {
        metaObjectKey: MetaObjectKey,
        parentNode?: string,
        CategoryCode?: string,
        EnabledINdicator?: Indicator,
        CreateEnabledIndicator?: Indicator,
        UpdateEnabledIndicator?: Indicator,
        DeleteEnabledIndicator?: Indicator,
        ReadOnlyOperationIndicator?: Indicator,
        TransientNodeIDIndicator?: Indicator,
        SeparatelyLockableIndicator?: Indicator
    }) {
        if (nodeOptions.metaObjectKey) {
            Object.assign(this.Key, {
                MetaObjectKey: nodeOptions.metaObjectKey,
                Name: nodeOptions.metaObjectKey.Name,
                ParentNode: nodeOptions.parentNode
            })
        }
        if (nodeOptions.CategoryCode) this.CategoryCode = nodeOptions.CategoryCode
       
        Object.assign(this.EnabledIndicator, defaultIndicator, nodeOptions.EnabledINdicator);
        Object.assign(this.CreateEnabledIndicator, defaultIndicator, nodeOptions.CreateEnabledIndicator);
        Object.assign(this.UpdateEnabledIndicator, defaultIndicator, nodeOptions.UpdateEnabledIndicator);
        Object.assign(this.DeleteEnabledIndicator, defaultIndicator, nodeOptions.DeleteEnabledIndicator);
        Object.assign(this.ReadOnlyOperationIndicator, defaultIndicator, nodeOptions.ReadOnlyOperationIndicator);
        Object.assign(this.TransientNodeIDIndicator, defaultIndicator, nodeOptions.TransientNodeIDIndicator);
        Object.assign(this.SeparatelyLockableIndicator, defaultIndicator, nodeOptions.SeparatelyLockableIndicator);
    }
}