import { RiLightbulbFlashFill } from 'react-icons/ri';
import { Button, ButtonProps } from '../../components/atoms/Button';

export const ThemeButton = (props: ButtonProps) => (
  <Button {...props} title="Change theme">
    <RiLightbulbFlashFill />
  </Button>
);
