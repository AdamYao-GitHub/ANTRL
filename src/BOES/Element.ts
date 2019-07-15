import {
    Indicator,
    defaultIndicator,
    MetaObjectKey,
    TypingDataTypeNameKey,
    ElementKey,
    TypingDataTypeKey,
    BuiltInDataType
} from "./Interfaces"

const defaultMetObject: MetaObjectKey = {
    Name: "",
    Namespace: "http://sap.com/x4/Metamodel"
}


export default class Element {
    Key: ElementKey = {
        BusinessObjectNodeKey: {
            MetaObjectKey: {
                Name: "",
                Namespace: ""
            },
            Name: "",
            ParentNode: ""
        },
        Name: ""
    }
    TypingDataTypeNameKey: TypingDataTypeNameKey = {
        Name: "",
        Namespace: ""
    }
    TypingDataTypeKey: TypingDataTypeKey = {
        ProxyName: ""
    }
    BuiltInDataType: BuiltInDataType = {
        DataTypeCode: "",
        LengthNumberValue: "",
        DecimalNumberValue: ""
    }
    EnabledIndicator: Indicator = defaultIndicator
    ReadOnlyIndicator: Indicator = defaultIndicator
    TransactionalMandatoryIndicator: Indicator = defaultIndicator
    TransientIndicator: Indicator = defaultIndicator

    constructor(
        ElementOptions: {
            MetaObjectKey: MetaObjectKey,
            parentNode?: string,
            TypingDataTypeNameKey?: TypingDataTypeNameKey,
            TypingDataTypeKey?:TypingDataTypeKey,
            BuiltInDataType?: BuiltInDataType,
            EnabledIndicator?: Indicator,
            ReadOnlyIndicator?: Indicator,
            TransactionalMandatoryIndicator?: Indicator,
            TransientIndicator?: Indicator
        }) {

        Object.assign(this.Key, {
            BusinessObjectNodeKey: {
                MetaObjectKey: defaultMetObject,
                Name: "",
                ParentNode: ""
            },
            Name: ""
        }, {
                BusinessObjectNodeKey: {
                    MetaObjectKey: ElementOptions.MetaObjectKey,
                    Name: ElementOptions.MetaObjectKey.Name,
                    ParentNode: ElementOptions.parentNode
                },
                Name: ElementOptions.MetaObjectKey.Name
            })
        this.BuiltInDataType = ElementOptions.BuiltInDataType || {
            DataTypeCode: "",
            LengthNumberValue: "",
            DecimalNumberValue: ""
        };
        this.TypingDataTypeNameKey = ElementOptions.TypingDataTypeNameKey || {
            Name: "",
            Namespace: ""
        };
        this.TypingDataTypeKey = ElementOptions.TypingDataTypeKey || {
            ProxyName:""
        }
        Object.assign(this.TypingDataTypeNameKey, ElementOptions.TypingDataTypeNameKey);
        Object.assign(this.EnabledIndicator, defaultIndicator, ElementOptions.EnabledIndicator);
        Object.assign(this.ReadOnlyIndicator, defaultIndicator, ElementOptions.ReadOnlyIndicator);
        Object.assign(this.TransactionalMandatoryIndicator, defaultIndicator, ElementOptions.TransactionalMandatoryIndicator);
        Object.assign(this.TransientIndicator, defaultIndicator, ElementOptions.TransientIndicator);
    }
}