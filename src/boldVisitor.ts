import { bodlVisitor } from '../bodlVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ProgramContext, BoContext, ElementContext, BobodyContext, NodeContext, NodebodyContext } from '../bodlParser'
import { log } from 'util';
import BOJsonFactory from './BOES/BOJsonFactory';

// Extend the AbstractParseTreeVisitor to get default visitor behaviour
export class BodlVisitor extends AbstractParseTreeVisitor<object> implements bodlVisitor<object> {

  protected defaultResult(): object {
    throw new Error("Method not implemented.");
  }

  private boName: string;

  visitProgram(context: ProgramContext): object {
    document.getElementById("process").innerHTML += "Visit Program: ";
    return super.visit(context.bo());
  }

  visitBo(context: BoContext): object {
    this.boName = context.ID().text;
    document.getElementById("process").innerHTML += "Visit BO: " + this.boName;
    const bo = BOJsonFactory.newBusinessObject(this.boName);
  
    Object.assign(bo.Nodes.slice(0, 1).pop(), super.visit(context.bobody()));
    document.getElementById("process").innerHTML += JSON.stringify(bo);
    // document.getElementById("app").innerHTML += JSON.stringify(bo);
    return bo;
  }

  visitElement(context: ElementContext): object {
    const elementName = context.ID()[0].text;
    document.getElementById("process").innerHTML += "Visit Element: " + elementName;
    const element = BOJsonFactory.newElement(elementName);
    document.getElementById("process").innerHTML += JSON.stringify(element);
    return element;
  }

  visitBobody(context: BobodyContext): object {
    const boBody:any = {Nodes:[], Elements:[]};
    document.getElementById("process").innerHTML += "Visit BO Body: ";
    for (const elementContext of context.element()) {  
      boBody.Elements.push(super.visit(elementContext));      
    }
    for (const nodeContext of context.node()) {      
      boBody.Nodes.push(super.visit(nodeContext));
    }
    document.getElementById("process").innerHTML += JSON.stringify(boBody);
    return boBody;
  }

  visitNode(context: NodeContext): object {
      const nodeName = context.ID().text;
      document.getElementById("process").innerHTML += "Visit Node: " + nodeName;
    //   nodeName, this.boName
      const node = BOJsonFactory.newNode({
        metaObjectKey: {
            Name: nodeName
        }         
      });
      Object.assign(node, super.visit(context.nodebody()));
      document.getElementById("process").innerHTML += JSON.stringify(node);
      return node;
  }

  visitNodebody(context: NodebodyContext): object {
    const nodeBody:any = {Nodes:[], Elements:[]}
    document.getElementById("process").innerHTML += "Visit Node Body: ";
    for (const elementContext of context.element()) {
      nodeBody.Elements.push(super.visit(elementContext));      
    }
    for (const nodeContext of context.node()) {      
      nodeBody.Nodes.push(super.visit(nodeContext));
    }
    document.getElementById("process").innerHTML += JSON.stringify(nodeBody);
    return nodeBody;
  }
}

// Create the visitor
// const countFunctionsVisitor = new CountFunctionsVisitor()
// // Use the visitor entry point
// countFunctionsVisitor.visit(tree)