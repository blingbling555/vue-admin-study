<template>
  <div id="line-stack-echart"></div>
</template>

<script>
import InitEchartMixins from "./EchartConfig/InitEchartMixins";
export default {
  name: "LineStackEcharts",
  mixins: [InitEchartMixins],
  mounted() {
    this.createChart("line-stack-echart", this.getOptions());
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
          text: "堆叠区域图"
        },

        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        xAxis: [
          {
            type: "category",
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "单位/天"
          }
        ],
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210],
            symbolSize: function(value) {
              return value ? 4 : 0;
            }
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310],
            symbolSize: function(value) {
              return value ? 4 : 0;
            }
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [150, 0, 201, 154, 190, 330, 410],
            symbolSize: function(value) {
              return value ? 4 : 0;
            }
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [320, 332, 0, 334, 390, 330, 320],
            symbolSize: function(value) {
              return value ? 4 : 0;
            }
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            symbolSize: function(value) {
              return value ? 4 : 0;
            }
          }
        ]
      };
    }
  }
};
</script>

<style>
#line-stack-echart {
  height: 100%;
  width: 100%;
}
</style>