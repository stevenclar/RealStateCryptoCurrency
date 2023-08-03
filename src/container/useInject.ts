import {Container} from '.';
import useContainer from './useContainer';

// Custom hook to get an instance from the container
const useInject = <T>(identifier: string): T => {
  const container: Container = useContainer();
  return container.resolve<T>(identifier);
};

export default useInject;
