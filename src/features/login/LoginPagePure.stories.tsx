import { ComponentStory } from '@storybook/react';
import React from 'react';
import { LoginPagePure } from './LoginPagePure';

export default {
  argTypes: {
    onGotoLoginClick: { action: 'go to login' },
    onRegisterSubmit: { action: 'register' },
    onLoginSubmit: { action: 'login' },
    onGotoRegisterClick: { action: 'go to register' },
  },
};

const Template: ComponentStory<typeof LoginPagePure> = (args) => (
  <LoginPagePure {...args} />
);

export const LoginPending = Template.bind({});

LoginPending.args = {
  signInState: { type: 'login-pending' },
};

export const LoginError = Template.bind({});

LoginError.args = {
  signInState: { type: 'login-error', message: 'Example error message' },
};

export const RegisterIdle = Template.bind({});

RegisterIdle.args = {
  signInState: {
    type: 'register-idle',
  },
};

export const RegisterError = Template.bind({});

RegisterError.args = {
  signInState: {
    type: 'register-error',
    message:
      'Could not register that user. Try again later or contact support.',
  },
};
