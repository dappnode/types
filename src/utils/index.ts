import {
  containerCoreNamePrefix,
  containerNamePrefix,
} from "../params/index.js";
import { Architecture, Compose } from "../types/index.js";
import {
  ExecutionClientMainnet,
  ConsensusClientMainnet,
  ExecutionClientGnosis,
  ExecutionClientPrater,
  ConsensusClientPrater,
  ConsensusClientGnosis,
} from "../types/index.js"; 

/**
 * Returns the arch tag for the given architecture
 * @param arch Architecture in the format <os>/<arch>
 * @returns Arch tag in the format <os>-<arch>
 */
export const getArchTag = (arch: Architecture): string =>
  arch.replace(/\//g, "-");

/**
 * Returns the image path for the given container name, version and architecture
 * @param name Container name
 * @param version Container version
 * @param arch Container architecture in the format <os>/<arch>
 * @returns Image path in the format <name>_<version>_<os>-<arch>.txz
 */
export const getImagePath = (
  name: string,
  version: string,
  arch: Architecture
): string => `${name}_${version}_${getArchTag(arch)}.txz`;

/**
 * Returns the legacy image path for the given container name and version
 * @param name Container name
 * @param version Container version
 * @returns Legacy image path in the format <name>_<version>.tar.xz
 */
export const getLegacyImagePath = (name: string, version: string): string =>
  `${name}_${version}.tar.xz`;

/**
 * Returns a unique domain per container, considering multi-service packages
 * @param dnpName DAppNode package name
 * @param serviceName Service name
 * @returns Container domain in the format <service-name>.<dappnode-package-name> if service-name is not empty and different from dappnode-package-name, otherwise returns dappnode-package-name
 */
export const getContainerDomain = ({
  dnpName,
  serviceName,
}: {
  serviceName: string;
  dnpName: string;
}): string => {
  if (!serviceName || serviceName === dnpName) {
    return dnpName;
  } else {
    return [serviceName, dnpName].join(".");
  }
};

/**
 * Returns whether the given compose file is a mono-service compose file or not
 * @param compose Compose file
 * @returns True if the compose file is a mono-service compose file, false otherwise
 */
export function getIsMonoService(compose: Compose): boolean {
  return Object.keys(compose.services).length === 1;
}

/**
 * Returns the image tag for the given DAppNode package name, service name and version
 * @param dnpName DAppNode package name
 * @param serviceName Service name
 * @param version Container version
 * @returns Image tag in the format <container-domain>:<version>, where container-domain is the domain obtained with getContainerDomain
 * @throws Error if version is not provided
 * @throws Error if DAppNode package name is not provided
 * @throws Error if service name is not provided
 */
export const getImageTag = ({
  dnpName,
  serviceName,
  version,
}: {
  dnpName: string;
  serviceName: string;
  version: string;
}): string => {
  if (!version) throw new Error("Version is required");
  if (!dnpName) throw new Error("DAppNode package name is required");
  if (!serviceName) throw new Error("Service name is required");
  return [getContainerDomain({ dnpName, serviceName }), version].join(":");
};

/**
 * Returns the container name for the given DAppNode package name, service name and isCore flag
 * @param dnpName DAppNode package name
 * @param serviceName Service name
 * @param isCore Flag indicating whether the container is a core container or not
 * @returns Container name in the format <container-prefix>-<container-domain>, where container-prefix is the core or non-core prefix obtained from containerCoreNamePrefix and containerNamePrefix, respectively, and container-domain is the domain obtained with getContainerDomain
 */
export const getContainerName = ({
  dnpName,
  serviceName,
  isCore,
}: {
  dnpName: string;
  serviceName: string;
  isCore: boolean;
}): string =>
  // Note: _PREFIX variables already end with the character "-"
  [
    isCore ? containerCoreNamePrefix : containerNamePrefix,
    getContainerDomain({ dnpName, serviceName }),
  ].join("");


/**
 * Retrieves the URLs associated with all execution and consensus clients based on dappnode package names.
 * @returns An object containing the URLs for execution and consensus clients on mainnet, Prater, and Gnosis chains.
 * The dappnode package names are retrieved from their corresponding environment variables. Eg: _DAPPNODE_GLOBAL_EXECUTION_CLIENT_MAINNET. 
 * The URLs are returned as strings or undefined if no matching package name is found.
 */
export function getUrlFromDnpName(): {
  executionClientMainnetUrl: string | undefined,
  executionClientPraterUrl: string | undefined,
  executionClientGnosisUrl: string | undefined,
  consensusClientMainnetUrl: string | undefined,
  consensusClientPraterUrl: string | undefined,
  consensusClientGnosisUrl: string | undefined
} {
  const executionClientMainnet = process.env._DAPPNODE_GLOBAL_EXECUTION_CLIENT_MAINNET as ExecutionClientMainnet;
  const ConsensusClientMainnet = process.env._DAPPNODE_GLOBAL_CONSENSUS_CLIENT_MAINNET as ConsensusClientMainnet;
  const executionClientPrater = process.env._DAPPNODE_GLOBAL_EXECUTION_CLIENT_PRATER as ExecutionClientPrater;
  const ConsensusClientPrater = process.env._DAPPNODE_GLOBAL_CONSENSUS_CLIENT_PRATER as ConsensusClientPrater;
  const executionClientGnosis = process.env._DAPPNODE_GLOBAL_EXECUTION_CLIENT_GNOSIS as ExecutionClientGnosis;
  const ConsensusClientGnosis = process.env._DAPPNODE_GLOBAL_CONSENSUS_CLIENT_GNOSIS as ConsensusClientGnosis;

  let executionClientMainnetUrl: string | undefined,
    executionClientPraterUrl: string | undefined,
    executionClientGnosisUrl: string | undefined,
    consensusClientMainnetUrl: string | undefined,
    consensusClientPraterUrl: string | undefined,
    consensusClientGnosisUrl: string | undefined;

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
  switch (ConsensusClientMainnet) {
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
      executionClientPraterUrl = `http://goerli-besu.dnp.dappnode:8545`;
      break;
    case "goerli-nethermind.dnp.dappnode.eth":
      executionClientPraterUrl = `http://goerli-nethermind.dnp.dappnode:8545`;
      break;
    case "goerli-erigon.dnp.dappnode.eth":
      executionClientPraterUrl = `http://goerli-erigon.dappnode:8545`;
      break;
  }
  switch (ConsensusClientPrater) {
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
  switch (executionClientGnosis) {
    case "nethermind-xdai.dnp.dappnode.eth":
      executionClientGnosisUrl = `http://nethermind-xdai.dappnode:8545`;
      break;
  }
  switch (ConsensusClientGnosis) {
    case "lighthouse-gnosis.dnp.dappnode.eth":
      consensusClientGnosisUrl = `http://beacon-chain.gnosis-beacon-chain-prysm.dappnode:3500`;
      break;
    case "teku-gnosis.dnp.dappnode.eth":
      consensusClientGnosisUrl = `http://beacon-chain.teku-gnosis.dappnode:3500`;
      break;
    case "lodestar-gnosis.dnp.dappnode.eth":
      consensusClientGnosisUrl = `http://beacon-chain.lodestar.dappnode:3500`;
      break;
  }

  return {
    executionClientMainnetUrl,
    executionClientPraterUrl,
    executionClientGnosisUrl,
    consensusClientMainnetUrl,
    consensusClientPraterUrl,
    consensusClientGnosisUrl
  };
}
