(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{368:function(t,r,e){"use strict";e.r(r);var a=e(29),n=Object(a.a)({},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"微信支付常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微信支付常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 微信支付常见问题")]),t._v(" "),e("h2",{attrs:{id:"本地开发与调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地开发与调试","aria-hidden":"true"}},[t._v("#")]),t._v(" 本地开发与调试")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("本地是可以直接调试的，如果要处理异步通知可以做本地端口映射，将本地服务映射到外网。")]),t._v(" "),e("p",[t._v("常用的方案 "),e("a",{attrs:{href:"https://ngrok.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ngrok"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://github.com/fatedier/frp",target:"_blank",rel:"noopener noreferrer"}},[t._v("FRP"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("如果自己搭建("),e("a",{attrs:{href:"https://www.jianshu.com/p/c0d7cb4cb00f",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考资料"),e("OutboundLink")],1),t._v(")，首页需要一台自己的云服务器("),e("a",{attrs:{href:"https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=b1hkzv2x",target:"_blank",rel:"noopener noreferrer"}},[t._v("云主机低至2折"),e("OutboundLink")],1),t._v(")\n再按照官方提供的文档搭建即可。当然市面上也有一些基于 "),e("a",{attrs:{href:"https://ngrok.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ngrok"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://github.com/fatedier/frp",target:"_blank",rel:"noopener noreferrer"}},[t._v("FRP"),e("OutboundLink")],1),t._v("搭建的完整的收费的产品")])]),t._v(" "),e("h2",{attrs:{id:"提示大量的-class-找不到"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提示大量的-class-找不到","aria-hidden":"true"}},[t._v("#")]),t._v(" 提示大量的 class 找不到")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("解决方案请参考此 "),e("a",{attrs:{href:"https://gitee.com/javen205/IJPay/issues/I13NOO",target:"_blank",rel:"noopener noreferrer"}},[t._v("issues"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"空指针异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#空指针异常","aria-hidden":"true"}},[t._v("#")]),t._v(" 空指针异常")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("这种情况一般是没有初始化导致的，请参考"),e("router-link",{attrs:{to:"/guide/alipay/init.html"}},[t._v("支付宝初始化")])],1)]),t._v(" "),e("h2",{attrs:{id:"微信异步退款解密异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微信异步退款解密异常","aria-hidden":"true"}},[t._v("#")]),t._v(" 微信异步退款解密异常")]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",[t._v("java.security.InvalidKeyException: Illegal key size")])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("解决方案")]),t._v(" "),e("p",[t._v("去官方下载 JCE 无限制权限策略文件。")]),t._v(" "),e("ul",[e("li",[t._v("JDK6的"),e("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jce-6-download-429243.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("JDK7的"),e("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("JDK8的"),e("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("下载后解压，可以看到 "),e("code",[t._v("local_policy.jar")]),t._v(" 和 "),e("code",[t._v("US_export_policy.jar")]),t._v("以及 "),e("code",[t._v("readme.txt")]),t._v("。\n如果安装了JRE，将两个 jar 文件放到 "),e("code",[t._v("%JRE_HOME%\\lib\\security")]),t._v(" 下覆盖原来文件，记得先备份。\n如果安装了JDK，将两个 jar 文件也放到 "),e("code",[t._v("%JDK_HOME%\\jre\\lib\\security")]),t._v(" 下。")])]),t._v(" "),e("h2",{attrs:{id:"微信-h5-支付常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微信-h5-支付常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 微信 H5 支付常见问题")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=15_4",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方常见问题说明"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("更多讨论，参考之前写的博客 "),e("a",{attrs:{href:"https://javen.blog.csdn.net/article/details/77507835",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信H5支付"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"扫码支付常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扫码支付常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 扫码支付常见问题")]),t._v(" "),e("h2",{attrs:{id:"微信公众号支付常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微信公众号支付常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 微信公众号支付常见问题")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_9&index=8",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方常见问题说明"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",[t._v("特别注意第三点！！！最容易忘记配置 JSAPI 支付的授权目录！！！扫码模式一也是如此，需要配置「扫码回调链接」\n配置步骤请参考官方文档")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_3",target:"_blank",rel:"noopener noreferrer"}},[t._v("公众号支付"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=6_3",target:"_blank",rel:"noopener noreferrer"}},[t._v("扫码模式一"),e("OutboundLink")],1)])])])])},[],!1,null,null,null);r.default=n.exports}}]);