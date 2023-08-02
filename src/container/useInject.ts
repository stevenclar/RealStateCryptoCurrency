import {Container} from '.';
import useContainer from './useContainer';

const useInject = <T>(identifier: string): T => {
  const container: Container = useContainer();
  return container.resolve<T>(identifier);
};

export default useInject;
