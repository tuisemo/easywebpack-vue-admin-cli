<!-- 数据统计 -->
<template>
  <div>
      <v-chart :options="polar"/>
  </div>
</template>

<script>
// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
export default {
  data() {
    const data = [];

    for (let i = 0; i <= 360; i++) {
      const t = i / 180 * Math.PI;
      const r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }
    return {
      polar: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data
          }
        ],
        animationDuration: 2000
      }
    };
  },
};
</script>
<style lang='less' scoped>
</style>