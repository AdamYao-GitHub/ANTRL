import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { bodlLexer } from '../bodlLexer';
import { bodlParser } from '../bodlParser';
import {BodlVisitor} from  './boldVisitor';

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

    const testHelloWorld = "Hello World";
    // Create the lexer and parser
    let inputStream = new ANTLRInputStream(testCode);
    let lexer = new bodlLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new bodlParser(tokenStream);
    // let a = new bodlVisitor()
    let tree = parser.program();

    let vistor = new BodlVisitor();
    const boJson = vistor.visit(tree);
    document.getElementById("app").innerHTML += JSON.stringify(boJson);
    // document.write(tree.toStringTree());
})();
