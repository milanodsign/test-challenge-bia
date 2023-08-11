'use client';
import './globals.css';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export const metadata = {
  title: 'Where in the world?',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link id="color-scheme" rel="stylesheet" href="dark-theme.css" />
      </head>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
