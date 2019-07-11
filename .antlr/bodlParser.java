// Generated from c:\Users\i321777\Documents\GitHub\ANTRL\bodl.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class bodlParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, WS=9, 
		PKG=10, END=11, ID=12;
	public static final int
		RULE_program = 0, RULE_impor = 1, RULE_bo = 2, RULE_bobody = 3, RULE_element = 4, 
		RULE_node = 5, RULE_nodebody = 6;
	public static final String[] ruleNames = {
		"program", "impor", "bo", "bobody", "element", "node", "nodebody"
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

	@Override
	public String getGrammarFileName() { return "bodl.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public bodlParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ProgramContext extends ParserRuleContext {
		public BoContext bo() {
			return getRuleContext(BoContext.class,0);
		}
		public List<ImporContext> impor() {
			return getRuleContexts(ImporContext.class);
		}
		public ImporContext impor(int i) {
			return getRuleContext(ImporContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(17);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0) {
				{
				{
				setState(14);
				impor();
				}
				}
				setState(19);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(20);
			bo();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImporContext extends ParserRuleContext {
		public TerminalNode PKG() { return getToken(bodlParser.PKG, 0); }
		public TerminalNode ID() { return getToken(bodlParser.ID, 0); }
		public TerminalNode END() { return getToken(bodlParser.END, 0); }
		public ImporContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_impor; }
	}

	public final ImporContext impor() throws RecognitionException {
		ImporContext _localctx = new ImporContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_impor);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(22);
			match(T__0);
			setState(23);
			match(PKG);
			setState(24);
			match(T__1);
			setState(25);
			match(ID);
			setState(26);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BoContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(bodlParser.ID, 0); }
		public BobodyContext bobody() {
			return getRuleContext(BobodyContext.class,0);
		}
		public BoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bo; }
	}

	public final BoContext bo() throws RecognitionException {
		BoContext _localctx = new BoContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_bo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			match(T__2);
			setState(29);
			match(ID);
			setState(30);
			match(T__3);
			setState(31);
			bobody();
			setState(32);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BobodyContext extends ParserRuleContext {
		public List<ElementContext> element() {
			return getRuleContexts(ElementContext.class);
		}
		public ElementContext element(int i) {
			return getRuleContext(ElementContext.class,i);
		}
		public List<NodeContext> node() {
			return getRuleContexts(NodeContext.class);
		}
		public NodeContext node(int i) {
			return getRuleContext(NodeContext.class,i);
		}
		public BobodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bobody; }
	}

	public final BobodyContext bobody() throws RecognitionException {
		BobodyContext _localctx = new BobodyContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_bobody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(36); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(36);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__5:
					{
					setState(34);
					element();
					}
					break;
				case T__7:
					{
					setState(35);
					node();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(38); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==T__5 || _la==T__7 );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(bodlParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(bodlParser.ID, i);
		}
		public TerminalNode END() { return getToken(bodlParser.END, 0); }
		public ElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_element; }
	}

	public final ElementContext element() throws RecognitionException {
		ElementContext _localctx = new ElementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_element);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			match(T__5);
			setState(41);
			match(ID);
			setState(42);
			match(T__6);
			setState(43);
			match(ID);
			setState(44);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NodeContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(bodlParser.ID, 0); }
		public NodebodyContext nodebody() {
			return getRuleContext(NodebodyContext.class,0);
		}
		public NodeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_node; }
	}

	public final NodeContext node() throws RecognitionException {
		NodeContext _localctx = new NodeContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_node);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			match(T__7);
			setState(47);
			match(ID);
			setState(48);
			match(T__3);
			setState(49);
			nodebody();
			setState(50);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NodebodyContext extends ParserRuleContext {
		public List<ElementContext> element() {
			return getRuleContexts(ElementContext.class);
		}
		public ElementContext element(int i) {
			return getRuleContext(ElementContext.class,i);
		}
		public List<NodeContext> node() {
			return getRuleContexts(NodeContext.class);
		}
		public NodeContext node(int i) {
			return getRuleContext(NodeContext.class,i);
		}
		public NodebodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nodebody; }
	}

	public final NodebodyContext nodebody() throws RecognitionException {
		NodebodyContext _localctx = new NodebodyContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_nodebody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(54); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(54);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__5:
					{
					setState(52);
					element();
					}
					break;
				case T__7:
					{
					setState(53);
					node();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(56); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==T__5 || _la==T__7 );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\16=\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\3\2\7\2\22\n\2\f\2\16\2\25"+
		"\13\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5"+
		"\6\5\'\n\5\r\5\16\5(\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3"+
		"\b\3\b\6\b9\n\b\r\b\16\b:\3\b\2\2\t\2\4\6\b\n\f\16\2\2\2:\2\23\3\2\2\2"+
		"\4\30\3\2\2\2\6\36\3\2\2\2\b&\3\2\2\2\n*\3\2\2\2\f\60\3\2\2\2\168\3\2"+
		"\2\2\20\22\5\4\3\2\21\20\3\2\2\2\22\25\3\2\2\2\23\21\3\2\2\2\23\24\3\2"+
		"\2\2\24\26\3\2\2\2\25\23\3\2\2\2\26\27\5\6\4\2\27\3\3\2\2\2\30\31\7\3"+
		"\2\2\31\32\7\f\2\2\32\33\7\4\2\2\33\34\7\16\2\2\34\35\7\r\2\2\35\5\3\2"+
		"\2\2\36\37\7\5\2\2\37 \7\16\2\2 !\7\6\2\2!\"\5\b\5\2\"#\7\7\2\2#\7\3\2"+
		"\2\2$\'\5\n\6\2%\'\5\f\7\2&$\3\2\2\2&%\3\2\2\2\'(\3\2\2\2(&\3\2\2\2()"+
		"\3\2\2\2)\t\3\2\2\2*+\7\b\2\2+,\7\16\2\2,-\7\t\2\2-.\7\16\2\2./\7\r\2"+
		"\2/\13\3\2\2\2\60\61\7\n\2\2\61\62\7\16\2\2\62\63\7\6\2\2\63\64\5\16\b"+
		"\2\64\65\7\7\2\2\65\r\3\2\2\2\669\5\n\6\2\679\5\f\7\28\66\3\2\2\28\67"+
		"\3\2\2\29:\3\2\2\2:8\3\2\2\2:;\3\2\2\2;\17\3\2\2\2\7\23&(8:";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}