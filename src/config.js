export const randomA = '0x25A06D4e1f804Ce62Cf11b091180a5C84980d93a'


export const ShareMinterAddress = '0xe89caA7B7E4CD6CDD6a0bd33b3b4Eec7068a8f85'

export const ShareMinterABI=
    [
        {
          "inputs": [
            {
              "internalType": "contract IHEX",
              "name": "_hex",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint40",
              "name": "stakeId",
              "type": "uint40"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "caller",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "contract MinterReceiver",
              "name": "receiver",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint72",
              "name": "hearts",
              "type": "uint72"
            }
          ],
          "name": "MintEarnings",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint40",
              "name": "stakeId",
              "type": "uint40"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "minter",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "contract MinterReceiver",
              "name": "receiver",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "data0",
              "type": "uint256"
            }
          ],
          "name": "MintShares",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "minter",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "heartsWithdrawn",
              "type": "uint256"
            }
          ],
          "name": "MinterWithdraw",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "hexContract",
          "outputs": [
            {
              "internalType": "contract IHEX",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "stakeIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint40",
              "name": "stakeId",
              "type": "uint40"
            }
          ],
          "name": "mintEarnings",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint16",
              "name": "shareRatePremium",
              "type": "uint16"
            },
            {
              "internalType": "contract MinterReceiver",
              "name": "receiver",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "supplier",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "newStakedHearts",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "newStakedDays",
              "type": "uint256"
            }
          ],
          "name": "mintShares",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "minterHeartsOwed",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "minterWithdraw",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint40",
              "name": "",
              "type": "uint40"
            }
          ],
          "name": "stakes",
          "outputs": [
            {
              "internalType": "uint16",
              "name": "shareRatePremium",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "lockedDay",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "stakedDays",
              "type": "uint16"
            },
            {
              "internalType": "address",
              "name": "minter",
              "type": "address"
            },
            {
              "internalType": "contract MinterReceiver",
              "name": "receiver",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ] 