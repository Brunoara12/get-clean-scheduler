import { ResponsivePie } from "@nivo/pie"
import { mockPieData as data } from "../../../data/mockData"

const PieChart = () => {

    return (
        <ResponsivePie
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: "var(--color-background-accent)"
                        }
                    },
                    legend: {
                        text: {
                            fill: "var(--color-text-muted)"
                        }
                    },
                    ticks: {
                        line: {
                            stroke: "var(--color-background-opp)",
                            strokeWidth: 1,
                        },
                        text: {
                            fill: "var(--color-text-muted)"
                        }
                    }
                },
                legends: {
                    text: {
                        fill: "var(--color-text-muted)",
                    },
                },
                tooltip: {
                    container: {
                        background: "var(--color-background-opp)",
                        color: "var(--color-text-opp)",
                    },
                },
            }}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="var(--color-text-base)"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            enableArcLabels={false}
            arcLabelsRadiusOffset={0.4}
            arcLabelsSkipAngle={7}
            arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 2]],
            }}
            defs={[
                {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    size: 4,
                    padding: 1,
                    stagger: true,
                },
                {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                },
            ]}
            legends={[
                {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: "#999",
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: "circle",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemTextColor: "#000",
                            },
                        },
                    ],
                },
            ]}
        />


    )
}


export default PieChart