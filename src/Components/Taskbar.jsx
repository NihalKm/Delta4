import { Search, KeyboardArrowDownOutlined } from "@mui/icons-material";
import { Avatar, FormControl, IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { SelectMenu } from "./Common";
import NotificationIcon from "../Items/NotificationIcon.svg";
import AvatarLogo from "../Items/AvatarLogo.svg";

export default function Taskbar() {
  const unitNames = [
    { value: 'unit1', label: 'Unit Name'},
    { value: 'unit2', label: 'Unit Name 1'},
    { value: 'unit3', label: 'Unit Name 2'}
  ];
  const siteNames = [
    { value: 'site1', label: 'Site Name'},
    { value: 'site2', label: 'Site Name 1'},
    { value: 'site3', label: 'Site Name 2'}
  ];
  const timeFrames = [
    { value: 'frame1', label: 'Time Frame'},
    { value: 'frame2', label: 'Time Frame 1'},
    { value: 'frame3', label: 'Time Frame 2'}
  ];
  return (
    <Stack sx={{height:"92px",backgroundColor:"#FFFFFF"}} alignItems="center" justifyContent={"space-between"} direction={"row"}>
      <Stack direction={"row"} gap={3} marginLeft="34px">
        <FormControl variant="outlined">
          <OutlinedInput sx={{ minWidth:"200px",maxWidth: "378px", height: "56px", borderRadius: "8px", backgroundColor: "#E3EBF7" }} 
            endAdornment={ <InputAdornment position="end"> <IconButton edge="end">{<Search sx={{color:"#0074DE"}} />}</IconButton></InputAdornment> }
          />
        </FormControl>
        <Stack direction={"row"} gap={"20px"}>
          <SelectMenu options={unitNames} defaultValue={"unit1"} />
          <SelectMenu options={siteNames} defaultValue={"site1"} />
          <SelectMenu options={timeFrames} defaultValue={"frame1"} />
        </Stack>
      </Stack>
      <Stack direction={"row"} py={1} gap={2} justifyContent="space-between">
        <img src={NotificationIcon} alt={"Notification"} />
        <Stack direction={"row"} backgroundColor="#E3EBF7" justifyContent={"space-evenly"} height={"92px"} minWidth="250px" maxWidth={"330px"} alignItems="center">
          <Avatar sx={{ width: 48, height: 48 }} alt="Nihar" src={AvatarLogo} />
          <Typography sx={{fontSize:"1.5rem"}} fontWeight={"400"} color={"#666666"}>
            Hello Nihar
          </Typography>
          <KeyboardArrowDownOutlined/>
        </Stack>
      </Stack>
    </Stack>
  )
}
