import { RiLightbulbFlashFill } from 'react-icons/ri';
import { Button, ButtonProps } from '../../common/atoms/Button';

export const ThemeButton = (props: ButtonProps) => (
  <Button {...props} title="Change theme">
    <RiLightbulbFlashFill />
  </Button>
);
