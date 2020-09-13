## vbest-ui

#### 写这个项目的初心

不甘于做一个只会调库的程序员，不重复造轮子，但是要会造轮子。

### 如何使用

#### 1.Gitee、Github下载dist文件(不推荐)

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

#### 2.npm 下载

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
### 关于本项目
#### 项目更新
本项目会持续更新维护，直到Vue落幕或不做前端。
#### 使用中遇到的问题

本组件库均为个人测试，可能许多问题没能发现，如果使用时遇到问题请及时在Gitee、Github提Issues。

#### 提交规范
在提Issues时请尽可能简洁、清楚的描述问题，和如何场景复现。这能使开发者快速定位、解决问题。