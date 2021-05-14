export const RegisterContractAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'label',
        type: 'bytes32',
      },
      {
        indexed: false,
        name: 'subdomain',
        type: 'string',
      },
      {
        indexed: true,
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        name: 'expires',
        type: 'uint256',
      },
    ],
    name: 'NewRegistration',
    type: 'event',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'node',
        type: 'bytes32',
      },
    ],
    name: 'twitter',
    outputs: [
      {
        name: '',
        type: 'string',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];

export const eventLogs = [
  {
    indexed: true,
    name: 'label',
    type: 'bytes32',
  },
  {
    indexed: false,
    name: 'subdomain',
    type: 'string',
  },
  {
    indexed: true,
    name: 'owner',
    type: 'address',
  },
  {
    indexed: false,
    name: 'duration',
    type: 'uint256',
  },
];
