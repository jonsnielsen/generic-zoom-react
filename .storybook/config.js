import { configure } from '@storybook/react';

configure(require.context('../src/__stories__', true, /\.stories\.tsx?$/), module);
