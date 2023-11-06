import { expect } from "chai";
import { getJsonRpcApiFromDnpName } from "../src/utils/index.js";

describe('DNP Name to URL Conversion', function () {
    const testCases = [
        // Mainnet Execution Clients
        { dnpName: "geth.dnp.dappnode.eth", expectedUrl: "http://geth.dappnode:8545" },
        { dnpName: "besu.public.dappnode.eth", expectedUrl: "http://besu.public.dappnode:8545" },
        { dnpName: "nethermind.public.dappnode.eth", expectedUrl: "http://nethermind.public.dappnode:8545" },
        { dnpName: "erigon.dnp.dappnode.eth", expectedUrl: "http://erigon.dappnode:8545" },

        // Mainnet Consensus Clients
        { dnpName: "prysm.dnp.dappnode.eth", expectedUrl: "http://beacon-chain.prysm.dappnode:3500" },
        { dnpName: "lighthouse.dnp.dappnode.eth", expectedUrl: "http://beacon-chain.lighthouse.dappnode:3500" },
        { dnpName: "teku.dnp.dappnode.eth", expectedUrl: "http://beacon-chain.teku.dappnode:3500" },
        { dnpName: "nimbus.dnp.dappnode.eth", expectedUrl: "http://beacon-validator.nimbus.dappnode:4500" },
        { dnpName: "lodestar.dnp.dappnode.eth", expectedUrl: "http://beacon-chain.lodestar.dappnode:3500" },

        // Prater Testnet Execution Clients
        { dnpName: "goerli-geth.dnp.dappnode.eth", expectedUrl: "http://goerli-geth.dappnode:8545" },
        { dnpName: "goerli-besu.dnp.dappnode.eth", expectedUrl: "http://goerli-besu.dappnode:8545" },
        { dnpName: "goerli-nethermind.dnp.dappnode.eth", expectedUrl: "http://goerli-nethermind.dappnode:8545" },
        { dnpName: "goerli-erigon.dnp.dappnode.eth", expectedUrl: "http://goerli-erigon.dappnode:8545" },

        // Prater Testnet Consensus Clients
        { dnpName: "prysm-prater.dnp.dappnode.eth", expectedUrl: "http://beacon-chain.prysm-prater.dappnode:3500" },
        { dnpName: "lighthouse-prater.dnp.dappnode.eth", expectedUrl: "http://beacon-chain.lighthouse-prater.dappnode:3500" },
        { dnpName: "teku-prater.dnp.dappnode.eth", expectedUrl: "http://beacon-chain.teku-prater.dappnode:3500" },
        { dnpName: "nimbus-prater.dnp.dappnode.eth", expectedUrl: "http://beacon-validator.nimbus-prater.dappnode:4500" },
        { dnpName: "lodestar-prater.dnp.dappnode.eth", expectedUrl: "http://beacon-chain.lodestar-prater.dappnode:3500" },

        // Gnosis Chain Execution Clients
        { dnpName: "nethermind-xdai.dnp.dappnode.eth", expectedUrl: "http://nethermind-xdai.dappnode:8545" },

        // Gnosis Chain Consensus Clients
        { dnpName: "lighthouse-gnosis.dnp.dappnode.eth", expectedUrl: "http://beacon-chain.lighthouse-gnosis.dappnode:3500" },
        { dnpName: "teku-gnosis.dnp.dappnode.eth", expectedUrl: "http://beacon-chain.teku-gnosis.dappnode:3500" },
        { dnpName: "lodestar-gnosis.dnp.dappnode.eth", expectedUrl: "http://beacon-chain.lodestar-gnosis.dappnode:3500" },

        // Holesky Testnet Execution Clients
        { dnpName: "holesky-geth.dnp.dappnode.eth", expectedUrl: "http://holesky-geth.dappnode:8545" },
        { dnpName: "holesky-besu.dnp.dappnode.eth", expectedUrl: "http://holesky-besu.dappnode:8545" },
        { dnpName: "holesky-nethermind.dnp.dappnode.eth", expectedUrl: "http://holesky-nethermind.dappnode:8545" },
        { dnpName: "holesky-erigon.dnp.dappnode.eth", expectedUrl: "http://holesky-erigon.dappnode:8545" },

        // Holesky Testnet Consensus Clients
        { dnpName: "prysm-holesky.dnp.dappnode.eth", expectedUrl: "http://beacon-chain.prysm-holesky.dappnode:3500" },
        { dnpName: "lighthouse-holesky.dnp.dappnode.eth", expectedUrl: "http://beacon-chain.lighthouse-holesky.dappnode:3500" },
        { dnpName: "teku-holesky.dnp.dappnode.eth", expectedUrl: "http://beacon-chain.teku-holesky.dappnode:3500" },
        { dnpName: "nimbus-holesky.dnp.dappnode.eth", expectedUrl: "http://beacon-validator.nimbus-holesky.dappnode:4500" },
        { dnpName: "lodestar-holesky.dnp.dappnode.eth", expectedUrl: "http://beacon-chain.lodestar-holesky.dappnode:3500" },

        // Lukso  Execution Clients
        { dnpName: "lukso-geth.dnp.dappnode.eth", expectedUrl: "http://lukso-geth.dappnode:8545" },
    ];

    testCases.forEach(({ dnpName, expectedUrl }) => {
        it(`should return the correct URL for ${dnpName}`, function () {
            expect(getJsonRpcApiFromDnpName(dnpName)).to.equal(expectedUrl);
        });
    });

    // Add a test case for invalid DNP name
    it('should throw an error for an invalid DNP name', function () {
        expect(() => getJsonRpcApiFromDnpName("invalid.dnp.name")).to.throw("Invalid DNP name format.");
    });
});