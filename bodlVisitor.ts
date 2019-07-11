// Generated from ./bodl.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./bodlParser";
import { ImporContext } from "./bodlParser";
import { BoContext } from "./bodlParser";
import { BobodyContext } from "./bodlParser";
import { ElementContext } from "./bodlParser";
import { NodeContext } from "./bodlParser";
import { NodebodyContext } from "./bodlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `bodlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface bodlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `bodlParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `bodlParser.impor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImpor?: (ctx: ImporContext) => Result;

	/**
	 * Visit a parse tree produced by `bodlParser.bo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBo?: (ctx: BoContext) => Result;

	/**
	 * Visit a parse tree produced by `bodlParser.bobody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBobody?: (ctx: BobodyContext) => Result;

	/**
	 * Visit a parse tree produced by `bodlParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `bodlParser.node`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNode?: (ctx: NodeContext) => Result;

	/**
	 * Visit a parse tree produced by `bodlParser.nodebody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNodebody?: (ctx: NodebodyContext) => Result;
}

