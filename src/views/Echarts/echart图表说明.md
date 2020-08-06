## 1、文件说明
- `EchartConfig\InitEchartMixins.js`: 一个页面图表比较多，会有很多重复的步骤，建议把初始和销毁以及事件部分抽取为公共mixins
- `EchartConfig\EchartConfig.js`: 图表公共配置


## 2、文件注意点说明
### 2.1、LineStackEcharts：堆叠区域图
在开发中遇到一个问题，比如说上面有0的元素会把下面数字部分覆盖，从而点击到的都是0这个元素，通常0这个元素又不需要弹窗，可能看文字不是很好理解
https://gallery.echartsjs.com/editor.html?c=xeapnXD1Gp&v=1 打开控制台看版本1和版本2的区别

解决办法也很简单
只需要在每项series里加上
```
symbolSize: function(value){
  return value ? 4: 0
},
```
版本1-有问题的版本：
```
series: [
  {
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      data: [120, 132, 0,101, 134, 90, 230, 210]
  },
  {
      name: '联盟广告',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      data: [220, 182, 0,191, 234, 290, 330, 310]
  }]
```
版本2解决：
```
``` js
series: [
  {
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      data: [120, 132, 0,101, 134, 90, 230, 210],
      symbolSize: function(value){
          return value ? 4: 0
      },
  },
  {
      name: '联盟广告',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      data: [220, 182, 0,191, 234, 290, 330, 310],
      symbolSize: function(value){
          return value ? 4: 0
      },
  }]
```
