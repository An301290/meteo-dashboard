import { InputAdornment, TextField } from '@mui/material';
import { SearchButton } from './SearchButton';
import { whiteOutlinedInput } from 'assets/styles/mui';
import SearchIcon from '@mui/icons-material/Search';

export const SearchField = () => {
  return (
    <div className="flex items-center justify-center mt-6">
      <TextField
        // value={query}
        // onChange={(e) => setQuery(e.target.value)}

        placeholder="Search for a place..."
        size="small"
        fullWidth
        sx={{ ...whiteOutlinedInput, marginRight: '10px' }}
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
      <SearchButton buttontext="Search" />
    </div>
  );
};
