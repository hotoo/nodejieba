var nodejieba = require("../index.js");

var sentence = "我是拖拉机学院手扶拖拉机专业的。不用多久，我就会升职加薪，当上CEO，走上人生巅峰。";

var result;

result = nodejieba.cut(sentence);
console.log(result);

result = nodejieba.cut(sentence, "MP");
console.log(result);

result = nodejieba.cut(sentence, "HMM");
console.log(result);

result = nodejieba.cut(sentence, "MIX");
console.log(result);

result = nodejieba.cut(sentence, "FULL");
console.log(result);

result = nodejieba.cut(sentence, "QUERY");
console.log(result);

result = nodejieba.tag(sentence);
console.log(result);

result = nodejieba.extract(sentence, 5);
console.log(result);
