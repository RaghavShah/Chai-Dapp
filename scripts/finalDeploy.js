const hre = require("hardhat");

async function main() {
  const chai = await hre.ethers.getContractFactory("chai"); // creating instance for contract
  const contract = await chai.deploy(); // deploying the contract

  await contract.deployed();
  console.log("Address of Contract : ", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
