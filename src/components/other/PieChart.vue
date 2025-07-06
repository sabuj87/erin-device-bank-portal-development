<template>
    <div class="chart-wrapper">

          <canvas  ref="chartRef" ></canvas>



    </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';
import {
  Chart,
  PieController,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

Chart.register(PieController, ArcElement, Tooltip, Legend);

// Props
const props = defineProps({
  labels: { type: Array, required: true },
  data: { type: Array, required: true },
 colors: { type: Array, required: true },
 is_color_box: { type: Boolean, default: true },


});

const chartRef = ref(null);
let chartInstance;

const createChart = () => {
  const total = props.data.reduce((sum, val) => sum + val, 0);

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(chartRef.value, {
    type: 'pie',
    data: {
      labels: props.labels,
      datasets: [{
        data: props.data,
        backgroundColor: props.colors,
        borderColor: '#fff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          display:props.is_color_box,


        labels: {
        usePointStyle: false,
        pointStyle: 'line' // or 'circle', 'rectRounded', etc. Use 'line' for invisible or thin marker
      }

        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const value = context.raw;
              const percentage = ((value / total) * 100);
              return `${percentage}%`;
            }
          }
        }
      }
    }
  });
};

onMounted(createChart);
</script>
