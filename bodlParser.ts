// Generated from ./bodl.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { bodlListener } from "./bodlListener";
import { bodlVisitor } from "./bodlVisitor";


export class bodlParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly WS = 9;
	public static readonly PKG = 10;
	public static readonly END = 11;
	public static readonly ID = 12;
	public static readonly RULE_program = 0;
	public static readonly RULE_impor = 1;
	public static readonly RULE_bo = 2;
	public static readonly RULE_bobody = 3;
	public static readonly RULE_element = 4;
	public static readonly RULE_node = 5;
	public static readonly RULE_nodebody = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "impor", "bo", "bobody", "element", "node", "nodebody",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'import'", "'as'", "'businessobject'", "'{'", "'}'", "'element'", 
		"':'", "'node'", undefined, undefined, "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "WS", "PKG", "END", "ID",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(bodlParser._LITERAL_NAMES, bodlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return bodlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "bodl.g4"; }

	// @Override
	public get ruleNames(): string[] { return bodlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return bodlParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(bodlParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, bodlParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bodlParser.T__0) {
				{
				{
				this.state = 14;
				this.impor();
				}
				}
				this.state = 19;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 20;
			this.bo();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public impor(): ImporContext {
		let _localctx: ImporContext = new ImporContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, bodlParser.RULE_impor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this.match(bodlParser.T__0);
			this.state = 23;
			this.match(bodlParser.PKG);
			this.state = 24;
			this.match(bodlParser.T__1);
			this.state = 25;
			this.match(bodlParser.ID);
			this.state = 26;
			this.match(bodlParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bo(): BoContext {
		let _localctx: BoContext = new BoContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, bodlParser.RULE_bo);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.match(bodlParser.T__2);
			this.state = 29;
			this.match(bodlParser.ID);
			this.state = 30;
			this.match(bodlParser.T__3);
			this.state = 31;
			this.bobody();
			this.state = 32;
			this.match(bodlParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bobody(): BobodyContext {
		let _localctx: BobodyContext = new BobodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, bodlParser.RULE_bobody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 36;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case bodlParser.T__5:
					{
					this.state = 34;
					this.element();
					}
					break;
				case bodlParser.T__7:
					{
					this.state = 35;
					this.node();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 38;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === bodlParser.T__5 || _la === bodlParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, bodlParser.RULE_element);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.match(bodlParser.T__5);
			this.state = 41;
			this.match(bodlParser.ID);
			this.state = 42;
			this.match(bodlParser.T__6);
			this.state = 43;
			this.match(bodlParser.ID);
			this.state = 44;
			this.match(bodlParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public node(): NodeContext {
		let _localctx: NodeContext = new NodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, bodlParser.RULE_node);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this.match(bodlParser.T__7);
			this.state = 47;
			this.match(bodlParser.ID);
			this.state = 48;
			this.match(bodlParser.T__3);
			this.state = 49;
			this.nodebody();
			this.state = 50;
			this.match(bodlParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nodebody(): NodebodyContext {
		let _localctx: NodebodyContext = new NodebodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, bodlParser.RULE_nodebody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 54;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case bodlParser.T__5:
					{
					this.state = 52;
					this.element();
					}
					break;
				case bodlParser.T__7:
					{
					this.state = 53;
					this.node();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === bodlParser.T__5 || _la === bodlParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0E=\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x03\x02\x07\x02\x12\n\x02\f\x02\x0E\x02\x15\v\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x06\x05\'\n\x05\r" +
		"\x05\x0E\x05(\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x06\b9\n\b\r\b\x0E" +
		"\b:\x03\b\x02\x02\x02\t\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x02\x02\x02:\x02\x13\x03\x02\x02\x02\x04\x18\x03\x02\x02\x02\x06" +
		"\x1E\x03\x02\x02\x02\b&\x03\x02\x02\x02\n*\x03\x02\x02\x02\f0\x03\x02" +
		"\x02\x02\x0E8\x03\x02\x02\x02\x10\x12\x05\x04\x03\x02\x11\x10\x03\x02" +
		"\x02\x02\x12\x15\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02\x13\x14\x03\x02" +
		"\x02\x02\x14\x16\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x16\x17\x05\x06" +
		"\x04\x02\x17\x03\x03\x02\x02\x02\x18\x19\x07\x03\x02\x02\x19\x1A\x07\f" +
		"\x02\x02\x1A\x1B\x07\x04\x02\x02\x1B\x1C\x07\x0E\x02\x02\x1C\x1D\x07\r" +
		"\x02\x02\x1D\x05\x03\x02\x02\x02\x1E\x1F\x07\x05\x02\x02\x1F \x07\x0E" +
		"\x02\x02 !\x07\x06\x02\x02!\"\x05\b\x05\x02\"#\x07\x07\x02\x02#\x07\x03" +
		"\x02\x02\x02$\'\x05\n\x06\x02%\'\x05\f\x07\x02&$\x03\x02\x02\x02&%\x03" +
		"\x02\x02\x02\'(\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)\t" +
		"\x03\x02\x02\x02*+\x07\b\x02\x02+,\x07\x0E\x02\x02,-\x07\t\x02\x02-.\x07" +
		"\x0E\x02\x02./\x07\r\x02\x02/\v\x03\x02\x02\x0201\x07\n\x02\x0212\x07" +
		"\x0E\x02\x0223\x07\x06\x02\x0234\x05\x0E\b\x0245\x07\x07\x02\x025\r\x03" +
		"\x02\x02\x0269\x05\n\x06\x0279\x05\f\x07\x0286\x03\x02\x02\x0287\x03\x02" +
		"\x02\x029:\x03\x02\x02\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;\x0F\x03" +
		"\x02\x02\x02\x07\x13&(8:";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!bodlParser.__ATN) {
			bodlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(bodlParser._serializedATN));
		}

		return bodlParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public bo(): BoContext {
		return this.getRuleContext(0, BoContext);
	}
	public impor(): ImporContext[];
	public impor(i: number): ImporContext;
	public impor(i?: number): ImporContext | ImporContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImporContext);
		} else {
			return this.getRuleContext(i, ImporContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bodlParser.RULE_program; }
	// @Override
	public enterRule(listener: bodlListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: bodlListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: bodlVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImporContext extends ParserRuleContext {
	public PKG(): TerminalNode { return this.getToken(bodlParser.PKG, 0); }
	public ID(): TerminalNode { return this.getToken(bodlParser.ID, 0); }
	public END(): TerminalNode { return this.getToken(bodlParser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bodlParser.RULE_impor; }
	// @Override
	public enterRule(listener: bodlListener): void {
		if (listener.enterImpor) {
			listener.enterImpor(this);
		}
	}
	// @Override
	public exitRule(listener: bodlListener): void {
		if (listener.exitImpor) {
			listener.exitImpor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: bodlVisitor<Result>): Result {
		if (visitor.visitImpor) {
			return visitor.visitImpor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(bodlParser.ID, 0); }
	public bobody(): BobodyContext {
		return this.getRuleContext(0, BobodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bodlParser.RULE_bo; }
	// @Override
	public enterRule(listener: bodlListener): void {
		if (listener.enterBo) {
			listener.enterBo(this);
		}
	}
	// @Override
	public exitRule(listener: bodlListener): void {
		if (listener.exitBo) {
			listener.exitBo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: bodlVisitor<Result>): Result {
		if (visitor.visitBo) {
			return visitor.visitBo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BobodyContext extends ParserRuleContext {
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	public node(): NodeContext[];
	public node(i: number): NodeContext;
	public node(i?: number): NodeContext | NodeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NodeContext);
		} else {
			return this.getRuleContext(i, NodeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bodlParser.RULE_bobody; }
	// @Override
	public enterRule(listener: bodlListener): void {
		if (listener.enterBobody) {
			listener.enterBobody(this);
		}
	}
	// @Override
	public exitRule(listener: bodlListener): void {
		if (listener.exitBobody) {
			listener.exitBobody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: bodlVisitor<Result>): Result {
		if (visitor.visitBobody) {
			return visitor.visitBobody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bodlParser.ID);
		} else {
			return this.getToken(bodlParser.ID, i);
		}
	}
	public END(): TerminalNode { return this.getToken(bodlParser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bodlParser.RULE_element; }
	// @Override
	public enterRule(listener: bodlListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: bodlListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: bodlVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NodeContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(bodlParser.ID, 0); }
	public nodebody(): NodebodyContext {
		return this.getRuleContext(0, NodebodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bodlParser.RULE_node; }
	// @Override
	public enterRule(listener: bodlListener): void {
		if (listener.enterNode) {
			listener.enterNode(this);
		}
	}
	// @Override
	public exitRule(listener: bodlListener): void {
		if (listener.exitNode) {
			listener.exitNode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: bodlVisitor<Result>): Result {
		if (visitor.visitNode) {
			return visitor.visitNode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NodebodyContext extends ParserRuleContext {
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	public node(): NodeContext[];
	public node(i: number): NodeContext;
	public node(i?: number): NodeContext | NodeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NodeContext);
		} else {
			return this.getRuleContext(i, NodeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bodlParser.RULE_nodebody; }
	// @Override
	public enterRule(listener: bodlListener): void {
		if (listener.enterNodebody) {
			listener.enterNodebody(this);
		}
	}
	// @Override
	public exitRule(listener: bodlListener): void {
		if (listener.exitNodebody) {
			listener.exitNodebody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: bodlVisitor<Result>): Result {
		if (visitor.visitNodebody) {
			return visitor.visitNodebody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


