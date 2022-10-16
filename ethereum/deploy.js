const HDWalletPrrovider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletPrrovider(
    'task caution bus maple join slush helmet hotel friend walnut airport surprise',
    'https://sepolia.infura.io/v3/b84ae094adf74ca7b2f12e9f50c1a1fe'
    );

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account' , accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data: compiledFactory.bytecode})
        .send({gas : '1000000' , from : accounts[0]});

    console.log('Contract deployed to', result.options.address);

    provider.engine.stop(); 
};
deploy();

//new
//Attempting to deploy from account 0xA5F5F30400E92E80caEaB5eE6b7312d4547857B8
//Contract deployed to 0xbCFF1C5E5Dc203E35CE9ba896C1d97d57ab640A9

//Attempting to deploy from account 0xA5F5F30400E92E80caEaB5eE6b7312d4547857B8
//Contract deployed to 0xB2002867A0B3c53AE71949Dd0E439BaDB7333421

//Attempting to deploy from account 0xA5F5F30400E92E80caEaB5eE6b7312d4547857B8
//Contract deployed to 0xE2225dA5BBe17Dd54Eb8876FCCf45Cb9742Cbc94

//Attempting to deploy from account 0xA5F5F30400E92E80caEaB5eE6b7312d4547857B8
///Contract deployed to 0xfa395091e56aC919590Ae736d8d51783803A6D31

//Attempting to deploy from account 0xA5F5F30400E92E80caEaB5eE6b7312d4547857B8
//Contract deployed to 0x53d759c40Ce1154AC842D18a61eEe0dc2885B589

//Attempting to deploy from account 0xA5F5F30400E92E80caEaB5eE6b7312d4547857B8
//Contract deployed to 0x01A24e3dA1749D4D8053385FD708a6A07c35cC9D

//Attempting to deploy from account 0xA5F5F30400E92E80caEaB5eE6b7312d4547857B8
//Contract deployed to 0xF389E4E7D3881015448f4c54F731bFf7b74F1e6b

//old
//0x5C12A9A9a50A6C96F97d38936F4053b5C5b8b486
//0x619662E9f9C35Ca799404955049b7189D381f0cE --deployed campaign

//0x36679DCC4bD49B809fE4833695B3734a47CF2Bf4

//0xD1670524ac044E3Ddb698e322fbd5f66a57334F4

//0x33b705F0a2e9082a623cfF613Cf5669DfD858312