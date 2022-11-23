web3 = new Web3(ethereum)
var tokenAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "imoveis",
      "outputs": [
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "linkVideo",
          "type": "string"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "ruaNumero",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "complementoBairro",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "cidadeEstado",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "pais",
              "type": "string"
            }
          ],
          "internalType": "struct TokenHouse.Endereco",
          "name": "endereco",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "quartos",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "banheiros",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "areaConstruida",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "areaTotal",
              "type": "string"
            }
          ],
          "internalType": "struct TokenHouse.Infos",
          "name": "infos",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_ruaNumero",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_complementoBairro",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_cidadeEstado",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_pais",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_linkVideo",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_quartos",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_banheiros",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_areaConstruida",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_areaTotal",
          "type": "string"
        }
      ],
      "name": "registrarImovel",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_ruaNumero",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_complementoBairro",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_cidadeEstado",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_pais",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_linkVideo",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_quartos",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_banheiros",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_areaConstruida",
          "type": "string"
        }
      ],
      "name": "metadata",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function",
      "constant": true
    }
  ];
var tokenEndereco = "0x1b937A7846008EcE18DCE8e918DC02A9E4F32712";
let tokenContrato = new web3.eth.Contract(tokenAbi, tokenEndereco);


var connectWalletBtn = document.getElementById("connectWalletBtn");
var tokenAddress = document.getElementById("tokenAdressSpan");
tokenAddress.innerHTML = `Endereço do Token: ${tokenEndereco}`;
var inputRua = document.getElementById("rua");
var inputNumero = document.getElementById("numero");
var inputComplemento = document.getElementById("complemento");
var inputBairro = document.getElementById("bairro");
var inputCidade = document.getElementById("cidade");
var inputEstado = document.getElementById("estado");
var inputPais = document.getElementById("pais");
var inputYoutube = document.getElementById("youtube")
var inputQuartos = document.getElementById("quartos")
var inputBanheiros = document.getElementById("banheiros")
var inputArea = document.getElementById("areaTotal")
var registrarBtn = document.getElementById("registerHouseBtn")

async function connectWallet(){
    if(ethereum){
        try{
            let accounts = await ethereum.request({method: "eth_requestAccounts"})
            return accounts[0]
        }catch(error){
            console.log(error)
        }
    }else{
        alert("Please Install Metamask!")
    }
}
connectWalletBtn.addEventListener("click",()=>{
    connectWallet().then((call)=>{
        alert(call)
    }).catch((error)=>{})
})

async function registrarImovel (_inputRua, _inputNumero, _inputComplemento, _inputBairro, _inputCidade, _inputEstado, _inputPais, _inputYoutube, _inputQuartos, _inputBanheiros, _inputArea) {
    if(ethereum) {
        try{
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = await accounts[0].toString().toLowerCase();
            let owner = await tokenContrato.methods.owner().call();
            owner = owner.toString().toLowerCase();
            let value = 0;
            if(account != owner)
            {
                value = 5*10**15;
            }
            
            let ruaNumero = _inputRua + ", numero " + _inputNumero;
            let complementoBairro = _inputComplemento + ", bairro " + _inputBairro;
            let cidadeEstado = _inputCidade + " - " + _inputEstado;
            let call = await tokenContrato.methods.registrarImovel(ruaNumero.toString(), complementoBairro.toString(), cidadeEstado.toString(), _inputPais, _inputYoutube, _inputQuartos, _inputBanheiros, _inputArea, _inputArea).send({from:account, value:value});
            return call;

            
        } catch(err){
            alert("Error!")
            console.log(err);
        }
    }else {
        alert ("Carteira não instalada.")
    }

}

registrarBtn.addEventListener('click', () => {
    registrarImovel(inputRua.value.toString(), inputNumero.value.toString(), inputComplemento.value.toString(), inputBairro.value.toString(), inputCidade.value.toString(),inputEstado.value.toString(),inputPais.value.toString(), inputYoutube.value.toString(), inputQuartos.value.toString(), inputBanheiros.value.toString(), inputArea.value.toString(), inputArea.value.toString()).then((response) => {
    }).catch((err) => {
         console.log(err);
     });
    }
)