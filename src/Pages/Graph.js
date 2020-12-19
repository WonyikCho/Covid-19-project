import React from "react";
import "../App.css";
import ReactApexChart from "react-apexcharts";

function Graph() {

    const series = [{
        name: 'Cases',
        data:[555, 12038, 952172, 6280195, 17839725, 34314446, 63947958, 75672814]
      }, {
        name: 'Cured',
        data: [28, 284, 193172, 2691986, 10556520, 23904098, 41034926, 42667969]
      }, {
        name: 'Death',
        data: [17, 259, 50344, 377777, 681100, 1023674, 1481417, 1674840]
      }];
    const options = {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["1/22/20",
                       "2/1/20", "4/1/20","6/1/20","8/1/20","10/1/20","12/1/20","12/18/20"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      }
    return(
        <div style={{
            backgroundColor: "",
            height: "100vh",
            textAlign: "center"}}>
          <br />
          <h2>Graph</h2>
          <br />
          <ReactApexChart options={options} series={series} type="area" height={350} />
          <br />
        </div>
    );
}

export default Graph;