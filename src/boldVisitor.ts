import { bodlVisitor } from '../bodlVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ProgramContext, ElementContext, BobodyContext, BoContext } from '../bodlParser'
import businessObject from "./BOES/BO";

// Extend the AbstractParseTreeVisitor to get default visitor behaviour
export class BodlVisitor extends AbstractParseTreeVisitor<number> implements bodlVisitor<number> {

    defaultResult() {
        return 0
    }

    aggregateResult(aggregate: number, nextResult: number) {
        return aggregate + nextResult
    }

    visitProgram(context: ProgramContext): number {
        return 1 + super.visitChildren(context);
    }

    //   visitBobody?: (ctx: BobodyContext) 
    visitBo(context: BoContext): number {
        // const childCount = context.childCount;
        // for (let i = 0; i < childCount; i++) {
        var a = new businessObject(context.ID().text);
        // const bobody = context.getChild(0);
            // this.visit()
            // bobody.get
        document.getElementById("app").innerHTML += "  BO Name: " + JSON.stringify(a);
        // }


        // document.getElementById("app").innerHTML += "  boBodyReturn: " + super.visitChildren(context);
        return 1 + super.visitChildren(context);
    }

    visitBobody(context: BobodyContext): number{
        // document.getElementById("app").innerHTML += "   BOBODY parent: " + context.;
       var a =  context.getChild(0).text;
    //    a.ID().text
        // super.visit(a);
        return 1 + super.visitChildren(context);
    }

    // visitNode(){}

    visitElement(context: ElementContext): number {
        //   document.write(context.toStringTree());
        document.getElementById("app").innerHTML += "  Element: " + context.toStringTree();
        return 1 + super.visitChildren(context);
    }
}

// Create the visitor
// const countFunctionsVisitor = new CountFunctionsVisitor()
// // Use the visitor entry point
// countFunctionsVisitor.visit(tree)