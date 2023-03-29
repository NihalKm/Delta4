import { CChart } from "@coreui/react-chartjs";

export default function DoughnutChart(props) {
    const { data, bgColors, labels, rotation=0, aspectRatio=1 } = props;
    const isSingle = data.length>1;
    return (
        <CChart
            type="doughnut"
            data={{
                labels: labels,
                datasets: [
                {
                    backgroundColor: bgColors,
                    data: data,
                    hoverOffset: 2,
                    rotation: rotation,
                    borderWidth: 0,
                },
                ],
            }}
            options={{onHover:null,
                responsive: true,
                aspectRatio: aspectRatio,
                cutout: "75%",
                plugins: {
                    tooltip: {
                        enabled: false
                    },
                    legend: {
                        position: 'right',
                        display: isSingle,
                        labels: {
                            pointStyle: "rectRounded",
                            usePointStyle: true,
                            font: {
                                size: 12
                            }
                        }
                    }
                }
            }}
        />
    )
}
    