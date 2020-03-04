// Global configuration for knobs
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

// Decorator for using theme and global styles
import withTheme from '../storybook/decorators/withTheme';
addDecorator(withTheme);

// Decorator for a11y testing
import { withA11y } from '@storybook/addon-a11y';
addDecorator(withA11y);

// Global configuration
import { configure } from '@storybook/react';

configure(require.context('../src', true, /\.stories\.js$/), module);
