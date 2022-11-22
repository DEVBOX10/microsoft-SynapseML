"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[4569],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},183:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"DeepLearning - BiLSTM Medical Entity Extraction",hide_title:!0,status:"stable"},l=void 0,p={unversionedId:"features/other/DeepLearning - BiLSTM Medical Entity Extraction",id:"version-0.10.2/features/other/DeepLearning - BiLSTM Medical Entity Extraction",title:"DeepLearning - BiLSTM Medical Entity Extraction",description:"DeepLearning - BiLSTM Medical Entity Extraction",source:"@site/versioned_docs/version-0.10.2/features/other/DeepLearning - BiLSTM Medical Entity Extraction.md",sourceDirName:"features/other",slug:"/features/other/DeepLearning - BiLSTM Medical Entity Extraction",permalink:"/SynapseML/docs/features/other/DeepLearning - BiLSTM Medical Entity Extraction",tags:[],version:"0.10.2",frontMatter:{title:"DeepLearning - BiLSTM Medical Entity Extraction",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"CyberML - Anomalous Access Detection",permalink:"/SynapseML/docs/features/other/CyberML - Anomalous Access Detection"},next:{title:"DeepLearning - CIFAR10 Convolutional Network",permalink:"/SynapseML/docs/features/other/DeepLearning - CIFAR10 Convolutional Network"}},d={},c=[{value:"DeepLearning - BiLSTM Medical Entity Extraction",id:"deeplearning---bilstm-medical-entity-extraction",level:2}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"deeplearning---bilstm-medical-entity-extraction"},"DeepLearning - BiLSTM Medical Entity Extraction"),(0,i.kt)("p",null,"In this tutorial we use a Bidirectional LSTM entity extractor from the synapseml\nmodel downloader to extract entities from PubMed medical abstracts"),(0,i.kt)("p",null,'Our goal is to identify useful entities in a block of free-form text.  This is a\nnontrivial task because entities might be referenced in the text using variety of\nsynonymns, abbreviations, or formats. Our target output for this model is a set\nof tags that specify what kind of entity is referenced. The model we use was\ntrained on a large dataset of publically tagged pubmed abstracts. An example\nannotated sequence is given below, "O" represents no tag:'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"I-Chemical"),(0,i.kt)("th",{parentName:"tr",align:"center"},"O"),(0,i.kt)("th",{parentName:"tr",align:"center"},"I-Chemical"),(0,i.kt)("th",{parentName:"tr",align:"center"},"O"),(0,i.kt)("th",{parentName:"tr",align:"center"},"O"),(0,i.kt)("th",{parentName:"tr",align:"center"},"I-Chemical"),(0,i.kt)("th",{parentName:"tr",align:"center"},"O"),(0,i.kt)("th",{parentName:"tr",align:"center"},"I-Chemical"),(0,i.kt)("th",{parentName:"tr",align:"center"},"O"),(0,i.kt)("th",{parentName:"tr",align:"center"},"O"),(0,i.kt)("th",{parentName:"tr",align:"center"},"O"),(0,i.kt)("th",{parentName:"tr",align:"center"},"O"),(0,i.kt)("th",{parentName:"tr",align:"center"},"I-Disease"),(0,i.kt)("th",{parentName:"tr",align:"center"},"I-Disease"),(0,i.kt)("th",{parentName:"tr",align:"center"},"O"),(0,i.kt)("th",{parentName:"tr",align:"center"},"O"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Baricitinib"),(0,i.kt)("td",{parentName:"tr",align:"center"},","),(0,i.kt)("td",{parentName:"tr",align:"center"},"Methotrexate"),(0,i.kt)("td",{parentName:"tr",align:"center"},","),(0,i.kt)("td",{parentName:"tr",align:"center"},"or"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Baricitinib"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Plus"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Methotrexate"),(0,i.kt)("td",{parentName:"tr",align:"center"},"in"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Patients"),(0,i.kt)("td",{parentName:"tr",align:"center"},"with"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Early"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Rheumatoid"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Arthritis"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Who"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Had...")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.cntk import CNTKModel\nfrom synapse.ml.downloader import ModelDownloader\nfrom pyspark.sql.functions import udf, col\nfrom pyspark.sql.types import IntegerType, ArrayType, FloatType, StringType\nfrom pyspark.sql import Row\n\nfrom os.path import abspath, join\nimport numpy as np\nfrom nltk.tokenize import sent_tokenize, word_tokenize\nimport os, tarfile, pickle\nimport urllib.request\nimport nltk\nfrom pyspark.sql import SparkSession\n\n# Bootstrap Spark Session\nspark = SparkSession.builder.getOrCreate()\n\nfrom synapse.ml.core.platform import running_on_synapse, running_on_databricks\n\nif running_on_synapse():\n    from notebookutils.visualization import display\n")),(0,i.kt)("p",null,"Get the model and extract the data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'modelName = "BiLSTM"\nif running_on_synapse():\n    modelDir = "abfss://synapse@mmlsparkeuap.dfs.core.windows.net/models/"\n    dataDir = "./nltkdata"\nelif running_on_databricks():\n    modelDir = "dbfs:/models/"\n    dataDir = "/dbfs/nltkdata"\nelse:\n    modelDir = "/tmp/models/"\n    dataDir = "/tmp/nltkdata"\n\nd = ModelDownloader(spark, modelDir)\nmodelSchema = d.downloadByName(modelName)\nnltk.download("punkt", dataDir)\nnltk.data.path.append(dataDir)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'modelName = "BiLSTM"\nmodelDir = abspath("models")\nif not os.path.exists(modelDir):\n    os.makedirs(modelDir)\nd = ModelDownloader(spark, "file://" + modelDir)\nmodelSchema = d.downloadByName(modelName)\nnltk.download("punkt")\n')),(0,i.kt)("p",null,"Download the embeddings"),(0,i.kt)("p",null,"We use the nltk punkt sentence and word tokenizers and a set of embeddings trained on PubMed Articles"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'wordEmbFileName = "WordEmbeddings_PubMed.pkl"\npickleFile = join(abspath("models"), wordEmbFileName)\nif not os.path.isfile(pickleFile):\n    urllib.request.urlretrieve(\n        "https://mmlspark.blob.core.windows.net/datasets/" + wordEmbFileName, pickleFile\n    )\n')),(0,i.kt)("p",null,"Load the embeddings and create functions for encoding sentences"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'pickleContent = pickle.load(open(pickleFile, "rb"), encoding="latin-1")\nwordToIndex = pickleContent["word_to_index"]\nwordvectors = pickleContent["wordvectors"]\nclassToEntity = pickleContent["class_to_entity"]\n\nnClasses = len(classToEntity)\nnFeatures = wordvectors.shape[1]\nmaxSentenceLen = 613\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'content = "Baricitinib, Methotrexate, or Baricitinib Plus Methotrexate in Patients with Early Rheumatoid\\\n Arthritis Who Had Received Limited or No Treatment with Disease-Modifying-Anti-Rheumatic-Drugs (DMARDs):\\\n Phase 3 Trial Results. Keywords: Janus kinase (JAK), methotrexate (MTX) and rheumatoid arthritis (RA) and\\\n Clinical research. In 2 completed phase 3 studies, baricitinib (bari) improved disease activity with a\\\n satisfactory safety profile in patients (pts) with moderately-to-severely active RA who were inadequate\\\n responders to either conventional synthetic1 or biologic2DMARDs. This abstract reports results from a\\\n phase 3 study of bari administered as monotherapy or in combination with methotrexate (MTX) to pts with\\\n early active RA who had limited or no prior treatment with DMARDs. MTX monotherapy was the active comparator."\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'sentences = sent_tokenize(content)\ndf = spark.createDataFrame(enumerate(sentences), ["index", "sentence"])\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Add the tokenizers to all worker nodes\ndef prepNLTK(partition):\n    nltk.data.path.append("/dbfs/nltkdata")\n    return partition\n\n\ndf = df.rdd.mapPartitions(prepNLTK).toDF()\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def safe_tokenize(sent):\n    try:\n        return word_tokenize(sent)\n    except LookupError:\n        prepNLTK(None)\n        return word_tokenize(sent)\n\n\ntokenizeUDF = udf(safe_tokenize, ArrayType(StringType()))\ndf = df.withColumn("tokens", tokenizeUDF("sentence"))\n\ncountUDF = udf(len, IntegerType())\ndf = df.withColumn("count", countUDF("tokens"))\n\n\ndef wordToEmb(word):\n    return wordvectors[wordToIndex.get(word.lower(), wordToIndex["UNK"])]\n\n\ndef featurize(tokens):\n    X = np.zeros((maxSentenceLen, nFeatures))\n    X[-len(tokens) :, :] = np.array([wordToEmb(word) for word in tokens])\n    return [float(x) for x in X.reshape(maxSentenceLen, nFeatures).flatten()]\n\n\ndef safe_show(df, retries):\n    try:\n        df.show()\n    except Exception as e:\n        if retries >= 1:\n            safe_show(df, retries - 1)\n        else:\n            raise e\n\n\nfeaturizeUDF = udf(featurize, ArrayType(FloatType()))\n\ndf = df.withColumn("features", featurizeUDF("tokens")).cache()\nsafe_show(df, 5)  # Can be flaky on build server\n')),(0,i.kt)("p",null,"Run the CNTKModel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'model = (\n    CNTKModel()\n    .setModelLocation(modelSchema.uri)\n    .setInputCol("features")\n    .setOutputCol("probs")\n    .setOutputNodeIndex(0)\n    .setMiniBatchSize(1)\n)\n\ndf = model.transform(df).cache()\ndf.show()\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def probsToEntities(probs, wordCount):\n    reshaped_probs = np.array(probs).reshape(maxSentenceLen, nClasses)\n    reshaped_probs = reshaped_probs[-wordCount:, :]\n    return [classToEntity[np.argmax(probs)] for probs in reshaped_probs]\n\n\ntoEntityUDF = udf(probsToEntities, ArrayType(StringType()))\ndf = df.withColumn("entities", toEntityUDF("probs", "count"))\ndf.show()\n')),(0,i.kt)("p",null,"Show the annotated text"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Color Code the Text based on the entity type\ncolors = {\n    "B-Disease": "blue",\n    "I-Disease": "blue",\n    "B-Drug": "lime",\n    "I-Drug": "lime",\n    "B-Chemical": "lime",\n    "I-Chemical": "lime",\n    "O": "black",\n    "NONE": "black",\n}\n\n\ndef prettyPrint(words, annotations):\n    formattedWords = []\n    for word, annotation in zip(words, annotations):\n        formattedWord = "<font size = \'2\' color = \'{}\'>{}</font>".format(\n            colors[annotation], word\n        )\n        if annotation in {"O", "NONE"}:\n            formattedWords.append(formattedWord)\n        else:\n            formattedWords.append("<b>{}</b>".format(formattedWord))\n    return " ".join(formattedWords)\n\n\nprettyPrintUDF = udf(prettyPrint, StringType())\ndf = df.withColumn("formattedSentence", prettyPrintUDF("tokens", "entities")).select(\n    "formattedSentence"\n)\n\nsentences = [row["formattedSentence"] for row in df.collect()]\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from IPython.core.display import display, HTML\n\nfor sentence in sentences:\n    display(HTML(sentence))\n")),(0,i.kt)("p",null,"Example text used in this demo has been taken from:"),(0,i.kt)("p",null,"Fleischmann R, Takeuchi T, Schlichting DE, Macias WL, Rooney T, Gurbuz S, Stoykov I,\nBeattie SD, Kuo WL, Schiff M. Baricitinib, Methotrexate, or Baricitinib Plus Methotrexate\nin Patients with Early Rheumatoid Arthritis Who Had Received Limited or No Treatment with\nDisease-Modifying Anti-Rheumatic Drugs (DMARDs): Phase 3 Trial Results ","[abstract]",".\nArthritis Rheumatol. 2015; 67 (suppl 10).\n",(0,i.kt)("a",{parentName:"p",href:"http://acrabstracts.org/abstract/baricitinib-methotrexate-or-baricitinib-plus-methotrexate-in-patients-with-early-rheumatoid-arthritis-who-had-received-limited-or-no-treatment-with-disease-modifying-anti-rheumatic-drugs-dmards-p/"},"http://acrabstracts.org/abstract/baricitinib-methotrexate-or-baricitinib-plus-methotrexate-in-patients-with-early-rheumatoid-arthritis-who-had-received-limited-or-no-treatment-with-disease-modifying-anti-rheumatic-drugs-dmards-p/"),".\nAccessed August 18, 2017."))}u.isMDXComponent=!0}}]);