/**
 * Define the data template of the business object
 */
import Node from "./Node";
import BOKey from "./Key";

export default class businessObject {
    key: BOKey;
    Nodes: Array<Node>;
    
    constructor(boName: string, boNamesapce?: string) {
        this.key = new BOKey(boName, boNamesapce || "http://sap.com/x4/Metamodel");
        this.Nodes = [new Node("Root", boName)]
    }
}