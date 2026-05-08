import { Button } from '@mui/material';

type SearchButtonProps = {
  onClick: () => void;
  buttontext: string;
};

export const SearchButton = ({ buttontext, onClick }: SearchButtonProps) => {
  return (
    <div>
      <Button variant="contained" onClick={onClick}>
        {buttontext}
      </Button>
    </div>
  );
};
