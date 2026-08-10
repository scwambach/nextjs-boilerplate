interface Window {
  oldScroll: any;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
