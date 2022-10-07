const HDWalletPrrovider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampainFactory.json');

const provider = new HDWalletPrrovider(
    'task caution bus maple join slush helmet hotel friend walnut airport surprise',
    // 'https://goerli.infura.io/v3/b38cb4225c574451b5f258ca41603668',
    'https://sepolia.infura.io/v3/b84ae094adf74ca7b2f12e9f50c1a1fe',
    );

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account' , accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data: compiledFactory.bytecode})
        .send({gas : '1000000' , from : accounts[0]});

    console.log('Contract deployed to', result.options.address);
    console.log(await web3.eth.getBalance(accounts[0]));
    console.log(await web3.eth.getBalance(accounts[1]));



    provider.engine.stop(); 
};
deploy();

//0x5C12A9A9a50A6C96F97d38936F4053b5C5b8b486

//0x36679DCC4bD49B809fE4833695B3734a47CF2Bf4

//0xD1670524ac044E3Ddb698e322fbd5f66a57334F4

//0x33b705F0a2e9082a623cfF613Cf5669DfD858312