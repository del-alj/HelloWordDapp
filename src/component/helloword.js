import React, { useState } from "react";

import { Container, Content, Botton, Input, Titel } from "./style";
import { ethers } from "ethers";
import Helloword_abi from "./Helloword_abi.json";
export const HelloWord = () => {
  const contractAddress = "0xD926Fe2ee1fdA45b04D82D3D8a4fDf94760c59e0";
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [currentContractVal, setCurrentContractVal] = useState(null);

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          console.log("test");
          accountChangedHandler(result[0]);
          console.log(result[0]);
          setConnButtonText("Wallet Connected");
        })
        .catch((err) => {
          console.log("test", err);
        });
    } else {
      setErrorMessage("Need to install MetaMask!");
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

  const getCurrentVal = async () => {
    let val = await contract.get();
    setCurrentContractVal(val);
  };

  const setHandler = (e) => {
    e.preventDefault();
    contract.set(e.target.setText.value);
  };

  return (
    <Container>
      <Titel>{"Get/ set Interaction with  contract !"}</Titel>
      <Content>
        <Botton onClick={connectWalletHandler}>{connButtonText}</Botton>
        <h3>Address: {defaultAccount}</h3>

        <form onSubmit={setHandler}>
          <Input id="setText" type="text" />
          <Botton type={"submit"}>Update Contract</Botton>
        </form>

        <Botton onClick={getCurrentVal}> Get Current Value </Botton>
        {currentContractVal}
        {errorMessage}
      </Content>
    </Container>
  );
};
