const hre = require("hardhat");

async function main() {
  const ContractName = await hre.ethers.getContractFactory("Lottery");
  const contract = await ContractName.deploy();

  await contract.deployed();

  console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
