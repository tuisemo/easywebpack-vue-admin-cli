<!-- 数据统计 -->
<template>
  <div>
    <!-- <chart :options="polar"></chart> -->
    <el-row :gutter="20">
      <el-col :span="12">
       <order-chart></order-chart>
      </el-col>
      <el-col :span="12">
       <chart :options="polar" :auto-resize="true"></chart>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import orderChart from './components/orderChart';
export default {
  components: {
    orderChart
  },
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
<style lang='less'>
  .echarts{
    width: 100%;
  }
</style>