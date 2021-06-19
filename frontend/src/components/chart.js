import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useLayoutEffect, useRef } from "react";

am4core.useTheme(am4themes_animated);

function Chart({ data }) {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4charts.PieChart3D);
    x.hiddenState.properties.opacity = 0; // this creates initial fade-in

    x.data = [];

    x.innerRadius = 60;

    let series = x.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "hour";
    series.dataFields.category = "name";

    chart.current = x;
    return () => {
      x.dispose();
    };
  });
  useLayoutEffect(() => {
    if (data) {
      let chartData;
      if (data) chartData = data.map(dat => ({name: `${dat.name} ${dat.surName}`, hour: dat.hour}));

      chart.current.data = chartData;
    }
  }, [data]);

  return <div id="chartdiv" style={{ width: "550px", height: "250px" }}></div>;
}

export default Chart;
