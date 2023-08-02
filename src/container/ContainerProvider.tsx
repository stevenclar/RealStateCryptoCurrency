import React from 'react';
import {ContainerContext, Container} from '.';

interface ContainerProviderProps {
  container: Container;
  children: React.ReactNode;
}

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
