import { InputAdornment, TextField } from '@mui/material';
import { SearchButton } from './SearchButton';
import { whiteOutlinedInput } from 'assets/styles/mui';
import SearchIcon from '@mui/icons-material/Search';

type SearchFieldProps = {
  value: string;
  onChange: (next: string) => void;
  onSearch: () => void;
};

export const SearchField = ({
  value,
  onChange,
  onSearch,
}: SearchFieldProps) => {
  return (
    <form
      className="flex items-center justify-center mt-6"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <TextField
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a place..."
        size="small"
        fullWidth
        sx={{ ...whiteOutlinedInput, pr: 5 }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          },
        }}
      />
      <SearchButton buttontext="Search" onClick={onSearch} />
    </form>
  );
};
