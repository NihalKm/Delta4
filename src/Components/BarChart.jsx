import { CChart } from "@coreui/react-chartjs";

export default function BarChart(props) {
    const { data, labels, aspectRatio=2.5 } = props;
    return (
        <CChart
            type="bar"
            data={{
                labels: labels,
                datasets: data,
            }}
            options={{
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        title: {
                            color: '#001B33',
                            display: true,
                            text: 'Permits Made',
                            align: "start",
                            font: { weight: 600, family: "Poppins"}
                          }
                    },
                    y: {
                        grid : {
                            color: ["#CF605C","#E39142","#5575A2"],
                            borderDash: [8, 6]
                        },
                        title: {
                            color: '#001B33',
                            display: true,
                            text: 'Quantity',
                            align: "center",
                            font: { weight: 600, family: "Poppins"}
                          }
                        }
                },
                responsive: true,
                aspectRatio: aspectRatio,
                cutout: "75%",
                plugins: {
                    tooltip: {
                        enabled: false
                    },
                    legend: {
                        position: 'bottom',
                        display: true,
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
    