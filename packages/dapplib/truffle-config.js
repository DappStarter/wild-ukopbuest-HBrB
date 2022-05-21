require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil foot find response screen exchange grace option army gesture'; 
let testAccounts = [
"0x2d4d27dc3b42c0cdc15f130b69f707e4dfba607f99d0e72c41a262e3c783b19b",
"0xc476220c00f762032db19af798ea083c17d420776a52434d3f4b5d7d5dc6f3b5",
"0x3a9588a0bc292d6c7ae45949b2a0adc10d282b5063a3f723241615e8402f4c1c",
"0xd9922163246f644b155a076ef77df9f5bfb58f6fe530c9ccdf743406c748c140",
"0x3d7e78f07ea55b5678f8a1854b4141ab7f57d29c75116e3b0ab1adcf98ef8de9",
"0x375b3be36b2f3b5d52cb8b1ea0838468f618fa5e18fa8902390c9e316df682af",
"0xb90c2c6e55966c4206f9a94f6c5020d0133b252d2637d0956601fb893d2f9b89",
"0xc9ec82bef829a0e70b52c276ac7f778d45e7b6fccb5ef2d19fa15a9a62559516",
"0x9c85888974ba1c8a604897cbc1ba83a87f4997cda990096b9d1918b94b4ce11d",
"0xd7f9ff4ef83caa58a050758d6732c4b33529d5090c672091c20a2cb383dad8a0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

