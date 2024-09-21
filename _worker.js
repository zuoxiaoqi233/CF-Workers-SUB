
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'auto'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//PB
let timestamp = 4102329600000;//2099-12-31

//节点链接 + 订阅链接
let MainData = `
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@45.66.129.123:19036?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDNRT_12
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@185.214.103.86:57569?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AICN_8
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@117.123.234.199:29708?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ANRT_4
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@45.66.129.123:19036?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ANRT_12
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@3.127.55.133:443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_64
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@18.198.227.161:443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_122
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@45.66.129.76:56019?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ANRT_5
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@117.123.234.199:17658?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDNRT
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@132.226.200.11:443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_7
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@3.66.67.78:8443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_49
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@3.123.182.46:443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_10
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@89.168.112.118:8443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_112
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@3.64.125.14:8080?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_52
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@3.75.170.179:443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_53
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@149.62.44.224:20174?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ANRT_19
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@185.214.103.86:57569?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDICN_8
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@18.156.153.248:2053?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_34
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@18.194.183.74:2053?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_75
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@18.199.85.113:2083?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_84
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@89.168.68.57:8443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_103
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@18.194.183.74:8443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_63
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@18.153.244.138:443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_99
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@117.123.31.2:50000?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AICN
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@3.75.170.179:8080?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_105
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@141.144.197.22:443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_94
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@18.156.209.101:443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_100
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@61.111.251.245:34237?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDICN_6
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@149.62.44.224:27054?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDNRT_11
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@149.62.44.224:31005?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDNRT_17
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@3.67.37.183:8080?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_41
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@3.74.200.230:2053?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_117
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@149.62.44.224:40722?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDNRT_18
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@89.168.89.106:443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_22
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@3.68.185.4:2083?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_3
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@3.123.182.46:443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_10
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@149.62.44.224:30387?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDNRT_13
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@18.156.153.248:8443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_73
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@18.156.209.101:443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_100
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@18.198.227.161:443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_122
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@149.62.44.224:30387?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ANRT_13
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@3.127.55.133:443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_64
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@3.66.67.78:2053?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_68
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@117.123.234.199:29708?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDNRT_4
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@18.198.178.201:443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_13
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@130.61.9.244:443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_28
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@141.144.197.22:443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_94
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@3.66.115.225:443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_108
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@149.62.44.224:27014?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ANRT_10
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@3.121.208.144:8443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_15
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@18.192.93.64:443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_95
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@67.226.223.240:80?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ALHR_38
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@150.230.119.72:443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_17
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@35.156.134.213:8443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_42
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@3.76.154.119:443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_118
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@31.25.89.105:13358?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_20
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@3.65.42.231:8080?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_45
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@152.70.176.35:443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_51
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@18.194.183.74:8443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_63
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@3.127.89.62:2053?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_98
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@154.9.238.153:20101?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ALAX_8
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@3.76.210.181:2053?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_33
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@18.185.254.189:443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_101
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@3.68.185.4:2083?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_3
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@158.101.214.60:443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_47
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@154.9.238.154:20202?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ALAX_4
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@149.62.44.224:40722?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ANRT_18
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@132.226.200.11:443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_7
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@158.180.23.68:443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_48
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@154.26.238.128:54001?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDLAX_26
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@154.9.237.221:20101?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDLAX_47
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@149.62.44.224:20174?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDNRT_19
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@18.199.5.235:443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_83
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@18.196.70.197:443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_124
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@38.60.89.147:34237?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ALAX_11
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@45.140.88.86:58191?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ALAX_18
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@23.166.168.219:43636?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ALAX_35
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@38.207.171.169:17955?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ALAX_64
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@18.171.238.234:80?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ALHR_1
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@3.64.125.14:8080?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_52
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@3.74.4.118:8443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_70
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@3.127.89.62:2053?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_98
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@18.153.244.138:443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_99
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@154.23.240.148:15577?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDLAX_34
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@3.75.170.179:443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_53
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@23.165.248.56:26279?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ALAX_19
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@23.169.184.179:29147?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ALAX_24
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@38.207.129.229:34630?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ALAX_81
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@130.61.9.244:443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_28
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@152.70.176.35:443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_51
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@67.226.223.215:80?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDLHR_13
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@3.72.166.89:8443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_88
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@18.153.166.250:8443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_107
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@154.23.240.148:23334?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ALAX_12
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@45.91.81.229:54545?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ALAX_13
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@154.9.239.36:11980?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9ALAX_37
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@3.67.25.193:443?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDFRA_76
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@154.23.240.148:23334?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDLAX_12
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@23.169.184.119:32925?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDLAX_32
vless://ffa637d9-9c02-4b36-9dcf-ff90e26cce23@23.166.168.219:43636?encryption=none&security=tls&sni=dingyueqi.rn.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.rn.zxqapp.top&path=%2F#RN%E7%BE%8E%E5%9B%BDLAX_35
vless://3055c34f-5c92-4b55-b0e4-263a93fa669d@89.168.93.104:443?encryption=none&security=tls&sni=dingyueqi.tc.zxqapp.top&alpn=http%2F1.1&fp=random&type=ws&host=dingyueqi.tc.zxqapp.top&path=%2F#%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9AFRA_18

`

