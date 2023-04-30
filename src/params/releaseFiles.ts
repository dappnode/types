import { FileFormat } from "../types/index.js";

/**
 * Plain text file with should contain the IPFS hash of the release
 * Necessary for the installer script to fetch the latest content hash
 * of the eth clients. The resulting hashes are used by the DAPPMANAGER
 * to install an eth client when the user does not want to use a remote node
 *
 * /ipfs/QmNqDvqAyy3pN3PvymB6chM7S1FgYyive8LosVKUuaDdfd
 */
export const contentHashFile = "content-hash";

export const releaseFiles = {
  manifest: {
    regex: /dappnode_package.*\.(json|yaml|yml)$/,
    format: FileFormat.YAML,
    maxSize: 100e3, // Limit size to ~100KB
    required: true as const,
    multiple: false as const,
  },
  compose: {
    regex: /compose.*\.yml$/,
    format: FileFormat.YAML,
    maxSize: 10e3, // Limit size to ~10KB
    required: true as const,
    multiple: false as const,
  },
  signature: {
    regex: /^signature\.json$/,
    format: FileFormat.JSON,
    maxSize: 10e3, // Limit size to ~10KB
    required: false as const,
    multiple: false as const,
  },
  avatar: {
    regex: /avatar.*\.png$/,
    format: null,
    maxSize: 100e3,
    required: true as const,
    multiple: false as const,
  },
  setupWizard: {
    regex: /setup-wizard\..*(json|yaml|yml)$/,
    format: FileFormat.YAML,
    maxSize: 100e3,
    required: false as const,
    multiple: false as const,
  },
  setupSchema: {
    regex: /setup\..*\.json$/,
    format: FileFormat.JSON,
    maxSize: 10e3,
    required: false as const,
    multiple: false as const,
  },
  setupTarget: {
    regex: /setup-target\..*json$/,
    format: FileFormat.JSON,
    maxSize: 10e3,
    required: false as const,
    multiple: false as const,
  },
  setupUiJson: {
    regex: /setup-ui\..*json$/,
    format: FileFormat.JSON,
    maxSize: 10e3,
    required: false as const,
    multiple: false as const,
  },
  disclaimer: {
    regex: /disclaimer\.md$/i,
    format: FileFormat.TEXT,
    maxSize: 100e3,
    required: false as const,
    multiple: false as const,
  },
  gettingStarted: {
    regex: /getting.*started\.md$/i,
    format: FileFormat.TEXT,
    maxSize: 100e3,
    required: false as const,
    multiple: false as const,
  },
  prometheusTargets: {
    regex: /.*prometheus-targets.(json|yaml|yml)$/,
    format: FileFormat.YAML,
    maxSize: 10e3,
    required: false as const,
    multiple: false as const,
  },
  grafanaDashboards: {
    regex: /.*grafana-dashboard.json$/,
    format: FileFormat.JSON,
    maxSize: 10e6, // ~ 10MB
    required: false as const,
    multiple: true as const,
  },
};

export const releaseFilesToDownload = {
  manifest: releaseFiles.manifest,
  compose: releaseFiles.compose,
  signature: releaseFiles.signature,
  disclaimer: releaseFiles.disclaimer,
  gettingStarted: releaseFiles.gettingStarted,
  prometheusTargets: releaseFiles.prometheusTargets,
  grafanaDashboards: releaseFiles.grafanaDashboards,
};

export const releaseFilesDefaultNames: {
  [P in keyof typeof releaseFiles]: string;
} = {
  manifest: "dappnode_package.json",
  compose: "docker-compose.yml",
  avatar: "avatar.png",
  signature: "signature.json",
  setupWizard: "setup-wizard.json",
  setupSchema: "setup.schema.json",
  setupTarget: "setup-target.json",
  setupUiJson: "setup-ui.json",
  disclaimer: "disclaimer.md",
  gettingStarted: "getting-started.md",
  grafanaDashboards: "grafana-dashboard.json",
  prometheusTargets: "prometheus-targets.json",
};
