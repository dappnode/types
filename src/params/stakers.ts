// MAINNET
export const consensusClientsMainnet = [
  "lodestar.dnp.dappnode.eth",
  "prysm.dnp.dappnode.eth",
  "lighthouse.dnp.dappnode.eth",
  "teku.dnp.dappnode.eth",
  "nimbus.dnp.dappnode.eth",
  "lodestar.dnp.dappnode.eth",
  "",
] as const;
export const executionClientsMainnet = [
  "geth.dnp.dappnode.eth",
  "besu.public.dappnode.eth",
  "erigon.dnp.dappnode.eth",
  "nethermind.public.dappnode.eth",
  "",
] as const;
export const signerMainnet = ["web3signer.dnp.dappnode.eth", ""] as const;
export const mevBoostMainnet = ["mev-boost.dnp.dappnode.eth", ""] as const;

// GNOSIS
export const consensusClientsGnosis = [
  "gnosis-beacon-chain-prysm.dnp.dappnode.eth",
  "lighthouse-gnosis.dnp.dappnode.eth",
  "teku-gnosis.dnp.dappnode.eth",
  "nimbus-gnosis.dnp.dappnode.eth",
  "lodestar-gnosis.dnp.dappnode.eth",
  "",
] as const;
export const executionClientsGnosis = [
  "nethermind-xdai.dnp.dappnode.eth",
  "",
] as const;
export const signerGnosis = ["web3signer-Gnosis.dnp.dappnode.eth", ""] as const;
export const mevBoostGnosis = [
  "mev-boost-gnosis.dnp.dappnode.eth",
  "",
] as const;

// PRATER
export const consensusClientsPrater = [
  "prysm-prater.dnp.dappnode.eth",
  "lighthouse-prater.dnp.dappnode.eth",
  "teku-prater.dnp.dappnode.eth",
  "nimbus-prater.dnp.dappnode.eth",
  "lodestar-prater.dnp.dappnode.eth",
  "",
] as const;
export const executionClientsPrater = [
  "goerli-geth.dnp.dappnode.eth",
  "goerli-erigon.dnp.dappnode.eth",
  "goerli-nethermind.dnp.dappnode.eth",
  "goerli-besu.dnp.dappnode.eth",
  "",
] as const;
export const signerPrater = ["web3signer-prater.dnp.dappnode.eth", ""] as const;
export const mevBoostPrater = [
  "mev-boost-goerli.dnp.dappnode.eth",
  "",
] as const;

export const stakerPkgs = [
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
  ...mevBoostGnosis,
] as const;
