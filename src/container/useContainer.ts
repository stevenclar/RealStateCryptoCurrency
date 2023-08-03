import {useContext} from 'react';
import {Container, ContainerContext} from '.';

// Custom hook to get the container instance
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
