using System.Linq;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.Contract
{
    public class NameSemantic
    {
        public string Prefix
        {
            get; set;
        }

        public string Suffix
        {
            get; set;
        }

        public bool IsCustomName
        {
            get; set;
        }

        private bool isObjectLiteral;
        public bool IsObjectLiteral
        {
            get
            {
                return this.isObjectLiteral;
            }
            set
            {
                if (value != this.isObjectLiteral)
                {
                    this.ClearCache();
                }

                this.isObjectLiteral = value;
            }
        }

        private string name;
        public string Name
        {
            get
            {
                if (this.name != null)
                {
                    return this.name;
                }
                return this.name = NameConvertor.Convert(this);
            }
        }

        public NameRule AppliedRule
        {
            get; set;
        }

        public IEntity Entity
        {
            get; set;
        }

        internal string DefaultName
        {
            get
            {
                var name = Entity.Name;
                var typeDef = Entity as ITypeDefinition;
                if (typeDef != null)
                {
                    name = typeDef.Name;

                    var typeParameters = typeDef.TypeParameters.Count(t => t.Owner.ReflectionName == typeDef.ReflectionName);
                    if (typeParameters > 0 && !(typeDef.IsIgnoreGeneric() && typeDef.ParentAssembly.AssemblyName != CS.NS.BRIDGE && typeDef.IsExternal()))
                    {
                        name += "$" + typeParameters;
                    }
                }

                return Prefix + name + Suffix;
            }
        }

        public IEmitter Emitter
        {
            get; set;
        }

        public int EnumMode { get; set; } = -1;

        public void ClearCache()
        {
            this.name = null;
        }

        public static NameSemantic Create(IEntity entity, IEmitter emitter)
        {
            return emitter.GetNameSemantic(entity);
        }
    }
}