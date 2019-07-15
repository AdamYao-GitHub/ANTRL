/**
 * Define the data template of the business object
 */
import {Indicator, MetaObjectKey} from "./Interfaces"
import Node from "./Node"

export default class businessObject {
    Key: MetaObjectKey = {
        Name: "",
        Namespace: ""
    };
    Nodes: Array<Node>;
    
    constructor(boName: string, boNamesapce?: string) {
        Object.assign(this.Key, {
            Name: boName,
            Namespa: boNamesapce || "http://sap.com/x4/Metamodel"
        });
        this.Nodes = []
    }
}