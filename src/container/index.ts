import {createContext} from 'react';

interface Container {
  registry: Record<string, any>;
  resolve<T>(identifier: string): T;
}

const ContainerContext = createContext<Container | null>(null);

const Container: Container = {
  registry: {},
  resolve<T>(identifier: string): T {
    if (!this.registry.hasOwnProperty(identifier)) {
      throw new Error(
        `Object with identifier ${identifier} not found in container`,
      );
    }
    return this.registry[identifier];
  },
};

export {Container, ContainerContext};
