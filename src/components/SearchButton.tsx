import { Button } from '@mui/material';

type SearchButtonProps = {
  // onClick: () => void;
  buttontext: string;
};

export const SearchButton = ({ buttontext }: SearchButtonProps) => {
  return (
    <div>
      <Button variant="contained">{buttontext}</Button>
    </div>
  );
};
