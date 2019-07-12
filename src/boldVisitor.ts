import { bodlVisitor } from '../bodlVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ProgramContext, BoContext, ElementContext, BobodyContext, NodeContext, NodebodyContext } from '../bodlParser'
import { log } from 'util';
import BOJsonFactory from './BOES/BOJsonFactory';
import node from './BOES/Indicator';

// Extend the AbstractParseTreeVisitor to get default visitor behaviour
export class BodlVisitor extends AbstractParseTreeVisitor<object> implements bodlVisitor<object> {

  protected defaultResult(): object {
    throw new Error("Method not implemented.");
  }

  private boName: string;

  visitProgram(context: ProgramContext): object {
    return super.visit(context.bo());
  }

  visitBo(context: BoContext): object {
    this.boName = context.ID().text;
    const bo = BOJsonFactory.newBusinessObject(this.boName);
    Object.assign(bo, super.visit(context.bobody()));
         
    return bo;
  }

  visitElement(context: ElementContext): object {
    const elementName = context.ID()[0].text;
    const element = BOJsonFactory.newElement(elementName);
    return element;
  }

  visitBobody(context: BobodyContext): object {
    const boBody:any = {Nodes:[], Elements:[]};
    for (const elementContext of context.element()) {  
      boBody.Elements.push(super.visit(elementContext));      
    }
    for (const nodeContext of context.node()) {      
      boBody.Nodes.push(super.visit(nodeContext));
    }
    return boBody;
  }

  visitNode(context: NodeContext): object {
      const nodeName = context.ID().text;
      const node = BOJsonFactory.newNode(nodeName, this.boName);
      Object.assign(node, super.visit(context.nodebody()));
      return node;
  }

  visitNodebody(context: NodebodyContext): object {
    const nodeBody:any = {Nodes:[], Elements:[]}
    for (const elementContext of context.element()) {
      nodeBody.Elements.push(super.visit(elementContext));      
    }
    for (const nodeContext of context.node()) {      
      nodeBody.Nodes.push(super.visit(nodeContext));
    }
    return nodeBody;
  }
  
}

// Create the visitor
// const countFunctionsVisitor = new CountFunctionsVisitor()
// // Use the visitor entry point
// countFunctionsVisitor.visit(tree)