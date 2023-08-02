import {useContext} from 'react';
import {Container, ContainerContext} from '.';

const useContainer = (): Container => {
  const container = useContext(ContainerContext);
  if (!container) {
    throw new Error(
      'Container not found. Make sure to wrap your components with a ContainerProvider.',
    );
  }
  return container;
};

export default useContainer;
