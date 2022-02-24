import { Web3Provider } from '@ethersproject/providers';

const getLibrary = (provider: any) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};

export default getLibrary;
