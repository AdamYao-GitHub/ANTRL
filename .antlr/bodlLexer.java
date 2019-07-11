// Generated from c:\Users\i321777\Documents\GitHub\ANTRL\bodl.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class bodlLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, WS=9, 
		PKG=10, END=11, ID=12;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "WS", 
		"PKG", "END", "ID"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'import'", "'as'", "'businessobject'", "'{'", "'}'", "'element'", 
		"':'", "'node'", null, null, "';'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, "WS", "PKG", "END", 
		"ID"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public bodlLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "bodl.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\16d\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\4\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\6\3\6\3\7"+
		"\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\n\6\nI\n\n"+
		"\r\n\16\nJ\3\n\3\n\3\13\6\13P\n\13\r\13\16\13Q\3\13\6\13U\n\13\r\13\16"+
		"\13V\3\13\6\13Z\n\13\r\13\16\13[\3\f\3\f\3\r\6\ra\n\r\r\r\16\rb\2\2\16"+
		"\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\3\2\4\5\2\13"+
		"\f\17\17\"\"\4\2C\\c|\2h\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2"+
		"\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25"+
		"\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\3\33\3\2\2\2\5\"\3\2\2\2\7%\3\2\2\2"+
		"\t\64\3\2\2\2\13\66\3\2\2\2\r8\3\2\2\2\17@\3\2\2\2\21B\3\2\2\2\23H\3\2"+
		"\2\2\25T\3\2\2\2\27]\3\2\2\2\31`\3\2\2\2\33\34\7k\2\2\34\35\7o\2\2\35"+
		"\36\7r\2\2\36\37\7q\2\2\37 \7t\2\2 !\7v\2\2!\4\3\2\2\2\"#\7c\2\2#$\7u"+
		"\2\2$\6\3\2\2\2%&\7d\2\2&\'\7w\2\2\'(\7u\2\2()\7k\2\2)*\7p\2\2*+\7g\2"+
		"\2+,\7u\2\2,-\7u\2\2-.\7q\2\2./\7d\2\2/\60\7l\2\2\60\61\7g\2\2\61\62\7"+
		"e\2\2\62\63\7v\2\2\63\b\3\2\2\2\64\65\7}\2\2\65\n\3\2\2\2\66\67\7\177"+
		"\2\2\67\f\3\2\2\289\7g\2\29:\7n\2\2:;\7g\2\2;<\7o\2\2<=\7g\2\2=>\7p\2"+
		"\2>?\7v\2\2?\16\3\2\2\2@A\7<\2\2A\20\3\2\2\2BC\7p\2\2CD\7q\2\2DE\7f\2"+
		"\2EF\7g\2\2F\22\3\2\2\2GI\t\2\2\2HG\3\2\2\2IJ\3\2\2\2JH\3\2\2\2JK\3\2"+
		"\2\2KL\3\2\2\2LM\b\n\2\2M\24\3\2\2\2NP\t\3\2\2ON\3\2\2\2PQ\3\2\2\2QO\3"+
		"\2\2\2QR\3\2\2\2RS\3\2\2\2SU\7\60\2\2TO\3\2\2\2UV\3\2\2\2VT\3\2\2\2VW"+
		"\3\2\2\2WY\3\2\2\2XZ\t\3\2\2YX\3\2\2\2Z[\3\2\2\2[Y\3\2\2\2[\\\3\2\2\2"+
		"\\\26\3\2\2\2]^\7=\2\2^\30\3\2\2\2_a\t\3\2\2`_\3\2\2\2ab\3\2\2\2b`\3\2"+
		"\2\2bc\3\2\2\2c\32\3\2\2\2\b\2JQV[b\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}