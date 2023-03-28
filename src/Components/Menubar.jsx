import { Stack } from "@mui/system";
import BrandLogo from '../Items/BrandLogo.svg'
import BriefCaseLogo from '../Items/BriefCaseLogo.svg'

export default function Menubar(props) {
    const menus = ["Dashboard","Work Permits","Areas","Projects","Users","Reports","Profile"];
    const { selectedMenu, setSelectedMenu } = props;
    return (
        <Stack sx={{height:"150%",minWidth:"238px",backgroundColor:"#0E2539",color:"#EEEEEE"}}> 
            <Stack alignItems={"center"} justifyContent={"center"} marginY="15px" p={3}>
                <img src={BrandLogo} alt="Logo"/>
            </Stack>
            <Stack gap={3}>
            {
                menus.map(menu=>
                <Stack key={menu} sx={{fontWeight:"500",height:"40px",alignItems:"center",pl:"48px",boxShadow:(selectedMenu===menu && "0px 4px 4px rgba(0, 0, 0, 0.25)"),backgroundColor:(selectedMenu===menu && "#1F3F5C")}} onClick={()=>setSelectedMenu(menu)} gap={1.5} direction={"row"}><img height={"20px"} src={BriefCaseLogo} alt="Logo"/>{menu}</Stack>)
            }
            </Stack>
        </Stack>
    )
}