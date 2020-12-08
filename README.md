# SASA-button

## 项目说明
    
项目地址：<https://www.sasa-kids.com/>（国外服务器，访问可能比较慢）  
音源来自 彩虹社VTuber 笹木咲 
该项目为爱好者自行创建，与彩虹社官方无关，所有二次创作均需遵守[彩虹社二创规范](https://event.nijisanji.app/guidelines/)  
相关链接：
* 笹木咲Twitter：<https://twitter.com/saku_sasaki> 
* Youtube：<https://www.youtube.com/channel/UCoztvTULBYd3WmStqYeoHcA>  
* Bilibili：<https://space.bilibili.com/436596839>

本网页UI基于Vuetify框架：<https://vuetifyjs.com/>  

原作者：[@Coceki](https://github.com/Coceki)

## 如何参与开发

### 如果懂得如何操作Vue.js项目，可以进行本地编译，步骤如下：
* Fork这个项目  
* 部署node.js，在命令行中安装Vue-cli `npm install -g @vue/cli`  
* cd到项目文件夹，运行 `npm install` 来安装项目中用到的依赖
* 运行`npm run serve` 即可在http://127.0.0.1:8080/ 中访问站点
* 用VScode或其他工具进行修改后发送一个Pull request请求即可

所有的音源在/src/assets/voices.json中有定义  
音源文件在/public/voices中（建议使用mp3格式）  
日语文件在/src/assets/lang/ja.js，同样也有英语文件(未实装)    

配色文件在/src/plugins/vuetify.js的themes中，修改primary与secondary的值就可以变成其他配色

## 贡献者名单
代码：  
* [Coceki](https://space.bilibili.com/11229533)  
* [Nyaasu](#)

特别感谢：  
* [笹kid](https://space.bilibili.com/2514517)

咲唯指针作者：
* [IsnTo_Official](https://space.bilibili.com/12351753)
* [Yunaka_](https://space.bilibili.com/304746)

## 特别感谢
#### 本项目由 [Vercel](https://www.vercel.com/?utm_source=vbuposc&utm_campaign=oss) 强力驱动。

[![Vercel Logo](https://cdn.jsdelivr.net/gh/paizi/vue-test/vercel.svg)](https://www.vercel.com/?utm_source=vbuposc&utm_campaign=oss)  

以及所有支持这个项目的朋友，你们的鼓励是我孜孜不倦的源动力，谢谢你们。

[![GitHub Contributors](https://contributors-img.web.app/image?repo=vbup-osc/sasa-button)](https://github.com/vbup-osc/sasa-button/graphs/contributors)
