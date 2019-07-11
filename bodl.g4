/** Grammars always start with a grammar header. This grammar is called
* bodl and must match the filename: bodl.g4
*/
grammar bodl;
program : impor* bo ;
impor : 'import' PKG 'as' ID END ;
bo : 'businessobject' ID '{' bobody '}' ;
bobody : (element | node)+ ;
element : 'element' ID ':' ID END ;
node : 'node' ID '{' nodebody '}' ;
nodebody :  (element | node)+ ;

// parser rules start with lowercase letters, lexer rules with uppercase
WS : [ \t\r\n]+ -> skip ; // Define whitespace rule, toss it out
PKG : ([a-zA-Z]+'.')+[a-zA-Z]+ ;
END : ';' ;
ID : [a-zA-Z]+ ;