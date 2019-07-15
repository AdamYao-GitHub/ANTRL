import businessObject from "./BO"
import Node from "./Node"
import {MetaObjectKey, Indicator} from "./Interfaces"
export default class BOJsonFactory {

    public static newBusinessObject(boName: string, boNamesapce?: string): businessObject {
        const newBO =  new businessObject(boName, boNamesapce);
        newBO.Nodes.push(new Node({metaObjectKey: {
            Name: "Root"
        }}))
        return newBO;
    }

    public static newNode(nodeOptions: {
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
    }): Node {
        return new Node(nodeOptions);
    }



    public static newElement(elementName: string) {
        return {
            elementName: elementName
        };
    }
}