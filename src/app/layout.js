'use client';
import './globals.css';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link id="color-scheme" rel="stylesheet" href="dark-theme.css" />
        <title>Where in the world?</title>
      </head>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
