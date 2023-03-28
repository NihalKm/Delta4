import { Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Graph from "../Items/Graph.svg";

export default function WalletComp(props) {
    return (
        <Stack p={0.5} backgroundColor="#FFFFFF" borderRadius={"25px"}>
            <Stack height="100%" width="100%" justifyContent={"space-around"} sx={{backgroundColor:"#FFFFFF",border:"1px solid #D9D9D9",borderRadius:"10px"}}>
                <Stack direction={"row"} justifyContent="space-around">
                    <Stack justifyContent={"space-between"}>
                        <Typography fontSize={"12px"} fontWeight={"500"} color={"#001B33"}>My Wallet</Typography>
                        <Typography fontSize={"16px"} fontWeight={"700"} color={"#001B33"}>$865.2K</Typography>
                    </Stack>
                    <Stack>
                        <img alt={"Graph"} src={Graph} style={{height:"50px",width:"100px"}}></img>
                    </Stack>
                </Stack>
                <Stack direction={"row"} alignItems="center" gap={1.25} ml={2}>
                    <Chip sx={{borderRadius: "8px", height: "25px", backgroundColor: "#E1F1E8", color: "#60B585", fontWeight:"600", border: "none" }} label="+$20.9K" color="primary" variant="outlined" />
                    <Typography fontSize={"12px"} fontWeight={"500"} color={"#001B33"}>Since last week</Typography>
                </Stack>                   
            </Stack>
        </Stack>
    )
}