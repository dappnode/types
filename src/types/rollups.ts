// Optimism

export const executionClientsOptimism = Object.freeze([
  "op-geth.dnp.dappnode.eth",
  /*"op-erigon.dnp.dappnode.eth",*/
] as const);
export type ExecutionClientOptimism = (typeof executionClientsOptimism)[number];

export type OptimismNode = "op-node.dnp.dappnode.eth";
export const optimismNode: OptimismNode = "op-node.dnp.dappnode.eth";

export type OptimismL2Geth = "op-l2geth.dnp.dappnode.eth";
export const optimismL2Geth: OptimismL2Geth = "op-l2geth.dnp.dappnode.eth";

// TODO: Polygon
