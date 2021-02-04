import { createGlobalStyle } from 'styled-components'

import NetflixSansRegularWoff from './fonts/NetflixSans-Regular.woff'
import NetflixSansRegularWoff2 from './fonts/NetflixSans-Regular.woff2'

import NetflixSansMediumWoff from './fonts/NetflixSans-Medium.woff'
import NetflixSansMediumWoff2 from './fonts/NetflixSans-Medium.woff2'

import NetflixSansBoldWoff from './fonts/NetflixSans-Bold.woff'
import NetflixSansBoldWoff2 from './fonts/NetflixSans-Bold.woff2'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Netflix Sans';
    src: local('Netflix Sans'), local('Netflix Sans'),
    url(${NetflixSansRegularWoff2}) format('woff2'),
    url(${NetflixSansRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Netflix Sans';
    src: local('Netflix Sans'), local('Netflix Sans'),
    url(${NetflixSansMediumWoff2}) format('woff2'),
    url(${NetflixSansMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Netflix Sans';
    src: local('Netflix Sans'), local('Netflix Sans'),
    url(${NetflixSansBoldWoff2}) format('woff2'),
    url(${NetflixSansBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
  
  html, body {
    font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
    color: #333;
    font-size: 16px;

  }
  
  ::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255, 255, 255, 0.4);
  }
`
