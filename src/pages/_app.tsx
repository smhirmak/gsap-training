import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import '@/styles/slider.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
