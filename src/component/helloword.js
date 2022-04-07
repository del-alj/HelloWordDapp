import { WebSocketProvider } from '@ethersproject/providers';
import { ethers } from 'ethers';
import React, { useState } from 'react';
import Helloword_abi from './Helloword_abi.json';
export const HelloWord = () => {
  const contractAddress = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4';
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [currentContractVal, setCurrentContractVal] = useState(null);

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
      .request({method: 'eth_requestAccounts' })
      .then((result) => {
          console.log('test');
          accountChangedHandler(result[0]);
          console.log(result[0]);
          setConnButtonText('Wallet Connected');
        }).catch((err)=> {console.log('test', err)});
    } else {
      setErrorMessage('Need to install MetaMask!');
    }
  };
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    updateEthers();
  };

  const updateEthers = () => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(tempProvider);

    let tempSigner = tempProvider.getSigner();
    setSigner(tempSigner);

    let tempContract = new ethers.Contract(
      contractAddress,
      Helloword_abi,
      tempSigner
    );
    setContract(tempContract);
  };

  // const getCurrentVal = async () => {
  //   let val = await contract.get();
  //   setCurrentContractVal(val);
  // }
  return (
    <div>
      <h3>{'Get/ set Interaction with  contract !'}</h3>
      <button onClick={connectWalletHandler}>{connButtonText}</button>
      <h3>Address: {defaultAccount}</h3>

      <button onClick={connectWalletHandler}> Get Current Value </button>
      {currentContractVal}
      {errorMessage}
    </div>
  );
};