let urls = [];
let subconverter = "apiurl.v1.mk"; //在线订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cutethotw/ClashRule/main/GeneralClashRule.ini"; //订阅配置文件

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); 
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now())/timestamp * 99 * 1099511627776 * 1024)/2);
		total = total * 1099511627776 * 1024;
		let expire= Math.floor(timestamp / 1000) ;
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
		let 自建节点 ="";
		let 订阅链接 ="";
		for (let x of 重新汇总所有链接) {
			if (x.toLowerCase().startsWith('http')) {
				订阅链接 += x + '\n';
			} else {
				自建节点 += x + '\n';
			}
		}
		MainData = 自建节点;
		urls = await ADD(订阅链接);

		if ( !(token == mytoken || token == fakeToken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
			if (envKey) {
				const URLs = await ADD(env[envKey]);
				const URL = URLs[Math.floor(Math.random() * URLs.length)];
				return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
			}
			return new Response(await nginx(), { 
				status: 200 ,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			let 订阅格式 = 'base64';
			if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())){
				订阅格式 = 'base64';
			} else if (userAgent.includes('clash') || ( url.searchParams.has('clash') && !userAgent.includes('subconverter'))){
				订阅格式 = 'clash';
			} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ( (url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))){
				订阅格式 = 'singbox';
			}

			let subconverterUrl ;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;
			// 创建一个AbortController对象，用于控制fetch请求的取消
			const controller = new AbortController();
	
			const timeout = setTimeout(() => {
				controller.abort(); // 取消所有请求
			}, 2000); // 2秒后触发
	

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('clash')){
				追加UA = 'clash';
			} else if(url.searchParams.has('singbox')){
				追加UA = 'singbox';
			}
			
			try {
				const responses = await Promise.allSettled(urls.map(url =>
					fetch(url, {
						method: 'get',
						headers: {
							'Accept': 'text/html,application/xhtml+xml,application/xml;',
							'User-Agent': `${追加UA} cmliu/CF-Workers-SUB ${userAgentHeader}`
						},
						signal: controller.signal // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
					}).then(response => {
						if (response.ok) {
							return response.text().then(content => {
								// 这里可以顺便做内容检查
								if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups')) {
									//console.log("clashsub: " + url);
									订阅转换URL += "|" + url;
								} else if (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
									//console.log("singboxsub: " + url);
									订阅转换URL += "|" + url;
								} else {
									//console.log("未识别" + url);
									return content; // 保证链式调用中的下一个then可以接收到文本内容
								}
								//console.log(content);
							});
						} else {
							return ""; // 如果response.ok为false，返回空字符串
						}
					})
				));	
			
				for (const response of responses) {
					if (response.status === 'fulfilled' && response.value) {
						const content = response.value;
						req_data += base64Decode(content) + '\n';
					}
				}
			
			} catch (error) {
				//console.error(error);
			} finally {
				// 无论成功或失败，最后都清除设置的超时定时器
				clearTimeout(timeout);
			}

			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			const text = String.fromCharCode.apply(null, encodedData);
			
			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			console.log(result);
			
			const base64Data = btoa(result);

			if (订阅格式 == 'base64' || token == fakeToken){
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			} else if (订阅格式 == 'clash'){
				subconverterUrl = `https://${subconverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox'){
				subconverterUrl = `https://${subconverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			}
			console.log(订阅转换URL);
			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					return new Response(base64Data ,{
						headers: { 
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": `${SUBUpdateTime}`,
							"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
						}
					});
					//throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				let subconverterContent = await subconverterResponse.text();
				if (订阅格式 == 'clash') subconverterContent =await clashFix(subconverterContent);
				return new Response(subconverterContent, {
					headers: { 
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,

					},
				});
			} catch (error) {
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text ;
}

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();
  
	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
	return secondHex.toLowerCase();
}

function clashFix(content) {
	if(content.includes('wireguard') && !content.includes('remote-dns-resolve')){
		let lines;
		if (content.includes('\r\n')){
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}
	
		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}
