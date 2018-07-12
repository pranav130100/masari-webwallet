let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl: "http://127.0.0.1:1984/",
	mainnetExplorerUrl: "https://msrchain.net/",
	testnetExplorerUrl: "http://explorer.recoal.org/",
	testnet: true,
	coinUnitPlaces: 12,
	txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
	txCoinbaseMinConfirms: 30, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
	coinSymbol: 'RECL',
	openAliasPrefix: "recl",
	coinName: 'ReCoal',
	coinUriPrefix: 'recoal:',
	addressPrefix: 0xd6,
	integratedAddressPrefix: 0x3dd5,
	addressPrefixTestnet: 0x4e56,
	integratedAddressPrefixTestnet: 0x4ad6,
	feePerKB: new JSBigInt('400000000'),//20^10 - for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	txChargeRatio: 0.5,
	defaultMixin: 6, // minimum mixin for hardfork v5
	txChargeAddress: '',
	idleTimeout: 30,
	idleWarningDuration: 20,
	maxBlockNumber: 500000000,
	avgBlockTime: 120,
	debugMode: false,
	subAddressPrefix: 0x7b54,
	subAddressPrefixTestnet: 0x48956,
};
