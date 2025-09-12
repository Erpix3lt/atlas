import { Chart } from "../../../components/visual/chart";
import { images } from "../pages/images";

export function ChartStory() {
  const chartData = [
    { title: "Design Principles", percentage: 35 },
    { title: "Typography", percentage: 25 },
    { title: "Layout Systems", percentage: 20 },
    { title: "Color Theory", percentage: 15 },
    { title: "User Experience", percentage: 5 },
  ];

  return (
    <Chart
      images={images}
      id="cybersyn"
      title="Design Focus Areas"
      items={chartData}
    />
  );
}
