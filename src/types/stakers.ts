// NETWORKS
export const networks = Object.freeze(["mainnet", "prater", "gnosis"] as const);
export type Network = (typeof networks)[number];

// MAINNET
export type ConsensusClientMainnet = (typeof consensusClientsMainnet)[number];
export const consensusClientsMainnet = Object.freeze([
  "lodestar.dnp.dappnode.eth",
  "prysm.dnp.dappnode.eth",
  "lighthouse.dnp.dappnode.eth",
  "teku.dnp.dappnode.eth",
  "nimbus.dnp.dappnode.eth",
] as const);
export type ExecutionClientMainnet = (typeof executionClientsMainnet)[number];
export const executionClientsMainnet = Object.freeze([
  "geth.dnp.dappnode.eth",
  "besu.public.dappnode.eth",
  "erigon.dnp.dappnode.eth",
  "nethermind.public.dappnode.eth",
] as const);
export type SignerMainnet = "web3signer.dnp.dappnode.eth";
export const signerMainnet: SignerMainnet = "web3signer.dnp.dappnode.eth";
export type MevBoostMainnet = "mev-boost.dnp.dappnode.eth";
export const mevBoostMainnet: MevBoostMainnet = "mev-boost.dnp.dappnode.eth";

// PRATER
export type ConsensusClientPrater = (typeof consensusClientsPrater)[number];
export const consensusClientsPrater = Object.freeze([
  "prysm-prater.dnp.dappnode.eth",
  "lighthouse-prater.dnp.dappnode.eth",
  "teku-prater.dnp.dappnode.eth",
  "nimbus-prater.dnp.dappnode.eth",
  "lodestar-prater.dnp.dappnode.eth",
] as const);
export type ExecutionClientPrater = (typeof executionClientsPrater)[number];
export const executionClientsPrater = Object.freeze([
  "goerli-geth.dnp.dappnode.eth",
  "goerli-erigon.dnp.dappnode.eth",
  "goerli-nethermind.dnp.dappnode.eth",
  "goerli-besu.dnp.dappnode.eth",
] as const);
export type SignerPrater = "web3signer-prater.dnp.dappnode.eth";
export const signerPrater: SignerPrater = "web3signer-prater.dnp.dappnode.eth";
export type MevBoostPrater = "mev-boost-goerli.dnp.dappnode.eth";
export const mevBoostPrater: MevBoostPrater =
  "mev-boost-goerli.dnp.dappnode.eth";

// GNOSIS
export type ConsensusClientGnosis = (typeof consensusClientsGnosis)[number];
export const consensusClientsGnosis = Object.freeze([
  //"gnosis-beacon-chain-prysm.dnp.dappnode.eth", DEPRECATED
  "lighthouse-gnosis.dnp.dappnode.eth",
  "teku-gnosis.dnp.dappnode.eth",
  "lodestar-gnosis.dnp.dappnode.eth",
] as const);
export type ExecutionClientGnosis = (typeof executionClientsGnosis)[number];
export const executionClientsGnosis = Object.freeze([
  "nethermind-xdai.dnp.dappnode.eth",
] as const);
export type SignerGnosis = "web3signer-gnosis.dnp.dappnode.eth";
export const signerGnosis: SignerGnosis = "web3signer-gnosis.dnp.dappnode.eth";

// STAKERS
export const stakerPkgs = Object.freeze([
  ...executionClientsMainnet,
  ...consensusClientsMainnet,
  ...signerMainnet,
  ...mevBoostMainnet,
  ...executionClientsPrater,
  ...consensusClientsPrater,
  ...signerPrater,
  ...mevBoostPrater,
  ...executionClientsGnosis,
  ...consensusClientsGnosis,
  ...signerGnosis,
  //...mevBoostGnosis,
] as const);
