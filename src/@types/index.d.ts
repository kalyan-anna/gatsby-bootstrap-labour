/// <reference types="react/index.d.ts"/>
/// <reference types="node" />

// TODO: Check if this is really required
// Add support for css prop
declare namespace React {
  interface DOMAttributes<T> {
    css?: any;
  }
}

// Add support for svg imports
declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}
