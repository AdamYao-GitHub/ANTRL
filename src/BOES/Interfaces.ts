export interface TypingDataTypeNameKey{
    Name: string
    Namespace?: string
}


export interface Indicator{
    Indicator: boolean
    FinalIndicator: boolean
    RedefinedIndicator: boolean
}

export interface MetaObjectKey{
    Name: string
    Namespace?: string
}


export interface ElementKey{
    BusinessObjectNodeKey: BusinessObjectNodeKey
    Name: string
}

export interface BusinessObjectNodeKey{
    MetaObjectKey: MetaObjectKey
    Name: string
    ParentNode: string
}


export interface TypingDataTypeKey{
    ProxyName: string
}

export interface BuiltInDataType{
    DataTypeCode: string
    LengthNumberValue: string
    DecimalNumberValue: string
}

export const defaultIndicator: Indicator = {
    Indicator: false,
    FinalIndicator: false,
    RedefinedIndicator: null
}




