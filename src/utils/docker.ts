import {
  containerCoreNamePrefix,
  containerNamePrefix,
} from "../params/index.js";
import { Architecture, Compose } from "../types/index.js";

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
 * @param serviceName Service name (optional)
 * @returns Container domain in the format <service-name>.<dappnode-package-name> if service-name is not empty and different from dappnode-package-name, otherwise returns dappnode-package-name
 */
export const getContainerDomain = ({
  dnpName,
  serviceName,
}: {
  serviceName?: string;
  dnpName: string;
}): string => {
  return (!serviceName || serviceName === dnpName) ? dnpName : `${serviceName}.${dnpName}`;
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
