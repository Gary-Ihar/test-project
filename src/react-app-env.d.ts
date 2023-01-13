/// <reference types="react-scripts" />
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

interface Window {
  ethereum: provider;
}
