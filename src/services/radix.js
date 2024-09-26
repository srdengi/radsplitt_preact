import { RadixDappToolkit } from '@radixdlt/radix-dapp-toolkit'

const dAppId = 'account_tdx_e_128qn4ma5sf...'; // Your actual dApp ID

export const rdt = RadixDappToolkit({
  dAppDefinitionAddress: dAppId,
  networkId: 11, // or the appropriate network ID
  applicationName: 'Radsplit',
  applicationVersion: '1.0.0',
});

export const createGroup = async (groupName, members) => {
  try {
    const result = await rdt.sendTransaction({
      transactionManifest: `
        // Your Scrypto transaction manifest for creating a group
        // This is just a placeholder, you'll need to replace it with your actual manifest
        CALL_METHOD
          ComponentAddress("${dAppId}")
          "create_group"
          "${groupName}"
          ${JSON.stringify(members)};
      `,
      version: 1,
    });
    return result;
  } catch (error) {
    console.error('Error creating group:', error);
    throw error;
  }
};