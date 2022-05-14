import { ComponentStory } from '@storybook/react';
import React from 'react';
import { MatchCounter } from './MatchCounter';

export default {};

const Template: ComponentStory<typeof MatchCounter> = (args) => (
  <MatchCounter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  matchStartTime: Date.now(),
  teamA: 'Polska',
  teamB: 'Belgia',
};
