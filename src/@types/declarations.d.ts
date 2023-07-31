// PAGES
declare module '@pages/Index' {
  import React = require('react')
  interface MyComponentProps {
    history?: any
    location?: any
    match?: any
    staticContext?: any
  }
  const MyComponent: React.FC<MyComponentProps>
  export default MyComponent
}

// OTHER
declare module 'react-hook-google-maps'
declare module 'jest-google-maps-mock'
declare module 'google'
declare module '*.png'
declare module '*.jpg'
declare module '*.gif'
declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';
  export const ReactComponent: React.FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;
  const src: string;
  export default src;
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql'
  const value: {
    [key: string]: DocumentNode
  }
  export = value

}

declare const IS_PROD: boolean
declare const IS_DEV: boolean
declare const IS_DEV_SERVER: boolean
