import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Typography,
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
            <MenuItem
              key={opt.value}
              value={opt.value}
              color="text.primary"
              sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}
            >
              <Typography
                color="text.primary"
                sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}
              >
                {opt.label}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
