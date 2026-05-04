import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { whiteOutlinedInput } from 'assets/styles/mui';

export const DropDownHourly = () => {
  return (
    <div>
      <FormControl
        size="small"
        className="w-32 sm:w-48 lg:w-32 "
        sx={whiteOutlinedInput}
      >
        <InputLabel id="day">Day</InputLabel>
        <Select
          labelId="day"
          id="day"
          //value={'age'}
          label="Day"
          //onChange={handleChange}
        >
          <MenuItem value={10}>Monday</MenuItem>
          <MenuItem value={20}>Tuesday</MenuItem>
          <MenuItem value={30}>Wednesday</MenuItem>
          <MenuItem value={40}>Thursday</MenuItem>
          <MenuItem value={50}>Friday</MenuItem>
          <MenuItem value={60}>Saturday</MenuItem>
          <MenuItem value={70}>Sunday</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
