using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.TypeSystem;
using System;
using System.Collections.Generic;

namespace Bridge.Contract
{
    public interface IEmitter : ILog, IAstVisitor
    {
        string Tag
        {
            get;
            set;
        }

        IAssemblyInfo AssemblyInfo
        {
            get;
            set;
        }

        AssignmentOperatorType AssignmentType
        {
            get;
            set;
        }

        UnaryOperatorType UnaryOperatorType
        {
            get;
            set;
        }

        bool IsUnaryAccessor
        {
            get;
            set;
        }

        IAsyncBlock AsyncBlock
        {
            get;
            set;
        }

        bool AsyncExpressionHandling
        {
            get;
            set;
        }

        SwitchStatement AsyncSwitch
        {
            get;
            set;
        }

        List<string> AsyncVariables
        {
            get;
            set;
        }

        bool Comma
        {
            get;
            set;
        }

        int CompareTypeInfosByName(ITypeInfo x, ITypeInfo y);

        int CompareTypeInfosByPriority(ITypeInfo x, ITypeInfo y);

        void SortTypesByInheritance();

        List<IPluginDependency> CurrentDependencies
        {
            get;
            set;
        }

        List<TranslatorOutputItem> Emit();

        bool EnableSemicolon
        {
            get;
            set;
        }

        string GetEntityName(EntityDeclaration entity);

        string GetParameterName(ParameterDeclaration entity);

        NameSemantic GetNameSemantic(IEntity member);

        string GetEntityName(IEntity member);

        string GetTypeName(ITypeDefinition typeDefinition);

        string GetLiteralEntityName(IEntity member);

        string GetInline(EntityDeclaration method);

        string GetInline(IEntity entity);

        Tuple<bool, bool, string> GetInlineCode(InvocationExpression node);

        Tuple<bool, bool, string> GetInlineCode(MemberReferenceExpression node);

        bool IsForbiddenInvocation(InvocationExpression node);

        ITypeDefinition GetTypeDefinition();

        ITypeDefinition GetTypeDefinition(AstType reference, bool safe = false);

        ITypeDefinition GetTypeDefinition(IType type);

        string GetTypeHierarchy();

        AstNode IgnoreBlock
        {
            get;
            set;
        }

        bool IsAssignment
        {
            get;
            set;
        }

        bool IsAsync
        {
            get;
            set;
        }

        bool IsYield
        {
            get;
            set;
        }

        bool IsNativeMember(string fullName);

        bool IsNewLine
        {
            get;
            set;
        }

        int IteratorCount
        {
            get;
            set;
        }

        List<IJumpInfo> JumpStatements
        {
            get;
            set;
        }

        IWriterInfo LastSavedWriter
        {
            get;
            set;
        }

        int Level
        {
            get;
        }

        int InitialLevel
        {
            get;
        }

        int ResetLevel(int? level = null);

        InitPosition? InitPosition
        {
            get;
            set;
        }

        Dictionary<string, AstType> Locals
        {
            get;
            set;
        }

        Dictionary<IVariable, string> LocalsMap
        {
            get;
            set;
        }

        Dictionary<string, string> LocalsNamesMap
        {
            get;
            set;
        }

        Stack<Dictionary<string, AstType>> LocalsStack
        {
            get;
            set;
        }

        ILogger Log
        {
            get;
            set;
        }

        IEnumerable<IMethod> MethodsGroup
        {
            get;
            set;
        }

        Dictionary<int, System.Text.StringBuilder> MethodsGroupBuilder
        {
            get;
            set;
        }

        AstNode NoBraceBlock
        {
            get;
            set;
        }

        Action BeforeBlock
        {
            get;
            set;
        }

        System.Text.StringBuilder Output
        {
            get;
            set;
        }

        string SourceFileName
        {
            get;
            set;
        }

        int SourceFileNameIndex
        {
            get;
            set;
        }

        string LastSequencePoint
        {
            get;
            set;
        }

        IEmitterOutputs Outputs
        {
            get;
            set;
        }

        IEmitterOutput EmitterOutput
        {
            get;
            set;
        }

        bool ReplaceAwaiterByVar
        {
            get;
            set;
        }

        IMemberResolver Resolver
        {
            get;
            set;
        }

        bool SkipSemiColon
        {
            get;
            set;
        }

        IList<string> SourceFiles
        {
            get;
            set;
        }

        int ThisRefCounter
        {
            get;
            set;
        }

        string ToJavaScript(object value);

        ITypeInfo TypeInfo
        {
            get;
            set;
        }

        Dictionary<string, ITypeInfo> TypeInfoDefinitions
        {
            get;
            set;
        }

        List<ITypeInfo> Types
        {
            get;
            set;
        }

        IValidator Validator
        {
            get;
        }

        Stack<IWriter> Writers
        {
            get;
            set;
        }

        IVisitorException CreateException(AstNode node);

        IVisitorException CreateException(AstNode node, string message);

        IPlugins Plugins
        {
            get;
            set;
        }

        EmitterCache Cache
        {
            get;
        }

        string GetFieldName(FieldDeclaration field);

        string GetEventName(EventDeclaration evt);

        Dictionary<string, bool> TempVariables
        {
            get;
            set;
        }

        Dictionary<string, string> NamedTempVariables
        {
            get;
            set;
        }

        Dictionary<string, bool> ParentTempVariables
        {
            get;
            set;
        }

        BridgeTypes BridgeTypes
        {
            get;
            set;
        }

        ITranslator Translator
        {
            get;
            set;
        }

        void InitEmitter();

        IJsDoc JsDoc
        {
            get;
            set;
        }

        IType ReturnType
        {
            get;
            set;
        }

        string GetEntityNameFromAttr(IEntity member, bool setter = false);

        bool ReplaceJump
        {
            get;
            set;
        }

        string CatchBlockVariable
        {
            get;
            set;
        }

        Dictionary<string, string> NamedFunctions
        {
            get; set;
        }

        Dictionary<IType, Dictionary<string, string>> NamedBoxedFunctions
        {
            get; set;
        }

        bool StaticBlock
        {
            get;
            set;
        }

        bool IsJavaScriptOverflowMode
        {
            get;
        }

        bool IsRefArg
        {
            get;
            set;
        }

        Dictionary<AnonymousType, IAnonymousTypeConfig> AnonymousTypes
        {
            get; set;
        }

        List<string> AutoStartupMethods
        {
            get;
            set;
        }

        bool IsAnonymousReflectable
        {
            get; set;
        }

        string MetaDataOutputName
        {
            get; set;
        }

        IType[] ReflectableTypes
        {
            get; set;
        }

        Dictionary<string, int> NamespacesCache
        {
            get; set;
        }

        bool DisableDependencyTracking { get; set; }

        void WriteIndented(string s, int? position = null);
        string GetReflectionName(IType type);
        bool ForbidLifting { get; set; }

        Dictionary<IAssembly, NameRule[]> AssemblyNameRuleCache
        {
            get;
        }

        Dictionary<ITypeDefinition, NameRule[]> ClassNameRuleCache
        {
            get;
        }

        Dictionary<IAssembly, CompilerRule[]> AssemblyCompilerRuleCache
        {
            get;
        }

        Dictionary<ITypeDefinition, CompilerRule[]> ClassCompilerRuleCache
        {
            get;
        }

        bool InConstructor { get; set; }
        CompilerRule Rules { get; set; }
    }
}