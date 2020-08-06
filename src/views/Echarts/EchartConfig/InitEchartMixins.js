// 初始化图表

import merge from "lodash/merge";
import echarts from "echarts";
import { getDefaultChartOption } from "./EchartConfig"

const data = function() {
  return {
    chartsInstance: null //图表实例
  }
}

const methods = {
  // 创建实例
  createChart(chartKey, chartOption, options = { defaultOpt: true }) {
    // 图表配置
    const currentChartOption = options?.defaultOpt ? merge(getDefaultChartOption(), chartOption) : chartOption;
    // 初始化图表
    this.chartsInstance = this.initChart(chartKey, currentChartOption);
    this.resizeChart();
    return this.chartsInstance
  },
  // 实例化echart
  initChart(elId, option) {
    const ele = document.getElementById(elId);
    if (!ele) return;
    const myChart = echarts.init(ele);
    myChart.setOption(option);
    return myChart;
  },
  // 监听图表容器大小改变 重置图表
  resizeChart() {
    window.addEventListener('resize', this.resizeHandle);
  },
  resizeHandle() {
    const clientWidth = this.chartsInstance._dom.clientWidth;
    this.chartsInstance.resize({
      width: clientWidth
    })
  },
  // 图表事件
  chartEventHandle(eventType, callback) {
    this.chartsInstance.on(eventType, function(params){
      callback(params)
    })
  }
}

const beforeDestroy = function() {
  // 销毁实例
  this.chartsInstance && this.chartsInstance.dispose();
  // 销毁监听事件
  window.removeEventListener('resize', this.resizeHandle)
}

export default {
  data,
  methods,
  beforeDestroy
}