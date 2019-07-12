import businessObject from "./BO"

export default class BOJsonFactory {

    public static newBusinessObject(boName: string, boNamesapce?: string): any {
        return {
            boName: boName
        };
    }

    public static newNode(nodeName: string, BoName: string, parentNode?: string, CategoryCode?: string, enabledINdicator?: object, CreateEnabledIndicator?: object, UpdateEnabledIndicator?: object, DeleteEnabledIndicator?: object, ReadOnlyOperationIndicator?: object, TransientNodeIDIndicator?: object, SeparatelyLockableIndicator?: object) {
        return {
            nodeName: nodeName,
            BoName: BoName
        };
    }


    public static newElement(elementName: string) {
        return {
            elementName: elementName
        };
    }
}