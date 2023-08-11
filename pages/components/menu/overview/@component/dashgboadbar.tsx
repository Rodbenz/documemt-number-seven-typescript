import React from 'react'
import { Bar, getDatasetAtEvent, getElementsAtEvent, getElementAtEvent } from "react-chartjs-2";
import type { ChartData, ChartOptions } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
interface IFDashgboadbar {
  data: ChartData<'bar'>;
  options: ChartOptions<'bar'>;
  handleOnchange?: any
}
export default function Dashgboadbar({ data, options, handleOnchange }: IFDashgboadbar) {
  const chartRef = React.useRef<any>();

  const onClick = (event: any) => {
    try {
      handleOnchange(getElementsAtEvent(chartRef.current, event)[0])
    } catch (error) {
      console.error(error)
    }
  }
  const dataSub = {
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderWidth: 2,
        dataList: []
      },
      {
        label: "",
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 2,
        dataList: []
      },
    ],
  };
  return (
    <div style={{ width: '100%' }}>
      <Bar data={data ? data : dataSub}
        options={options}
        ref={chartRef}
        onClick={onClick}
      />
    </div>
  )
}
