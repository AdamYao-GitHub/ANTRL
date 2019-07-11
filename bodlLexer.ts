// Generated from ./bodl.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class bodlLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "WS", 
		"PKG", "END", "ID",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'import'", "'as'", "'businessobject'", "'{'", "'}'", "'element'", 
		"':'", "'node'", undefined, undefined, "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "WS", "PKG", "END", "ID",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(bodlLexer._LITERAL_NAMES, bodlLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return bodlLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(bodlLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "bodl.g4"; }

	// @Override
	public get ruleNames(): string[] { return bodlLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return bodlLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return bodlLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return bodlLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0Ed\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x06\nI\n\n\r" +
		"\n\x0E\nJ\x03\n\x03\n\x03\v\x06\vP\n\v\r\v\x0E\vQ\x03\v\x06\vU\n\v\r\v" +
		"\x0E\vV\x03\v\x06\vZ\n\v\r\v\x0E\v[\x03\f\x03\f\x03\r\x06\ra\n\r\r\r\x0E" +
		"\rb\x02\x02\x02\x0E\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02" +
		"\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02" +
		"\x0E\x03\x02\x04\x05\x02\v\f\x0F\x0F\"\"\x04\x02C\\c|\x02h\x02\x03\x03" +
		"\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03" +
		"\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02" +
		"\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02" +
		"\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x03\x1B\x03\x02" +
		"\x02\x02\x05\"\x03\x02\x02\x02\x07%\x03\x02\x02\x02\t4\x03\x02\x02\x02" +
		"\v6\x03\x02\x02\x02\r8\x03\x02\x02\x02\x0F@\x03\x02\x02\x02\x11B\x03\x02" +
		"\x02\x02\x13H\x03\x02\x02\x02\x15T\x03\x02\x02\x02\x17]\x03\x02\x02\x02" +
		"\x19`\x03\x02\x02\x02\x1B\x1C\x07k\x02\x02\x1C\x1D\x07o\x02\x02\x1D\x1E" +
		"\x07r\x02\x02\x1E\x1F\x07q\x02\x02\x1F \x07t\x02\x02 !\x07v\x02\x02!\x04" +
		"\x03\x02\x02\x02\"#\x07c\x02\x02#$\x07u\x02\x02$\x06\x03\x02\x02\x02%" +
		"&\x07d\x02\x02&\'\x07w\x02\x02\'(\x07u\x02\x02()\x07k\x02\x02)*\x07p\x02" +
		"\x02*+\x07g\x02\x02+,\x07u\x02\x02,-\x07u\x02\x02-.\x07q\x02\x02./\x07" +
		"d\x02\x02/0\x07l\x02\x0201\x07g\x02\x0212\x07e\x02\x0223\x07v\x02\x02" +
		"3\b\x03\x02\x02\x0245\x07}\x02\x025\n\x03\x02\x02\x0267\x07\x7F\x02\x02" +
		"7\f\x03\x02\x02\x0289\x07g\x02\x029:\x07n\x02\x02:;\x07g\x02\x02;<\x07" +
		"o\x02\x02<=\x07g\x02\x02=>\x07p\x02\x02>?\x07v\x02\x02?\x0E\x03\x02\x02" +
		"\x02@A\x07<\x02\x02A\x10\x03\x02\x02\x02BC\x07p\x02\x02CD\x07q\x02\x02" +
		"DE\x07f\x02\x02EF\x07g\x02\x02F\x12\x03\x02\x02\x02GI\t\x02\x02\x02HG" +
		"\x03\x02\x02\x02IJ\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02" +
		"KL\x03\x02\x02\x02LM\b\n\x02\x02M\x14\x03\x02\x02\x02NP\t\x03\x02\x02" +
		"ON\x03\x02\x02\x02PQ\x03\x02\x02\x02QO\x03\x02\x02\x02QR\x03\x02\x02\x02" +
		"RS\x03\x02\x02\x02SU\x070\x02\x02TO\x03\x02\x02\x02UV\x03\x02\x02\x02" +
		"VT\x03\x02\x02\x02VW\x03\x02\x02\x02WY\x03\x02\x02\x02XZ\t\x03\x02\x02" +
		"YX\x03\x02\x02\x02Z[\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03\x02\x02" +
		"\x02\\\x16\x03\x02\x02\x02]^\x07=\x02\x02^\x18\x03\x02\x02\x02_a\t\x03" +
		"\x02\x02`_\x03\x02\x02\x02ab\x03\x02\x02\x02b`\x03\x02\x02\x02bc\x03\x02" +
		"\x02\x02c\x1A\x03\x02\x02\x02\b\x02JQV[b\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!bodlLexer.__ATN) {
			bodlLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(bodlLexer._serializedATN));
		}

		return bodlLexer.__ATN;
	}

}

