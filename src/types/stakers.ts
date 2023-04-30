// STAKERS

import {
  consensusClientsGnosis,
  consensusClientsMainnet,
  consensusClientsPrater,
  executionClientsGnosis,
  executionClientsMainnet,
  executionClientsPrater,
  mevBoostGnosis,
  mevBoostMainnet,
  mevBoostPrater,
  signerGnosis,
  signerMainnet,
  signerPrater,
} from "../params/index.js";

export type Network = "mainnet" | "prater" | "gnosis";

// MAINNET
export type ConsensusClientMainnet = (typeof consensusClientsMainnet)[number];
export type ExecutionClientMainnet = (typeof executionClientsMainnet)[number];
export type SignerMainnet = (typeof signerMainnet)[number];
export type MevBoostMainnet = (typeof mevBoostMainnet)[number];

// PRATER
export type ConsensusClientPrater = (typeof consensusClientsPrater)[number];
export type ExecutionClientPrater = (typeof executionClientsPrater)[number];
export type SignerPrater = (typeof signerPrater)[number];
export type MevBoostPrater = (typeof mevBoostPrater)[number];

// GNOSIS
export type ConsensusClientGnosis = (typeof consensusClientsGnosis)[number];
export type ExecutionClientGnosis = (typeof executionClientsGnosis)[number];
export type SignerGnosis = (typeof signerGnosis)[number];
export type MevBoostGnosis = (typeof mevBoostGnosis)[number];
