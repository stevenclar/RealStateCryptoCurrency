import React from 'react';
import {ContainerContext, Container} from '.';

interface ContainerProviderProps {
  container: Container;
  children: React.ReactNode;
}

/**
 * ContainerProvider is a React component that provides a container to all
 * children components.
 * @param container The container to provide to children components.
 * @param children The children components.
 * @constructor
 * @example
 * ```tsx
 * const container = new Container();
 * const App = () => (
 *  <ContainerProvider container={container}>
 *   <MyComponent />
 * </ContainerProvider>
 * );
 * ```
 */
const ContainerProvider: React.FC<ContainerProviderProps> = ({
  container,
  children,
}) => {
  return (
    <ContainerContext.Provider value={container}>
      {children}
    </ContainerContext.Provider>
  );
};

export default ContainerProvider;
