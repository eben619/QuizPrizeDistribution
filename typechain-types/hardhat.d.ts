/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "LinkTokenInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkTokenInterface__factory>;
    getContractFactory(
      name: "VRFConsumerBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFConsumerBase__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "QuizPrizeDistribution",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.QuizPrizeDistribution__factory>;

    getContractAt(
      name: "LinkTokenInterface",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkTokenInterface>;
    getContractAt(
      name: "VRFConsumerBase",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFConsumerBase>;
    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "QuizPrizeDistribution",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.QuizPrizeDistribution>;

    deployContract(
      name: "LinkTokenInterface",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.LinkTokenInterface>;
    deployContract(
      name: "VRFConsumerBase",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFConsumerBase>;
    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "QuizPrizeDistribution",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.QuizPrizeDistribution>;

    deployContract(
      name: "LinkTokenInterface",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.LinkTokenInterface>;
    deployContract(
      name: "VRFConsumerBase",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFConsumerBase>;
    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "QuizPrizeDistribution",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.QuizPrizeDistribution>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
