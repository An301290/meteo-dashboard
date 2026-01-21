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
};
