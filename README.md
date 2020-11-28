## vbest-ui

#### 写这个项目的初心

不甘于做一个只会调库的程序员，不重复造轮子，但是要会造轮子。


#### 项目背景
从2020年春节开始，因为新冠疫情影响，学校一个学期没开学。在这段时间里作者每天不知道干嘛，就只能敲着代码度日 :full_moon_with_face: 。在写项目的时候，经常遇到常用组件反复封装的情况，这让我非常头疼，同时使用别人的组件库又总是不那么如意 :joy: 。所以就萌生了自己写一个组件库的念头。这个项目从5月份写到现在也是非常不容易，虽然到现在还有许多组件由于个人能力有限还没封装出来，但总的来说这个组件库目前已经初具雏形。

##### [点我查看实际使用效果](http://123.56.175.108)

### 如何使用

#### 1.npm 下载

执行 npm install vbest-ui --save

***main.js引入:***
```js
import Vue from 'vue'
import App from './App.vue'

import VbestUi from 'vbest-ui'
import 'vbest-ui/dist/vbest-ui.css'
Vue.use(VbestUi)

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
```

#### 2.Gitee、Github下载dist文件(不推荐)

将dist文件夹放入你项目根目录里

***main.js引入：***

``` js
import Vue from 'vue'
import App from './App.vue'

import VbestUi from '../dist/vbest-ui.umd.min'
import '../dist/vbest-ui.css'

Vue.use(VbestUi)

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
```

### 关于本项目

#### 项目更新
本项目会持续更新维护，有问题的可以Issues提出来。

#### 使用中遇到的问题

本组件库均为个人测试，可能许多问题没能发现，如果使用时遇到问题请及时在Gitee、Github提Issues。

#### 提交规范
在提Issues时请尽可能简洁、清楚的描述问题，和如何场景复现。这能使开发者快速定位、解决问题。

#### vbest-ui在项目中实际使用效果

[点我查看](http://123.56.175.108)

#### 问题交流群
![输入图片说明](https://images.gitee.com/uploads/images/2020/0915/095720_2490a5ae_7602838.jpeg "qrcode_1600134831290.jpg")