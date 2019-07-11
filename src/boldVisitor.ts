import { bodlVisitor } from '../bodlVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ProgramContext } from '../bodlParser'
import { log } from 'util';

// Extend the AbstractParseTreeVisitor to get default visitor behaviour
export class BodlVisitor extends AbstractParseTreeVisitor<number> implements bodlVisitor<number> {

  defaultResult() {
    return 0
  }

  aggregateResult(aggregate: number, nextResult: number) {
    return aggregate + nextResult
  }

  visitProgramContext(context: ProgramContext): number {
    return 1 + super.visitChildren(context)
    log("aaaa");
  }
}

// Create the visitor
// const countFunctionsVisitor = new CountFunctionsVisitor()
// // Use the visitor entry point
// countFunctionsVisitor.visit(tree)