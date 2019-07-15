import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { bodlLexer } from '../bodlLexer';
import { bodlParser } from '../bodlParser';
import { BodlVisitor } from './boldVisitor';

import businessObject from "./BOES/BO"
import Node from "./BOES/Node"
import {MetaObjectKey, Indicator} from "./BOES/Interfaces"

(() => {
    const testCode = `businessobject SalesOrder {
    element id: Integer;
    element name: String;
    node Items{
        element itemId: Integer;
        element itemName: String;
        node Content{
            element contentId: Integer;
        }
    }
}`
    // document.getElementById("inputVal").innerHTML += testCode;

    const testHelloWorld = "Hello World";
    // Create the lexer and parser
    let inputStream = new ANTLRInputStream(testCode);
    let lexer = new bodlLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new bodlParser(tokenStream);
    let tree = parser.program();

    let vistor = new BodlVisitor();
    const boJson = vistor.visit(tree);
    document.getElementById("AntlrVal").innerHTML += JSON.stringify(boJson);
    // document.write(tree.toStringTree());
})();
