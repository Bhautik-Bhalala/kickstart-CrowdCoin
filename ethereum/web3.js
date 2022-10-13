import Web3 from "web3";

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    //we are in the browser 
    web3 = new Web3(window.web3.currentProvider);
}else{
    // we are on the browser OR the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        // 'task caution bus maple join slush helmet hotel friend walnut airport surprise',
        'https://sepolia.infura.io/v3/b84ae094adf74ca7b2f12e9f50c1a1fe',
    );

    web3 = new Web3(provider);
}

// window.ethereum.request({ method: "eth_requestAccounts" });

// const web3 = new Web3(window.ethereum);

// const web3 = new Web3(window.web3.currentProvider);

export default web3;