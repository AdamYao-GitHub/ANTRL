import Indicator from "./Indicator";
import Key from "./Key";
export default class node {
    Elements: Array<Object>
    Key: Object
    CategoryCode: string
    EnabledIndicator: Indicator
    CreateEnabledIndicator: Indicator
    UpdateEnabledIndicator: Indicator
    DeleteEnabledIndicator: Indicator
    ReadOnlyOperationIndicator: Indicator
    TransientNodeIDIndicator: Indicator
    SeparatelyLockableIndicator: Indicator

    constructor(nodeName: string, BoName: string, parentNode?: string, CategoryCode?: string, enabledINdicator?: object, CreateEnabledIndicator?: object, UpdateEnabledIndicator?: object, DeleteEnabledIndicator?: object, ReadOnlyOperationIndicator?: object, TransientNodeIDIndicator?: object, SeparatelyLockableIndicator?: object) {
        if (nodeName && BoName) {
            Object.assign(this.Key, {
                MetaObjectKey: new Key(nodeName, BoName),
                Name: nodeName,
                ParentNode: parentNode
            })
        }
        if (CategoryCode) this.CategoryCode = CategoryCode
        Object.assign(this.EnabledIndicator, new Indicator(enabledINdicator || {}));
        Object.assign(this.CreateEnabledIndicator, new Indicator(CreateEnabledIndicator || {}));
        Object.assign(this.UpdateEnabledIndicator, new Indicator(UpdateEnabledIndicator || {}));
        Object.assign(this.DeleteEnabledIndicator, new Indicator(DeleteEnabledIndicator || {}));
        Object.assign(this.ReadOnlyOperationIndicator, new Indicator(ReadOnlyOperationIndicator || {}));
        Object.assign(this.TransientNodeIDIndicator, new Indicator(TransientNodeIDIndicator || {}));
        Object.assign(this.SeparatelyLockableIndicator, new Indicator(SeparatelyLockableIndicator || {}));
    }
}