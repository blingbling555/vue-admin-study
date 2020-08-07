<template>
  <div class="echarts-container">
    <div class="echarts-box">
      <line-stack-echarts />
    </div>
    <div class="echarts-box">
      <funnel-chart />
    </div>
    <div class="echarts-box">
      <bar-echarts />
    </div>
    <div class="echarts-box">
      <pie-chart />
    </div>
  </div>
</template>

<script>
import LineStackEcharts from "./LineStackEcharts";
import BarEcharts from "./BarEcharts";
import PieChart from "./PieChart";
import FunnelChart from "./FunnelChart";

export default {
  name: "Echarts",
  components: {
    LineStackEcharts,
    BarEcharts,
    PieChart,
    FunnelChart
  }
};
</script>

<style scoped lang="scss">
.echarts-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .echarts-box {
    width: 48%;
    height: 400px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ededed;
    margin: 20px 0;
  }
}
</style>