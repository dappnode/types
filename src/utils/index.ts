import {
  containerCoreNamePrefix,
  containerNamePrefix,
} from "../params/index.js";
import { Architecture } from "../types/index.js";

// Single arch images
export const getArchTag = (arch: Architecture): string =>
  arch.replace(/\//g, "-");
export const getImagePath = (
  name: string,
  version: string,
  arch: Architecture
): string => `${name}_${version}_${getArchTag(arch)}.txz`;
export const getLegacyImagePath = (name: string, version: string): string =>
  `${name}_${version}.tar.xz`;

/**
 * Get a unique domain per container, considering multi-service packages
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

export const getImageTag = ({
  dnpName,
  serviceName,
  version,
}: {
  dnpName: string;
  serviceName: string;
  version: string;
}): string => [getContainerDomain({ dnpName, serviceName }), version].join(":");

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
