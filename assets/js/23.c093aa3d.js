(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{361:function(s,t,a){"use strict";a.r(t);var n=a(29),r=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"frp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frp","aria-hidden":"true"}},[s._v("#")]),s._v(" FRP")]),s._v(" "),a("h2",{attrs:{id:"什么是frp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是frp","aria-hidden":"true"}},[s._v("#")]),s._v(" 什么是FRP")]),s._v(" "),a("p",[s._v("frp 是一个可用于内网穿透的高性能的反向代理应用，支持 tcp, udp, http, https 协议。主要他是一个开源的。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/fatedier/frp",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/fatedier/frp"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("具体配置以及使用方法我这里就不过多介绍了，官方文档有详细说明。")]),s._v(" "),a("blockquote",[a("p",[s._v("本篇文章目标：")]),s._v(" "),a("ul",[a("li",[s._v("自定义二级域名做本地端口映射")]),s._v(" "),a("li",[s._v("要求支持80端来做微信开发调试")]),s._v(" "),a("li",[s._v("能查看端口的连接状态")])])]),s._v(" "),a("h2",{attrs:{id:"下载最新版本客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载最新版本客户端","aria-hidden":"true"}},[s._v("#")]),s._v(" 下载最新版本客户端")]),s._v(" "),a("ul",[a("li",[s._v("Mac "),a("a",{attrs:{href:"https://github.com/fatedier/frp/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("darwin_amd64.tar.gz\n"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("Centos "),a("a",{attrs:{href:"https://github.com/fatedier/frp/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("linux_amd64.tar.gz"),a("OutboundLink")],1)])]),s._v(" "),a("p",[a("strong",[s._v("这里我贴出我的配置内容如下：")])]),s._v(" "),a("h2",{attrs:{id:"服务端端配置-frps-ini"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端端配置-frps-ini","aria-hidden":"true"}},[s._v("#")]),s._v(" 服务端端配置 frps.ini")]),s._v(" "),a("p",[s._v("假如服务端的IP地址为：121.35.99.12")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[common]\nbind_port = 7000 \nvhost_http_port = 9988 #由于80端口已暂用这里我们使用Nginx做端口映射到80端口来做微信开发的调试，如何映射后文会介绍\n#连接池\nmax_pool_count = 5\n#token验证\nprivilege_token = javen\n#自定义二级域名\nsubdomain_host = frp.javen.com\n#控制面板\ndashboard_port = 9999\ndashboard_user = javen\ndashboard_pwd = javen\n#日志\nlog_file = ./frps.log\nlog_level = info\nlog_max_days = 3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"客户端配置-frpc-ini"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端配置-frpc-ini","aria-hidden":"true"}},[s._v("#")]),s._v(" 客户端配置 frpc.ini")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[common]\nserver_addr = 121.35.99.12 # 服务器IP\nserver_port = 7000 # 服务器bind_port\nprivilege_token = javen\n\n[wx]\ntype = http\nlocal_port = 8080 # 映射到本地的8080端口\nsubdomain = wx\n\n# 如果不使用SSH可以将其注释掉\n[ssh]\ntype = tcp\nlocal_ip = 127.0.0.1\nlocal_port = 22\nremote_port = 6000\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"自定义二级域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义二级域名","aria-hidden":"true"}},[s._v("#")]),s._v(" 自定义二级域名")]),s._v(" "),a("p",[s._v("在多人同时使用一个 frps 时，通过自定义二级域名的方式来使用会更加方便。")]),s._v(" "),a("p",[s._v("通过在 frps 的配置文件中配置 subdomain_host，就可以启用该特性。之后在 frpc 的 http、https 类型的代理中可以不配置 custom_domains，而是配置一个 subdomain 参数。")]),s._v(" "),a("p",[s._v("只需要将 *.{subdomain_host} 解析到 frps 所在服务器。之后用户可以通过 subdomain 自行指定自己的 web 服务所需要使用的二级域名，通过 {subdomain}.{subdomain_host} 来访问自己的 web 服务。")]),s._v(" "),a("p",[a("strong",[s._v("假如域名为：abc.com 去域名的控制面板添加解析 "),a("code",[s._v("*.frp")]),s._v(" 到 121.35.99.12")])]),s._v(" "),a("h2",{attrs:{id:"客户端访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端访问","aria-hidden":"true"}},[s._v("#")]),s._v(" 客户端访问")]),s._v(" "),a("p",[s._v("http://wx.frp.javen.com:9988/user 映射到本地的 http://localhost:8080/user")]),s._v(" "),a("h2",{attrs:{id:"dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dashboard","aria-hidden":"true"}},[s._v("#")]),s._v(" Dashboard")]),s._v(" "),a("p",[s._v("通过浏览器查看 frp 的状态以及代理统计信息展示。")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://121.35.99.12:9999/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://121.35.99.12:9999"),a("OutboundLink")],1),s._v(" 登录的用户名以及密码为服务端配置的 dashboard_user = javen dashboard_pwd = javen")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/frp.png"),alt:"frp dashboard"}}),s._v(" "),a("h2",{attrs:{id:"端口映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#端口映射","aria-hidden":"true"}},[s._v("#")]),s._v(" 端口映射")]),s._v(" "),a("p",[s._v("这里我们"),a("strong",[s._v("使用Nginx将9988端口映射到80端口")]),s._v("供微信开发调试使用")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#user  nobody;\nworker_processes  2;\nworker_cpu_affinity 01 10;\n#error_log  logs/error.log;\n#error_log  logs/error.log  notice;\n#error_log  logs/error.log  info;\n\n#pid        logs/nginx.pid;\n\n\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    #log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n    #\'$status $body_bytes_sent "$http_referer" \'\n    #\'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    #access_log  logs/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n\n    #gzip  on;\n\t\n\tupstream wx {\n\t   ip_hash;\n\t   server localhost:8080 weight=1 max_fails=3 fail_timeout=60s;\n     server localhost:8088 weight=1 max_fails=3 fail_timeout=60s;\n\t}\n\t\n\tserver {\n\t\tlisten       80;\n\t\tserver_name  localhost;\n\t\taccess_log  /home/nginxlog/wx_access.log;\n\n\t\tlocation / {\n\t\t\tproxy_redirect          off;\n\t\t\tproxy_set_header Host $host:$server_port;\n\t\t\tproxy_set_header X-Forwarded-For $remote_addr;\n\t\t\tclient_max_body_size      20m;\n\t\t\tclient_body_buffer_size 128k;\n\t\t\tproxy_connect_timeout   600;\n\t\t\tproxy_send_timeout      600;\n\t\t\tproxy_read_timeout      900;\n\t\t\tproxy_buffer_size       4k;\n\t\t\tproxy_buffers           4 32k;\n\t\t\tproxy_busy_buffers_size 64k;\n\t\t\tproxy_temp_file_write_size 64k;\n\t\t\tproxy_pass http://wx;\n\t\t}\n\n\t}\n\n  server {\n    listen       80;\n    server_name  *.frp.javen.com;\n    access_log  /home/nginxlog/frp_access.log;\n\n    location / {\n    proxy_redirect          off;\n    proxy_set_header Host $host:$server_port;\n    proxy_set_header X-Forwarded-For $remote_addr;\n    client_max_body_size      20m;\n    client_body_buffer_size 128k;\n    proxy_connect_timeout   600;\n    proxy_send_timeout      600;\n    proxy_read_timeout      900;\n    proxy_buffer_size       4k;\n    proxy_buffers           4 32k;\n    proxy_busy_buffers_size 64k;\n    proxy_temp_file_write_size 64k;\n    proxy_pass http://127.0.0.1:9988/;\n  }\n}\n\t\n\tserver {\n\t\tlisten       8888;\n\t\tserver_name  localhost;\n\t\taccess_log   /home/nginxlog/static_access.log;\n\n\t\tlocation ~ .*\\.(gif|jpg|jpeg|bmp|png|ico|txt|js|css|apk)$\n\t\t{\n\t\t\troot /home/ftp/private; \n\t\t\texpires 7d; \n\t\t}\n\t}\n}\n')])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br")])]),a("h2",{attrs:{id:"购买测试服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#购买测试服务器","aria-hidden":"true"}},[s._v("#")]),s._v(" 购买测试服务器")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.aliyun.com/minisite/goods?userCode=b1hkzv2x",target:"_blank",rel:"noopener noreferrer"}},[s._v("阿里云主机低至2折"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://cloud.tencent.com/act/cps/redirect?redirect=1054&cps_key=a21676d22e4b11a883893d54e158c1d3&from=console",target:"_blank",rel:"noopener noreferrer"}},[s._v("腾讯云服务器限时秒杀"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://activity.huaweicloud.com/discount_area_v5/index.html?&fromuser=aHcxMTc2NTU3MQ==&utm_source=aHcxMTc2NTU3MQ==&utm_medium=cps&utm_campaign=201905",target:"_blank",rel:"noopener noreferrer"}},[s._v("华为云购买享受红利"),a("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=r.exports}}]);