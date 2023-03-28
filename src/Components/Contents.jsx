import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import RightArrow from "../Items/RightArrow.svg"
import Shape from "../Items/Shape.svg";
import ArrowUp from "../Items/ArrowUp.svg";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import WalletComp from "./WalletComp";
import Calendar from "./Calender.jsx";

export default function Contents() {
    const barChartData = [
        {
            label: 'Cost(INR)',
            data: [70,40,60,70,40,60,60,60],
            backgroundColor: '#5575A2',
            borderColor: '#5575A2',
            barPercentage:0.4
        },
        {
            label: 'No. of Breakdowns',
            data: [50,70,70,50,70,50,50,50],
            backgroundColor: '#E39142',
            borderColor: '#E39142',
            barPercentage:0.4
        },
        {
            label: 'Fuel Consumption',
            data: [50,20,30,10,55,20,10,15],
            backgroundColor: '#CF605C',
            borderColor: '#CF605C',
            barPercentage:0.4
        }
    ]
    return (
    <Stack direction={"row"} sx={{height:"100%", gap:2, backgroundColor:"#FCFCFC", py:4}}>
        <Stack flex={2} marginLeft="34px" gap={3}>
            <Stack flex={2} gap={3}>
                <Stack direction={"row"} height="100%" width="100%" gap={3}>
                    <Stack flex={1}>
                        <Stack direction={"row"} alignItems="center" justifyContent={"space-around"} sx={{minHeight:"150px",backgroundColor:"#FFFFFF",border:"1px solid #D9D9D9",borderRadius:"20px"}}>
                            <Stack maxWidth={"120px"}>
                                {/* Mechanical Maintenance */}
                                <DoughnutChart 
                                    aspectRatio={1}
                                    rotation={100}
                                    data={[35]} 
                                    bgColors={['#8575E7']} 
                                    labels={['Mechanical Maintanence']}
                                />
                                {/* Mechanical Maintenance */}   
                            </Stack>
                            <Stack>
                                <Typography variant="h5" fontWeight={"600"} color={"#000000"}>
                                    Ankit Jha
                                </Typography>
                                <Typography variant="subtitle1" fontWeight={"400"} color={"#000000"}>
                                    Mechanical Maintenance
                                </Typography>
                            </Stack>
                            <img height={"40px"} width={"40px"} src={RightArrow} alt="Arrow" />                 
                        </Stack>
                        <Typography variant="subtitle1" display={"flex"} fontWeight={"400"} color={"#555555"}>
                            Maximum permits created in last month
                        </Typography>
                    </Stack>
                    <Stack flex={1}>
                        <Stack alignItems="center" direction="row" justifyContent={"space-around"} sx={{minHeight:"150px",backgroundColor:"#FFFFFF",border:"1px solid #D9D9D9",borderRadius:"20px"}}>
                            <Stack sx={{ maxWidth: "120px", maxHeight: "120px"}}>
                                <img height={"40px"} width={"100px"} src={Shape} alt="Arrow"/>
                                <Stack direction={"row"} alignItems="baseline" gap={0.5}>
                                    <Typography sx={{fontSize:"60px"}} fontWeight={"400"} color={"#491782"}>
                                        19
                                    </Typography>
                                    <Typography sx={{fontSize:"17px"}} fontWeight={"400"} color={"#491782"}>
                                        times
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Stack>
                                <Typography variant="h5" fontWeight={"600"} color={"#000000"}>
                                    Rahul Yadav
                                </Typography>
                                <Typography variant="subtitle1" fontWeight={"400"} color={"#000000"}>
                                    Electrical Maintenance
                                </Typography>
                            </Stack>
                            <img height={"40px"} width={"40px"} src={RightArrow} alt="Arrow" />
                        </Stack>
                        <Typography variant="subtitle1" display={"flex"} fontWeight={"400"} color={"#555555"}>
                            Max LOTO done in last month
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction={"row"} height="100%" width="100%" divider={<Divider sx={{borderColor:"#D9D9D9"}} orientation="vertical" flexItem />} sx={{ py:2, backgroundColor: "#FFFFFF", border: "1px solid #D9D9D9", borderRadius: "20px"}}>
                    <Stack height="100%" width="100%" justifyContent={"center"}>
                        {/* By MM Team */}
                        <DoughnutChart 
                            rotation={100}
                            data={[7, 67, 26]} 
                            bgColors={['#BB3B8A', '#9A277D', '#781C74']} 
                            labels={['Operational: 07%', 'Mechanical: 67%', 'Electrical: 26%']}
                        />
                        {/* By MM Team */}                    
                    </Stack>
                    <Stack height="100%" width="100%" justifyContent={"center"}>
                        {/* Hot Work */}
                        <DoughnutChart 
                            rotation={100}
                            data={[7, 67, 26]} 
                            bgColors={['#BB3B8A', '#D55A9A', '#E57CA5']} 
                            labels={['Hot work: 07%', 'Work At Height: 67%', 'Confined Space: 26%']}
                        />
                        {/* Hot Work */}  
                    </Stack>
                    <Stack height="100%" width="100%" justifyContent={"center"}>
                        {/* WIP */}
                        <DoughnutChart 
                            rotation={100}
                            data={[7, 67, 26]} 
                            bgColors={['#5256B8', '#787AC4', '#A8AAD6']} 
                            labels={['Created: 07%', 'Isolated: 67%', 'WIP: 26%']}
                        />
                        {/* WIP*/}  
                    </Stack>
                </Stack>
                <Stack direction={"row"} justifyContent="space-between" height="100%" width="100%" minHeight={"120px"} maxHeight="150px" gap={2}>
                    <WalletComp />
                    <WalletComp />
                    <WalletComp />
                    <WalletComp />
                </Stack>
            </Stack>
            <Stack flex={1} sx={{backgroundColor:"#FFFFFF",border:"1px solid #D9D9D9",borderRadius:"20px",padding:"16px 8px"}}>
                <Stack direction={"row"} justifyContent="space-around">
                    <Stack direction={"row"} gap={1.5}>
                        <Typography fontSize={"1.3rem"} fontWeight={"600"} color={"#001B33"}>Total Permits Made</Typography>
                        <Stack sx={{color:"#CF605C"}} direction="row" alignItems={"center"} gap={0.75}>
                            <Typography fontSize={"1.3rem"} fontWeight={"800"}>89</Typography>
                            <Typography fontSize={"1.3rem"} fontWeight={"500"}>10%</Typography>
                            <img src={ArrowUp} alt="ArrowUp"></img>
                        </Stack>
                    </Stack>
                    <Stack direction={"row"} gap={1.5}>
                        <Typography fontSize={"1.3rem"} fontWeight={"600"} color={"#001B33"}>Avg PTW Downtime</Typography>
                        <Stack sx={{color:"#CF605C"}} direction={"row"} alignItems={"center"} gap={0.75}>
                            <Typography fontSize={"1.3rem"} fontWeight={"800"}>25 mins</Typography>
                            <Typography fontSize={"1.3rem"} fontWeight={"500"}>18%</Typography>
                            <img src={ArrowUp} alt="ArrowUp"></img>
                        </Stack>
                    </Stack>
                </Stack>
                <BarChart data={barChartData} labels={['TATA 1918.K','Tata Hyva 2518','TATA LPK 3118','TATA Prima 2518','Tata 5530.S','Tata FL 5589','TATA 2456','Site 8']} />
            </Stack>
        </Stack>
        <Stack flex={1} gap={2}>
            <Stack flex={2} sx={{background: "#FFFFFF",border: "1px solid #D9D9D9",borderRadius: "20px"}}>
                <Calendar />
            </Stack>
            <Stack flex={1} sx={{backgroundColor:"#FFFFFF",border:"1px solid #D9D9D9",borderRadius:"20px",maxHeight:"400px",p:1}} backgroundColor="violet" justifyContent={"center"}>
                <Typography fontSize={"1.3rem"} fontWeight={"500"} color={"#001B33"}>
                    Top 10 Most Frequent Failures
                </Typography>
                {/* Top 10 Most Frequent Failures */}
                <DoughnutChart 
                    aspectRatio={1.4}
                    rotation={60}
                    data={[12, 16, 12, 21, 16, 15, 21, 14, 22, 18]} 
                    bgColors={['#F9E6E2', '#F5D3D1', '#F1BDC1', '#ECA0B3', '#E57CA5', '#D55A9A', '#BB3B8A', '#9A277D', '#781C74', '#551469']} 
                    labels={['Gearbox oil change', 'Fuel indicator issue', 'Electronics glitches', 'Tyres replacement', 'Shock change', 'Engine Oil change', 'Brake hydraulic issue', 'Engine clutch issue', 'Brake disc worn out', 'Steering issues']}
                />
                {/* Top 10 Most Frequent Failures */}
            </Stack>
        </Stack>
    </Stack>
    )
}
    