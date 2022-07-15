import contracts from "../contracts";
import { ethers } from "ethers"

function useContract(contractName) {
  const tempProviderr = new ethers.providers.Web3Provider(window.ethereum);
  const tempSigner = tempProviderr.getSigner();

  const contract = new ethers.Contract(contracts[contractName].address, contracts[contractName].abi, tempSigner);

  return contract;
}

export default useContract;