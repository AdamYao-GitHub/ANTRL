// Generated from ./bodl.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./bodlParser";
import { ImporContext } from "./bodlParser";
import { BoContext } from "./bodlParser";
import { BobodyContext } from "./bodlParser";
import { ElementContext } from "./bodlParser";
import { NodeContext } from "./bodlParser";
import { NodebodyContext } from "./bodlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `bodlParser`.
 */
export interface bodlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `bodlParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `bodlParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `bodlParser.impor`.
	 * @param ctx the parse tree
	 */
	enterImpor?: (ctx: ImporContext) => void;
	/**
	 * Exit a parse tree produced by `bodlParser.impor`.
	 * @param ctx the parse tree
	 */
	exitImpor?: (ctx: ImporContext) => void;

	/**
	 * Enter a parse tree produced by `bodlParser.bo`.
	 * @param ctx the parse tree
	 */
	enterBo?: (ctx: BoContext) => void;
	/**
	 * Exit a parse tree produced by `bodlParser.bo`.
	 * @param ctx the parse tree
	 */
	exitBo?: (ctx: BoContext) => void;

	/**
	 * Enter a parse tree produced by `bodlParser.bobody`.
	 * @param ctx the parse tree
	 */
	enterBobody?: (ctx: BobodyContext) => void;
	/**
	 * Exit a parse tree produced by `bodlParser.bobody`.
	 * @param ctx the parse tree
	 */
	exitBobody?: (ctx: BobodyContext) => void;

	/**
	 * Enter a parse tree produced by `bodlParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `bodlParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `bodlParser.node`.
	 * @param ctx the parse tree
	 */
	enterNode?: (ctx: NodeContext) => void;
	/**
	 * Exit a parse tree produced by `bodlParser.node`.
	 * @param ctx the parse tree
	 */
	exitNode?: (ctx: NodeContext) => void;

	/**
	 * Enter a parse tree produced by `bodlParser.nodebody`.
	 * @param ctx the parse tree
	 */
	enterNodebody?: (ctx: NodebodyContext) => void;
	/**
	 * Exit a parse tree produced by `bodlParser.nodebody`.
	 * @param ctx the parse tree
	 */
	exitNodebody?: (ctx: NodebodyContext) => void;
}

