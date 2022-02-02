"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[2037],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},301:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(3117),o=n(102),l=(n(7294),n(3905)),i=["components"],r={title:"Build System Commands",hide_title:!0,sidebar_label:"Build System Commands",description:"SynapseML Development Setup"},s="SynapseML Development Setup",d={unversionedId:"reference/developer-readme",id:"reference/developer-readme",title:"Build System Commands",description:"SynapseML Development Setup",source:"@site/docs/reference/developer-readme.md",sourceDirName:"reference",slug:"/reference/developer-readme",permalink:"/SynapseML/docs/next/reference/developer-readme",tags:[],version:"current",frontMatter:{title:"Build System Commands",hide_title:!0,sidebar_label:"Build System Commands",description:"SynapseML Development Setup"},sidebar:"docs",previous:{title:"Vowpal Wabbit",permalink:"/SynapseML/docs/next/documentation/estimators/estimators_vw"},next:{title:"Contributing Guide",permalink:"/SynapseML/docs/next/reference/contributing_guide"}},p=[{value:"Scala build commands",id:"scala-build-commands",children:[{value:"<code>compile</code>, <code>test:compile</code> and <code>it:compile</code>",id:"compile-testcompile-and-itcompile",children:[],level:3},{value:"<code>test</code>",id:"test",children:[],level:3},{value:"<code>scalastyle</code>",id:"scalastyle",children:[],level:3},{value:"<code>unidoc</code>",id:"unidoc",children:[],level:3}],level:2},{value:"Python Commands",id:"python-commands",children:[{value:"<code>createCondaEnv</code>",id:"createcondaenv",children:[],level:3},{value:"<code>cleanCondaEnv</code>",id:"cleancondaenv",children:[],level:3},{value:"<code>packagePython</code>",id:"packagepython",children:[],level:3},{value:"<code>generatePythonDoc</code>",id:"generatepythondoc",children:[],level:3},{value:"<code>installPipPackage</code>",id:"installpippackage",children:[],level:3},{value:"<code>testPython</code>",id:"testpython",children:[],level:3}],level:2},{value:"Environment + Publishing Commands",id:"environment--publishing-commands",children:[{value:"<code>getDatasets</code>",id:"getdatasets",children:[],level:3},{value:"<code>setup</code>",id:"setup",children:[],level:3},{value:"<code>package</code>",id:"package",children:[],level:3},{value:"<code>publishBlob</code>",id:"publishblob",children:[],level:3},{value:"<code>publishLocal</code>",id:"publishlocal",children:[],level:3},{value:"<code>publishDocs</code>",id:"publishdocs",children:[],level:3},{value:"<code>publishSigned</code>",id:"publishsigned",children:[],level:3},{value:"<code>sonatypeRelease</code>",id:"sonatyperelease",children:[],level:3}],level:2}],c={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"synapseml-development-setup"},"SynapseML Development Setup"),(0,l.kt)("p",null,"1) ",(0,l.kt)("a",{parentName:"p",href:"https://www.scala-sbt.org/1.x/docs/Setup.html"},"Install SBT")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- Make sure to download [JDK 11](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html) if you don't have it\n")),(0,l.kt)("p",null,"2) Fork the repository on github"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- See how to here: [Fork a repo - GitHub Docs](https://docs.github.com/en/get-started/quickstart/fork-a-repo)\n")),(0,l.kt)("p",null,"3) Clone your fork"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- `git clone https://github.com/<your GitHub handle>/SynapseML.git`\n- This will automatically add your fork as the default remote, called `origin`\n")),(0,l.kt)("p",null,"4) Add another Git Remote to track the original SynapseML repo. It's recommended to call it ",(0,l.kt)("inlineCode",{parentName:"p"},"upstream"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- `git remote add upstream https://github.com/microsoft/SynapseML.git`\n- See more about Git remotes here: [Git - Working with remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)\n")),(0,l.kt)("p",null,"5) Run sbt to compile and grab datasets"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- `cd synapseml`\n- `sbt setup`\n")),(0,l.kt)("p",null,"6) ",(0,l.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/download"},"Install IntelliJ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- Install Scala plugins during install\n")),(0,l.kt)("p",null,"7) Configure IntelliJ"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- **OPEN** the synapseml directory\n- If the project does not automatically import,click on `build.sbt` and import project\n")),(0,l.kt)("p",null,"8) Prepare your Python Environment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- Install [Miniconda](https://docs.conda.io/en/latest/miniconda.html)\n- Activate the `synapseml` conda environment by running `conda env create -f environment.yaml` from the `synapseml` directory.\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE"),(0,l.kt)("p",{parentName:"blockquote"},"If you will be regularly contributing to the SynapseML repo, you'll want to keep your fork synced with the\nupstream repository. Please read ",(0,l.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork"},"this GitHub doc"),"\nto know more and learn techniques about how to do it.")),(0,l.kt)("h1",{id:"publishing-and-using-build-secrets"},"Publishing and Using Build Secrets"),(0,l.kt)("p",null,"To use secrets in the build you must be part of the synapsemlkeyvault\nand azure subscription. If you are MSFT internal would like to be\nadded please reach out ",(0,l.kt)("inlineCode",{parentName:"p"},"mmlspark-support@microsoft.com")),(0,l.kt)("h1",{id:"sbt-command-guide"},"SBT Command Guide"),(0,l.kt)("h2",{id:"scala-build-commands"},"Scala build commands"),(0,l.kt)("h3",{id:"compile-testcompile-and-itcompile"},(0,l.kt)("inlineCode",{parentName:"h3"},"compile"),", ",(0,l.kt)("inlineCode",{parentName:"h3"},"test:compile")," and ",(0,l.kt)("inlineCode",{parentName:"h3"},"it:compile")),(0,l.kt)("p",null,"Compiles the main, test, and integration test classes respectively"),(0,l.kt)("h3",{id:"test"},(0,l.kt)("inlineCode",{parentName:"h3"},"test")),(0,l.kt)("p",null,"Runs all synapsemltests"),(0,l.kt)("h3",{id:"scalastyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"scalastyle")),(0,l.kt)("p",null,"Runs scalastyle check"),(0,l.kt)("h3",{id:"unidoc"},(0,l.kt)("inlineCode",{parentName:"h3"},"unidoc")),(0,l.kt)("p",null,"Generates documentation for scala sources"),(0,l.kt)("h2",{id:"python-commands"},"Python Commands"),(0,l.kt)("h3",{id:"createcondaenv"},(0,l.kt)("inlineCode",{parentName:"h3"},"createCondaEnv")),(0,l.kt)("p",null,"Creates a conda environment ",(0,l.kt)("inlineCode",{parentName:"p"},"synapseml")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"environment.yaml")," if it does not already exist.\nThis env is used for python testing. ",(0,l.kt)("strong",{parentName:"p"},"Activate this env before using python build commands.")),(0,l.kt)("h3",{id:"cleancondaenv"},(0,l.kt)("inlineCode",{parentName:"h3"},"cleanCondaEnv")),(0,l.kt)("p",null,"Removes ",(0,l.kt)("inlineCode",{parentName:"p"},"synapseml")," conda env"),(0,l.kt)("h3",{id:"packagepython"},(0,l.kt)("inlineCode",{parentName:"h3"},"packagePython")),(0,l.kt)("p",null,"Compiles scala, runs python generation scripts, and creates a wheel"),(0,l.kt)("h3",{id:"generatepythondoc"},(0,l.kt)("inlineCode",{parentName:"h3"},"generatePythonDoc")),(0,l.kt)("p",null,"Generates documentation for generated python code"),(0,l.kt)("h3",{id:"installpippackage"},(0,l.kt)("inlineCode",{parentName:"h3"},"installPipPackage")),(0,l.kt)("p",null,"Installs generated python wheel into existing env"),(0,l.kt)("h3",{id:"testpython"},(0,l.kt)("inlineCode",{parentName:"h3"},"testPython")),(0,l.kt)("p",null,"Generates and runs python tests"),(0,l.kt)("h2",{id:"environment--publishing-commands"},"Environment + Publishing Commands"),(0,l.kt)("h3",{id:"getdatasets"},(0,l.kt)("inlineCode",{parentName:"h3"},"getDatasets")),(0,l.kt)("p",null,"Downloads all datasets used in tests to target folder"),(0,l.kt)("h3",{id:"setup"},(0,l.kt)("inlineCode",{parentName:"h3"},"setup")),(0,l.kt)("p",null,"Combination of ",(0,l.kt)("inlineCode",{parentName:"p"},"compile"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"test:compile"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"it:compile"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"getDatasets")),(0,l.kt)("h3",{id:"package"},(0,l.kt)("inlineCode",{parentName:"h3"},"package")),(0,l.kt)("p",null,"Packages the library into a jar"),(0,l.kt)("h3",{id:"publishblob"},(0,l.kt)("inlineCode",{parentName:"h3"},"publishBlob")),(0,l.kt)("p",null,"Publishes Jar to synapseml's azure blob based maven repo. (Requires Keys)"),(0,l.kt)("h3",{id:"publishlocal"},(0,l.kt)("inlineCode",{parentName:"h3"},"publishLocal")),(0,l.kt)("p",null,"Publishes library to local maven repo"),(0,l.kt)("h3",{id:"publishdocs"},(0,l.kt)("inlineCode",{parentName:"h3"},"publishDocs")),(0,l.kt)("p",null,"Publishes scala and python doc to synapseml's build azure storage account. (Requires Keys)"),(0,l.kt)("h3",{id:"publishsigned"},(0,l.kt)("inlineCode",{parentName:"h3"},"publishSigned")),(0,l.kt)("p",null,"Publishes the library to sonatype staging repo"),(0,l.kt)("h3",{id:"sonatyperelease"},(0,l.kt)("inlineCode",{parentName:"h3"},"sonatypeRelease")),(0,l.kt)("p",null,"Promotes the published sonatype artifact"))}u.isMDXComponent=!0}}]);