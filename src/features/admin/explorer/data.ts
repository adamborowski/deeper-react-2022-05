import { Node } from './types';

export const data: Node = {
  type: 'directory',
  name: 'My documents',
  children: [
    {
      type: 'directory',
      name: 'My pictures',
      children: [
        { type: 'file', name: 'Wallpaper.png' },
        { type: 'file', name: 'Logo.png' },
      ],
    },
    {
      type: 'directory',
      name: 'My movies',
      children: [{ type: 'file', name: 'party.mp4' }],
    },
    {
      type: 'directory',
      name: 'My certs',
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
};
