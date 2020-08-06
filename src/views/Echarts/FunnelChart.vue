<template>
  <div id="funnel-echart"></div>
</template>

<script>
import InitEchartMixins from "./EchartConfig/InitEchartMixins";
export default {
  name: "FunnelChart",
  mixins: [InitEchartMixins],
  mounted() {
    this.createChart("funnel-echart", this.getOptions(), { defaultOpt: false });
    this.clickHandle();
  },
  methods: {
    clickHandle() {
      this.chartEventHandle("click", function(params) {
        console.log(params.seriesName, params.value);
      });
    },
    // 图表配置
    getOptions() {
      return {
        title: {
          text: "漏斗图",
          subtext: "纯属虚构"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        legend: {
          data: ["展现", "点击", "访问", "咨询", "订单"]
        },

        series: [
          {
            name: "漏斗图",
            type: "funnel",
            left: "10%",
            top: 60,
            //x2: 80,
            bottom: 60,
            width: "80%",
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "inside"
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid"
              }
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1
            },
            emphasis: {
              label: {
                fontSize: 20
              }
            },
            data: [
              { value: 60, name: "访问" },
              { value: 40, name: "咨询" },
              { value: 20, name: "订单" },
              { value: 80, name: "点击" },
              { value: 100, name: "展现" }
            ]
          }
        ]
      };
    }
  }
};
</script>

<style>
#funnel-echart {
  height: 100%;
  width: 100%;
}
</style>