declare module 'react-components-test-package-master' {
    import React from 'react';
  
    interface LoaderProps {
      logo: string;
    }
  
    const Loader: React.FC<LoaderProps>;
    export default Loader;
  }