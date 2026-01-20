import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { whiteOutlinedInput } from 'assets/styles/mui';

export function DropDown() {
  return (
    <div>
      <FormControl
        size="small"
        className="w-32 sm:w-48 lg:w-32 "
        //sx={whiteOutlinedInput}
      >
        <InputLabel id="units">
          <SettingsIcon sx={{ pl: 0, pr: 0.5 }} />
          Units
        </InputLabel>
        <Select
          labelId="units"
          id="units"
          //value={'age'}
          label="Units"
          //onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
