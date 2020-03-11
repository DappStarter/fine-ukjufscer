require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off foot find release stereo solar gloom clog metal gift'; 
let testAccounts = [
"0xfb99b7e329e6ec0a833b07b244d8bcb577084f9625e1d29140abf75d47c9ccbe",
"0x240aabcd97457f41916e2c48f7228fef87319719def8b15fb4e9a146150d4f84",
"0x56abfd4cdab4381c97f4da99b7a752b77b735b81efcfd9f9fa708756ee83a511",
"0xc160cab9ab1120252dd84501e705cb4ba524f5ade1dd9baff66d51cf79f4bf59",
"0x966e4eb918dd7d7f2c30bdac1dad2b6dbba0bbd199e7df9f539277f8f7d2df67",
"0xa9437e4a89c880eed5933a4f4e9f2d27870a7dbda1b53cd7368f73fe52ccc762",
"0x4dc0647382d3087c998660266c5682629c3ce52d7629ccc122168a9890799ba3",
"0x885e448a68cd343a49463c2ebbad42d0ebf092b3a54fc270c32902a51bddff34",
"0x325a0dfab24e6c356bcf97a7cecc44742d86e23bcea54b4e36c79c1e92831b25",
"0xdde1a1f9584c09bd36f7c7292d5015c7df01058efa3a3ea3e27ac7b66acc9ce9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
