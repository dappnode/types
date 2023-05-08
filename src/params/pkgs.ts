export const containerNamePrefix = "DAppNodePackage-" as const;
export const containerCoreNamePrefix = "DAppNodeCore-" as const;
export const containerToolNamePrefix = "DAppNodeTool-" as const;

// Arch
export const architectures = ["linux/amd64", "linux/arm64"] as const;
export const defaultArch = "linux/amd64" as const;

// Driver
export const chainDriversTypes = [
  "bitcoin",
  "ethereum",
  "ethereum-beacon-chain",
  "ethereum2-beacon-chain-prysm",
  "monero",
] as const;
