import {
  ExecutionClientMainnet,
  ConsensusClientMainnet,
  ExecutionClientPrater,
  ConsensusClientPrater,
  ExecutionClientHolesky,
  ConsensusClientHolesky,
  ExecutionClientGnosis,
  ConsensusClientGnosis,
  ExecutionClientLukso,
  ConsensusClientLukso,
} from "../types/index.js";

/**
 * Retrieves the URLs of the JSON RPC APIs associated with all execution and consensus clients based on dappnode package names.
 * @returns An object containing the URLs for execution and consensus clients on mainnet, Prater, and Gnosis chains.
 * The dappnode package names are retrieved from their corresponding environment variables. Eg: _DAPPNODE_GLOBAL_EXECUTION_CLIENT_MAINNET.
 * The URLs are returned as strings or undefined if no matching package name is found. Eg: "http://goerli-geth.dappnode:8545"
 */
export function getUrlFromDnpName(): {
  executionClientMainnetUrl: string | undefined;
  executionClientPraterUrl: string | undefined;
  executionClientHoleskyUrl: string | undefined;
  executionClientGnosisUrl: string | undefined;
  executionClientLuksoUrl: string | undefined;
  consensusClientMainnetUrl: string | undefined;
  consensusClientPraterUrl: string | undefined;
  consensusClientHoleskyUrl: string | undefined;
  consensusClientGnosisUrl: string | undefined;
  consensusClientLuksoUrl: string | undefined;
} {
  const executionClientMainnet = process.env
    ._DAPPNODE_GLOBAL_EXECUTION_CLIENT_MAINNET as ExecutionClientMainnet;
  const consensusClientMainnet = process.env
    ._DAPPNODE_GLOBAL_CONSENSUS_CLIENT_MAINNET as ConsensusClientMainnet;
  const executionClientPrater = process.env
    ._DAPPNODE_GLOBAL_EXECUTION_CLIENT_PRATER as ExecutionClientPrater;
  const consensusClientPrater = process.env
    ._DAPPNODE_GLOBAL_CONSENSUS_CLIENT_PRATER as ConsensusClientPrater;
  const executionClientHolesky = process.env
    ._DAPPNODE_GLOBAL_EXECUTION_CLIENT_HOLESKY as ExecutionClientHolesky;
  const consensusClientHolesky = process.env
    ._DAPPNODE_GLOBAL_CONSENSUS_CLIENT_HOLESKY as ConsensusClientHolesky;
  const executionClientGnosis = process.env
    ._DAPPNODE_GLOBAL_EXECUTION_CLIENT_GNOSIS as ExecutionClientGnosis;
  const consensusClientGnosis = process.env
    ._DAPPNODE_GLOBAL_CONSENSUS_CLIENT_GNOSIS as ConsensusClientGnosis;
  const executionClientLukso = process.env
    ._DAPPNODE_GLOBAL_EXECUTION_CLIENT_LUKSO as ExecutionClientLukso;
  const consensusClientLukso = process.env
    ._DAPPNODE_GLOBAL_CONSENSUS_CLIENT_LUKSO as ConsensusClientLukso;

  let executionClientMainnetUrl: string | undefined,
    executionClientPraterUrl: string | undefined,
    executionClientHoleskyUrl: string | undefined,
    executionClientGnosisUrl: string | undefined,
    executionClientLuksoUrl: string | undefined,
    consensusClientMainnetUrl: string | undefined,
    consensusClientPraterUrl: string | undefined,
    consensusClientHoleskyUrl: string | undefined,
    consensusClientGnosisUrl: string | undefined,
    consensusClientLuksoUrl: string | undefined;

  switch (executionClientMainnet) {
    case "geth.dnp.dappnode.eth":
      executionClientMainnetUrl = `http://geth.dappnode:8545`;
      break;
    case "besu.public.dappnode.eth":
      executionClientMainnetUrl = `http://besu.public.dappnode:8545`;
      break;
    case "nethermind.public.dappnode.eth":
      executionClientMainnetUrl = `http://nethermind.public.dappnode:8545`;
      break;
    case "erigon.dnp.dappnode.eth":
      executionClientMainnetUrl = `http://erigon.dappnode:8545`;
      break;
  }
  switch (consensusClientMainnet) {
    case "prysm.dnp.dappnode.eth":
      consensusClientMainnetUrl = `http://beacon-chain.prysm.dappnode:3500`;
      break;
    case "lighthouse.dnp.dappnode.eth":
      consensusClientMainnetUrl = `http://beacon-chain.lighthouse.dappnode:3500`;
      break;
    case "teku.dnp.dappnode.eth":
      consensusClientMainnetUrl = `http://beacon-chain.teku.dappnode:3500`;
      break;
    case "nimbus.dnp.dappnode.eth":
      consensusClientMainnetUrl = `http://beacon-validator.nimbus.dappnode:4500`;
      break;
    case "lodestar.dnp.dappnode.eth":
      consensusClientMainnetUrl = `http://beacon-chain.lodestar.dappnode:3500`;
      break;
  }
  switch (executionClientPrater) {
    case "goerli-geth.dnp.dappnode.eth":
      executionClientPraterUrl = `http://goerli-geth.dappnode:8545`;
      break;
    case "goerli-besu.dnp.dappnode.eth":
      executionClientPraterUrl = `http://goerli-besu.dappnode:8545`;
      break;
    case "goerli-nethermind.dnp.dappnode.eth":
      executionClientPraterUrl = `http://goerli-nethermind.dappnode:8545`;
      break;
    case "goerli-erigon.dnp.dappnode.eth":
      executionClientPraterUrl = `http://goerli-erigon.dappnode:8545`;
      break;
  }
  switch (consensusClientPrater) {
    case "prysm-prater.dnp.dappnode.eth":
      consensusClientPraterUrl = `http://beacon-chain.prysm-prater.dappnode:3500`;
      break;
    case "lighthouse-prater.dnp.dappnode.eth":
      consensusClientPraterUrl = `http://beacon-chain.lighthouse-prater.dappnode:3500`;
      break;
    case "teku-prater.dnp.dappnode.eth":
      consensusClientPraterUrl = `http://beacon-chain.teku-prater.dappnode:3500`;
      break;
    case "nimbus-prater.dnp.dappnode.eth":
      consensusClientPraterUrl = `http://beacon-validator.nimbus-prater.dappnode:4500`;
      break;
    case "lodestar-prater.dnp.dappnode.eth":
      consensusClientPraterUrl = `http://beacon-chain.lodestar-prater.dappnode:3500`;
      break;
  }
  switch (executionClientHolesky) {
    case "holesky-geth.dnp.dappnode.eth":
      executionClientHoleskyUrl = `http://holesky-geth.dappnode:8545`;
      break;
    case "holesky-besu.dnp.dappnode.eth":
      executionClientHoleskyUrl = `http://holesky-besu.dappnode:8545`;
      break;
    case "holesky-nethermind.dnp.dappnode.eth":
      executionClientHoleskyUrl = `http://holesky-nethermind.dappnode:8545`;
      break;
    case "holesky-erigon.dnp.dappnode.eth":
      executionClientHoleskyUrl = `http://holesky-erigon.dappnode:8545`;
      break;
  }
  switch (consensusClientHolesky) {
    case "prysm-holesky.dnp.dappnode.eth":
      consensusClientHoleskyUrl = `http://beacon-chain.prysm-holesky.dappnode:3500`;
      break;
    case "lighthouse-holesky.dnp.dappnode.eth":
      consensusClientHoleskyUrl = `http://beacon-chain.lighthouse-holesky.dappnode:3500`;
      break;
    case "teku-holesky.dnp.dappnode.eth":
      consensusClientHoleskyUrl = `http://beacon-chain.teku-holesky.dappnode:3500`;
      break;
    case "nimbus-holesky.dnp.dappnode.eth":
      consensusClientHoleskyUrl = `http://beacon-validator.nimbus-holesky.dappnode:4500`;
      break;
    case "lodestar-holesky.dnp.dappnode.eth":
      consensusClientHoleskyUrl = `http://beacon-chain.lodestar-holesky.dappnode:3500`;
      break;
  }
  switch (executionClientGnosis) {
    case "nethermind-xdai.dnp.dappnode.eth":
      executionClientGnosisUrl = `http://nethermind-xdai.dappnode:8545`;
      break;
  }
  switch (consensusClientGnosis) {
    case "lighthouse-gnosis.dnp.dappnode.eth":
      consensusClientGnosisUrl = `http://beacon-chain.lighthouse-gnosis.dappnode:3500`;
      break;
    case "teku-gnosis.dnp.dappnode.eth":
      consensusClientGnosisUrl = `http://beacon-chain.teku-gnosis.dappnode:3500`;
      break;
    case "lodestar-gnosis.dnp.dappnode.eth":
      consensusClientGnosisUrl = `http://beacon-chain.lodestar-gnosis.dappnode:3500`;
      break;
  }

  switch (executionClientLukso) {
    case "lukso-geth.dnp.dappnode.eth":
      executionClientLuksoUrl = `http://lukso-geth.dappnode:8545`;
      break;
    /*case "lukso-erigon.dnp.dappnode.eth":
      executionClientLuksoUrl = `http://lukso-erigon.dappnode:8545`;
      break;*/
  }
  switch (consensusClientLukso) {
    case "prysm-lukso.dnp.dappnode.eth":
      consensusClientLuksoUrl = `http://beacon-chain.prysm-lukso.dappnode:3500`;
      break;
    case "teku-lukso.dnp.dappnode.eth":
      consensusClientLuksoUrl = `http://beacon-chain.teku-lukso.dappnode:3500`;
      break;
    /*case "lighthouse-lukso.dnp.dappnode.eth":
      consensusClientLuksoUrl = `http://beacon-chain.lighthouse-lukso.dappnode:3500`;
      break;*/
  }

  return {
    executionClientMainnetUrl,
    executionClientPraterUrl,
    executionClientHoleskyUrl,
    executionClientGnosisUrl,
    executionClientLuksoUrl,
    consensusClientMainnetUrl,
    consensusClientPraterUrl,
    consensusClientHoleskyUrl,
    consensusClientGnosisUrl,
    consensusClientLuksoUrl,
  };
}
