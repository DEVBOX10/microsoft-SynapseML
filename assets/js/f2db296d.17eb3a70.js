"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[5337],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?n.createElement(f,l(l({ref:a},c),{},{components:t})):n.createElement(f,l({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},27541:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=t(87462),r=t(63366),o=(t(67294),t(3905)),l=["components"],i={title:"Interpretability - Explanation Dashboard",hide_title:!0,status:"stable",name:"Interpretability - Explanation Dashboard"},s=void 0,p={unversionedId:"features/responsible_ai/Interpretability - Explanation Dashboard",id:"version-0.10.1/features/responsible_ai/Interpretability - Explanation Dashboard",title:"Interpretability - Explanation Dashboard",description:"Interpretability - Explanation Dashboard",source:"@site/versioned_docs/version-0.10.1/features/responsible_ai/Interpretability - Explanation Dashboard.md",sourceDirName:"features/responsible_ai",slug:"/features/responsible_ai/Interpretability - Explanation Dashboard",permalink:"/SynapseML/docs/0.10.1/features/responsible_ai/Interpretability - Explanation Dashboard",tags:[],version:"0.10.1",frontMatter:{title:"Interpretability - Explanation Dashboard",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"DataBalanceAnalysis - Adult Census Income",permalink:"/SynapseML/docs/0.10.1/features/responsible_ai/DataBalanceAnalysis - Adult Census Income"},next:{title:"Interpretability - Image Explainers",permalink:"/SynapseML/docs/0.10.1/features/responsible_ai/Interpretability - Image Explainers"}},c={},u=[{value:"Interpretability - Explanation Dashboard",id:"interpretability---explanation-dashboard",level:2}],m={toc:u};function d(e){var a=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"interpretability---explanation-dashboard"},"Interpretability - Explanation Dashboard"),(0,o.kt)("p",null,'In this example, similar to the "Interpretability - Tabular SHAP explainer" notebook, we use Kernel SHAP to explain a tabular classification model built from the Adults Census dataset and then visualize the explanation in the ExplanationDashboard from ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/responsible-ai-widgets"},"https://github.com/microsoft/responsible-ai-widgets"),"."),(0,o.kt)("p",null,"First we import the packages and define some UDFs we will need later."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import pyspark\nfrom IPython import get_ipython\nfrom IPython.terminal.interactiveshell import TerminalInteractiveShell\nfrom synapse.ml.explainers import *\nfrom pyspark.ml import Pipeline\nfrom pyspark.ml.classification import LogisticRegression\nfrom pyspark.ml.feature import StringIndexer, OneHotEncoder, VectorAssembler\nfrom pyspark.sql.types import *\nfrom pyspark.sql.functions import *\nimport pandas as pd\nfrom pyspark.sql import SparkSession\n\n# Bootstrap Spark Session\nspark = SparkSession.builder.getOrCreate()\n\nfrom synapse.ml.core.platform import running_on_synapse\n\nif running_on_synapse():\n    shell = TerminalInteractiveShell.instance()\n    shell.define_macro("foo", """a,b=10,20""")\n    from notebookutils.visualization import display\n\n\nvec_access = udf(lambda v, i: float(v[i]), FloatType())\nvec2array = udf(lambda vec: vec.toArray().tolist(), ArrayType(FloatType()))\n')),(0,o.kt)("p",null,"Now let's read the data and train a simple binary classification model."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'df = spark.read.parquet(\n    "wasbs://publicwasb@mmlspark.blob.core.windows.net/AdultCensusIncome.parquet"\n).cache()\n\nlabelIndexer = StringIndexer(\n    inputCol="income", outputCol="label", stringOrderType="alphabetAsc"\n).fit(df)\nprint("Label index assigment: " + str(set(zip(labelIndexer.labels, [0, 1]))))\n\ntraining = labelIndexer.transform(df)\ndisplay(training)\ncategorical_features = [\n    "workclass",\n    "education",\n    "marital-status",\n    "occupation",\n    "relationship",\n    "race",\n    "sex",\n    "native-country",\n]\ncategorical_features_idx = [col + "_idx" for col in categorical_features]\ncategorical_features_enc = [col + "_enc" for col in categorical_features]\nnumeric_features = [\n    "age",\n    "education-num",\n    "capital-gain",\n    "capital-loss",\n    "hours-per-week",\n]\n\nstrIndexer = StringIndexer(\n    inputCols=categorical_features, outputCols=categorical_features_idx\n)\nonehotEnc = OneHotEncoder(\n    inputCols=categorical_features_idx, outputCols=categorical_features_enc\n)\nvectAssem = VectorAssembler(\n    inputCols=categorical_features_enc + numeric_features, outputCol="features"\n)\nlr = LogisticRegression(featuresCol="features", labelCol="label", weightCol="fnlwgt")\npipeline = Pipeline(stages=[strIndexer, onehotEnc, vectAssem, lr])\nmodel = pipeline.fit(training)\n')),(0,o.kt)("p",null,"After the model is trained, we randomly select some observations to be explained."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"explain_instances = (\n    model.transform(training).orderBy(rand()).limit(5).repartition(200).cache()\n)\ndisplay(explain_instances)\n")),(0,o.kt)("p",null,'We create a TabularSHAP explainer, set the input columns to all the features the model takes, specify the model and the target output column we are trying to explain. In this case, we are trying to explain the "probability" output which is a vector of length 2, and we are only looking at class 1 probability. Specify targetClasses to ',(0,o.kt)("inlineCode",{parentName:"p"},"[0, 1]")," if you want to explain class 0 and 1 probability at the same time. Finally we sample 100 rows from the training data for background data, which is used for integrating out features in Kernel SHAP."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'shap = TabularSHAP(\n    inputCols=categorical_features + numeric_features,\n    outputCol="shapValues",\n    numSamples=5000,\n    model=model,\n    targetCol="probability",\n    targetClasses=[1],\n    backgroundData=broadcast(training.orderBy(rand()).limit(100).cache()),\n)\n\nshap_df = shap.transform(explain_instances)\n')),(0,o.kt)("p",null,"Once we have the resulting dataframe, we extract the class 1 probability of the model output, the SHAP values for the target class, the original features and the true label. Then we convert it to a pandas dataframe for visisualization.\nFor each observation, the first element in the SHAP values vector is the base value (the mean output of the background dataset), and each of the following element is the SHAP values for each feature."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'shaps = (\n    shap_df.withColumn("probability", vec_access(col("probability"), lit(1)))\n    .withColumn("shapValues", vec2array(col("shapValues").getItem(0)))\n    .select(\n        ["shapValues", "probability", "label"] + categorical_features + numeric_features\n    )\n)\n\nshaps_local = shaps.toPandas()\nshaps_local.sort_values("probability", ascending=False, inplace=True, ignore_index=True)\npd.set_option("display.max_colwidth", None)\nshaps_local\n')),(0,o.kt)("p",null,"We can visualize the explanation in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/interpretml/interpret-community"},"interpret-community format")," in the ExplanationDashboard from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/responsible-ai-widgets/"},"https://github.com/microsoft/responsible-ai-widgets/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import pandas as pd\nimport numpy as np\n\nfeatures = categorical_features + numeric_features\nfeatures_with_base = ["Base"] + features\n\nrows = shaps_local.shape[0]\n\nlocal_importance_values = shaps_local[["shapValues"]]\neval_data = shaps_local[features]\ntrue_y = np.array(shaps_local[["label"]])\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"list_local_importance_values = local_importance_values.values.tolist()\nconverted_importance_values = []\nbias = []\nfor classarray in list_local_importance_values:\n    for rowarray in classarray:\n        converted_list = rowarray.tolist()\n        bias.append(converted_list[0])\n        # remove the bias from local importance values\n        del converted_list[0]\n        converted_importance_values.append(converted_list)\n")),(0,o.kt)("p",null,"When running Synapse Analytics, please follow instructions here ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/synapse-analytics/spark/apache-spark-azure-portal-add-libraries"},"Package management - Azure Synapse Analytics | Microsoft Docs")," to install ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/raiwidgets/"},'"raiwidgets"')," and ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/interpret-community/"},'"interpret-community"')," packages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"!pip install --upgrade raiwidgets\n!pip install itsdangerous==2.0.1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"!pip install --upgrade interpret-community\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from interpret_community.adapter import ExplanationAdapter\n\nadapter = ExplanationAdapter(features, classification=True)\nglobal_explanation = adapter.create_global(\n    converted_importance_values, eval_data, expected_values=bias\n)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# view the global importance values\nglobal_explanation.global_importance_values\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# view the local importance values\nglobal_explanation.local_importance_values\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class wrapper(object):\n    def __init__(self, model):\n        self.model = model\n\n    def predict(self, data):\n        sparkdata = spark.createDataFrame(data)\n        return (\n            model.transform(sparkdata)\n            .select("prediction")\n            .toPandas()\n            .values.flatten()\n            .tolist()\n        )\n\n    def predict_proba(self, data):\n        sparkdata = spark.createDataFrame(data)\n        prediction = (\n            model.transform(sparkdata)\n            .select("probability")\n            .toPandas()\n            .values.flatten()\n            .tolist()\n        )\n        proba_list = [vector.values.tolist() for vector in prediction]\n        return proba_list\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# view the explanation in the ExplanationDashboard\nfrom raiwidgets import ExplanationDashboard\n\nExplanationDashboard(\n    global_explanation, wrapper(model), dataset=eval_data, true_y=true_y\n)\n")),(0,o.kt)("p",null,"Your results will look like:"),(0,o.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/rai-dashboard.png"}))}d.isMDXComponent=!0}}]);