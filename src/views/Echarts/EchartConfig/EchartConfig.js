// 默认图表配置
export const getDefaultChartOption = () => {
  return {
    grid: {
      left: 50,
      containLabel: true,
      right: 30
    },
    yAxis: [{
        nameLocation: "middle",
        nameGap: 50
      }],
    // 图例
    legend: {
      itemWidth: 12,
      itemHeight: 12,
      top: 0,
      right: 0,
      textStyle: {
        padding: [2, 0, 0, 0]
      }
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross"
      }
    },
    dataZoom: [{
      show: true,
      realtime: 8,
      height: 8,
      showDetail: false,
      statrtValue: 0,
      endValue: 0,
      minValueSpan: 4,
      maxValueSpan: 8,
      // handleSize: 0, // 隐藏手柄
    }]
  }
}