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
export type SignerMainnet = (typeof signerMainnet)[number];
export const signerMainnet = Object.freeze([
  "web3signer.dnp.dappnode.eth",
] as const);
export type MevBoostMainnet = (typeof mevBoostMainnet)[number];
export const mevBoostMainnet = Object.freeze([
  "mev-boost.dnp.dappnode.eth",
] as const);

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
export type SignerPrater = (typeof signerPrater)[number];
export const signerPrater = Object.freeze([
  "web3signer-prater.dnp.dappnode.eth",
] as const);
export type MevBoostPrater = (typeof mevBoostPrater)[number];
export const mevBoostPrater = Object.freeze([
  "mev-boost-goerli.dnp.dappnode.eth",
] as const);

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
export type SignerGnosis = (typeof signerGnosis)[number];
export const signerGnosis = Object.freeze([
  "web3signer-gnosis.dnp.dappnode.eth",
] as const);
/**export type MevBoostGnosis = (typeof mevBoostGnosis)[number];
export const mevBoostGnosis = Object.freeze([
  "mev-boost-gnosis.dnp.dappnode.eth",
] as const);*/

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
