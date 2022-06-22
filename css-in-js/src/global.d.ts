declare module '*.m.less' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.less';
declare module '*.scss';
declare module '*.css';
declare module '*.svg';

// declare module '@vue/runtime-core';

declare module 'styled-components';


// type JSXElementWithMobxFormData = import('../src/components/common/mobxFormData/interface').JSXElementWithMobxFormData;

declare namespace JSX {
  interface Element extends React.ReactElement<any, any>, JSXElementWithMobxFormData {}

  // interface ElementClass {
  //   $props?: Record<string, unknown>;
  // }
}
