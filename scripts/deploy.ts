import { ethers } from "hardhat";

async function main() {

  const QuizPrizeDistribution = await ethers.deployContract("QuizPrizeDistribution");

  await QuizPrizeDistribution.waitForDeployment();

  console.log("QuizPrizeDistribution deployed to:", QuizPrizeDistribution.target);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
