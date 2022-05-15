import { ComponentStory } from '@storybook/react';
import React from 'react';
import { TreeView } from './TreeView';

export default {};

const Template: ComponentStory<typeof TreeView> = (args) => (
  <TreeView {...args} />
);

export const ExampleData = Template.bind({});

ExampleData.args = {
  root: {
    type: 'directory',
    name: 'My files',
    children: [
      {
        type: 'directory',
        name: 'News',
        children: [
          { type: 'file', name: 'Article1.png' },
          { type: 'file', name: 'Article2.png' },
        ],
      },
      {
        type: 'directory',
        name: 'Movie reviews',
        children: [{ type: 'file', name: 'Spiderman-trailer.mp4' }],
      },
      {
        type: 'directory',
        name: 'Certificates',
        children: [],
      },
      {
        type: 'directory',
        name: 'studies',
        children: [
          {
            type: 'directory',
            name: '1st year',
            children: [
              {
                type: 'directory',
                name: 'math',
                children: [
                  { type: 'file', name: 'exam1.pdf' },
                  { type: 'file', name: 'exam2.pdf' },
                ],
              },
              {
                type: 'directory',
                name: 'physics',
                children: [
                  { type: 'file', name: 'homework.pdf' },
                  {
                    type: 'directory',
                    name: 'slides',
                    children: [
                      { type: 'file', name: 'subject1.pdf' },
                      { type: 'file', name: 'subject2.pdf' },
                      { type: 'file', name: 'subject3.pdf' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
