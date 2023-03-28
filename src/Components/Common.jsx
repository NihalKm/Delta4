import { MenuItem, TextField } from "@mui/material";

export function SelectMenu(props) {
    const { options, defaultValue } = props;
    return (
    <TextField select fullWidth sx={{minWidth:"186px"}} defaultValue={defaultValue} inputProps={{sx:{backgroundColor:"#EEEEEE"}}} InputProps={{sx:{"& .MuiSelect-select":{display:"flex"},"& .MuiSvgIcon-root":{color:"#000000"}}}}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
    )
}
