import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const NFT = await ethers.getContractFactory("CreatorPayoutNFT");
  const nft = await NFT.deploy();
  await nft.waitForDeployment();
  console.log("CreatorPayoutNFT deployed to:", await nft.getAddress());
}

main().catch(console.error);
