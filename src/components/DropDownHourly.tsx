import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { whiteOutlinedInput } from 'assets/styles/mui';

type DropDownHourlyProps = {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
};

export const DropDownHourly = ({
  value,
  onChange,
  options,
}: DropDownHourlyProps) => {
  const handleChange = (e: SelectChangeEvent) => {
    onChange(e.target.value);
  };
  return (
    <div>
      <FormControl size="small" className="w-full" sx={whiteOutlinedInput}>
        <InputLabel id="day">Day</InputLabel>
        <Select
          labelId="day"
          value={value}
          label="Day"
          onChange={(e) => onChange(e.target.value)}
          sx={{ minWidth: 120 }}
        >
          {options.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
