import React from 'react';
import ThemeProvider from '../../src/components/ThemeProvider';

export default story => <ThemeProvider className="responsive">{story()}</ThemeProvider>;
