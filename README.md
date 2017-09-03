# Check-Browser


&emsp;&emsp;最近有个需求:判断浏览的入口，最常用的是判断微信端和QQ端还有微博端的内置浏览器。后来觉得反正都写了手机端的，要不就来个总和吧，把各大浏览器都判断一次，方便日后使用。  

&emsp;&emsp;基本原理是根据浏览的一个属性,然后就用indexOf和正则去匹配，有外国的大神用浏览器的私有属性来判断 [查看](https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser) :joy::joy:但作为前端新人还有很多弄不懂的东西，不敢轻易搬运大神的代码，所以还是自己老老实实的写正则。

```JavaScript
navigator.userAgent;  
&emsp;&emsp;主要是从浏览器返回的信息来判断
