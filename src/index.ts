import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { bodlLexer } from '../bodlLexer';
import { bodlParser } from '../bodlParser'
import { parse } from 'url';
(() => {
    const testCode = `businessobject SalesOrder {
    element id: Integer;
    element name: String;
    node Items{
        element itemId: Integer;
        element itemName: String;
    }
}`

    const testHelloWorld = "Hello World";
    // Create the lexer and parser
    let inputStream = new ANTLRInputStream(testCode);
    let lexer = new bodlLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new bodlParser(tokenStream);

    let tree = parser.program();
    document.write(tree.toString());
})();


    //   const inputStream = new ANTLRInputStream(ruleString);
    //   const lexObject = new lexer.scopeLexer(inputStream);
    //   const tokenStream = new CommonTokenStream(lexObject);
    //   const parseObject = new parser.scopeParser(tokenStream);
    //   const result = parseObject.file();
    //   const evaluator = new ScopeEvaluator();
    //   const walker = new ParseTreeWalker();
    //   console.log(' type of ' , evaluator);
    //   walker.walk(evaluator as ParseTreeListener, result);
    //     // Parse and execute the code.
    //     console.log(' p :', parseObject);
    //   console.log(' result :', result.text);

// Parse the input, where `compilationUnit` is whatever entry point you defined
// let tree = parser.action();
// })();