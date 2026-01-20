import { SxProps, Theme } from '@mui/material';

export const whiteOutlinedInput: SxProps<Theme> = {
  /* Border */
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },

  /* Input text */
  '& .MuiInputBase-input': {
    color: 'white',
  },

  /* Select value (important) */
  '& .MuiSelect-select': {
    color: 'white',
  },
  '& .MuiSelect-select:focus': {
    color: 'white',
  },

  /* Icon (arrow / settings icon) */
  '& .MuiSvgIcon-root': {
    color: 'white',
  },

  /* Label */
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'white',
  },

  /* Prevent hover background tint */
  '& .MuiOutlinedInput-root:hover': {
    backgroundColor: 'transparent',
  },
};
