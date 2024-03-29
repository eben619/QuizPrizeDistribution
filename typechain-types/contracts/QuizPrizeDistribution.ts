/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface QuizPrizeDistributionInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "claimPrize"
      | "distributePrize"
      | "distributionTriggered"
      | "fee"
      | "keyHash"
      | "owner"
      | "participateInQuiz"
      | "questionCount"
      | "questionRandomNumbers"
      | "quizCount"
      | "rawFulfillRandomness"
      | "tokenContract"
      | "totalPrize"
      | "userCompletionCount"
      | "userPrizes"
      | "userQuizParticipation"
      | "userQuizProgress"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DistributionTriggered"
      | "PrizeDistributed"
      | "PrizeDistributionCompleted"
      | "PrizeDistributionStarted"
      | "QuizCompleted"
      | "RandomNumberGenerated"
      | "TokensTransferred"
      | "UserRegistered"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "claimPrize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distributePrize",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "distributionTriggered",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(functionFragment: "keyHash", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "participateInQuiz",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "questionCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "questionRandomNumbers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "quizCount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomness",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalPrize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userCompletionCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userPrizes",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "userQuizParticipation",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "userQuizProgress",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "claimPrize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "distributePrize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributionTriggered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "keyHash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "participateInQuiz",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "questionCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "questionRandomNumbers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "quizCount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomness",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "totalPrize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userCompletionCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userPrizes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userQuizParticipation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userQuizProgress",
    data: BytesLike
  ): Result;
}

export namespace DistributionTriggeredEvent {
  export type InputTuple = [userCompletionCount: BigNumberish];
  export type OutputTuple = [userCompletionCount: bigint];
  export interface OutputObject {
    userCompletionCount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PrizeDistributedEvent {
  export type InputTuple = [user: AddressLike, amount: BigNumberish];
  export type OutputTuple = [user: string, amount: bigint];
  export interface OutputObject {
    user: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PrizeDistributionCompletedEvent {
  export type InputTuple = [quizId: BigNumberish];
  export type OutputTuple = [quizId: bigint];
  export interface OutputObject {
    quizId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PrizeDistributionStartedEvent {
  export type InputTuple = [quizId: BigNumberish, totalPrize: BigNumberish];
  export type OutputTuple = [quizId: bigint, totalPrize: bigint];
  export interface OutputObject {
    quizId: bigint;
    totalPrize: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace QuizCompletedEvent {
  export type InputTuple = [user: AddressLike];
  export type OutputTuple = [user: string];
  export interface OutputObject {
    user: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RandomNumberGeneratedEvent {
  export type InputTuple = [quizId: BigNumberish, randomNumber: BigNumberish];
  export type OutputTuple = [quizId: bigint, randomNumber: bigint];
  export interface OutputObject {
    quizId: bigint;
    randomNumber: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokensTransferredEvent {
  export type InputTuple = [user: AddressLike, amount: BigNumberish];
  export type OutputTuple = [user: string, amount: bigint];
  export interface OutputObject {
    user: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UserRegisteredEvent {
  export type InputTuple = [user: AddressLike];
  export type OutputTuple = [user: string];
  export interface OutputObject {
    user: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface QuizPrizeDistribution extends BaseContract {
  connect(runner?: ContractRunner | null): QuizPrizeDistribution;
  waitForDeployment(): Promise<this>;

  interface: QuizPrizeDistributionInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  claimPrize: TypedContractMethod<[], [void], "nonpayable">;

  distributePrize: TypedContractMethod<
    [_quizId: BigNumberish, _randomNumber: BigNumberish],
    [void],
    "nonpayable"
  >;

  distributionTriggered: TypedContractMethod<[], [boolean], "view">;

  fee: TypedContractMethod<[], [bigint], "view">;

  keyHash: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  participateInQuiz: TypedContractMethod<
    [_quizId: BigNumberish],
    [void],
    "nonpayable"
  >;

  questionCount: TypedContractMethod<[], [bigint], "view">;

  questionRandomNumbers: TypedContractMethod<
    [arg0: BigNumberish],
    [bigint],
    "view"
  >;

  quizCount: TypedContractMethod<[], [bigint], "view">;

  rawFulfillRandomness: TypedContractMethod<
    [requestId: BytesLike, randomness: BigNumberish],
    [void],
    "nonpayable"
  >;

  tokenContract: TypedContractMethod<[], [string], "view">;

  totalPrize: TypedContractMethod<[], [bigint], "view">;

  userCompletionCount: TypedContractMethod<[], [bigint], "view">;

  userPrizes: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  userQuizParticipation: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [boolean],
    "view"
  >;

  userQuizProgress: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "claimPrize"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "distributePrize"
  ): TypedContractMethod<
    [_quizId: BigNumberish, _randomNumber: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "distributionTriggered"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "fee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "keyHash"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "participateInQuiz"
  ): TypedContractMethod<[_quizId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "questionCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "questionRandomNumbers"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "quizCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rawFulfillRandomness"
  ): TypedContractMethod<
    [requestId: BytesLike, randomness: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "tokenContract"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalPrize"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "userCompletionCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "userPrizes"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "userQuizParticipation"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "userQuizProgress"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getEvent(
    key: "DistributionTriggered"
  ): TypedContractEvent<
    DistributionTriggeredEvent.InputTuple,
    DistributionTriggeredEvent.OutputTuple,
    DistributionTriggeredEvent.OutputObject
  >;
  getEvent(
    key: "PrizeDistributed"
  ): TypedContractEvent<
    PrizeDistributedEvent.InputTuple,
    PrizeDistributedEvent.OutputTuple,
    PrizeDistributedEvent.OutputObject
  >;
  getEvent(
    key: "PrizeDistributionCompleted"
  ): TypedContractEvent<
    PrizeDistributionCompletedEvent.InputTuple,
    PrizeDistributionCompletedEvent.OutputTuple,
    PrizeDistributionCompletedEvent.OutputObject
  >;
  getEvent(
    key: "PrizeDistributionStarted"
  ): TypedContractEvent<
    PrizeDistributionStartedEvent.InputTuple,
    PrizeDistributionStartedEvent.OutputTuple,
    PrizeDistributionStartedEvent.OutputObject
  >;
  getEvent(
    key: "QuizCompleted"
  ): TypedContractEvent<
    QuizCompletedEvent.InputTuple,
    QuizCompletedEvent.OutputTuple,
    QuizCompletedEvent.OutputObject
  >;
  getEvent(
    key: "RandomNumberGenerated"
  ): TypedContractEvent<
    RandomNumberGeneratedEvent.InputTuple,
    RandomNumberGeneratedEvent.OutputTuple,
    RandomNumberGeneratedEvent.OutputObject
  >;
  getEvent(
    key: "TokensTransferred"
  ): TypedContractEvent<
    TokensTransferredEvent.InputTuple,
    TokensTransferredEvent.OutputTuple,
    TokensTransferredEvent.OutputObject
  >;
  getEvent(
    key: "UserRegistered"
  ): TypedContractEvent<
    UserRegisteredEvent.InputTuple,
    UserRegisteredEvent.OutputTuple,
    UserRegisteredEvent.OutputObject
  >;

  filters: {
    "DistributionTriggered(uint256)": TypedContractEvent<
      DistributionTriggeredEvent.InputTuple,
      DistributionTriggeredEvent.OutputTuple,
      DistributionTriggeredEvent.OutputObject
    >;
    DistributionTriggered: TypedContractEvent<
      DistributionTriggeredEvent.InputTuple,
      DistributionTriggeredEvent.OutputTuple,
      DistributionTriggeredEvent.OutputObject
    >;

    "PrizeDistributed(address,uint256)": TypedContractEvent<
      PrizeDistributedEvent.InputTuple,
      PrizeDistributedEvent.OutputTuple,
      PrizeDistributedEvent.OutputObject
    >;
    PrizeDistributed: TypedContractEvent<
      PrizeDistributedEvent.InputTuple,
      PrizeDistributedEvent.OutputTuple,
      PrizeDistributedEvent.OutputObject
    >;

    "PrizeDistributionCompleted(uint256)": TypedContractEvent<
      PrizeDistributionCompletedEvent.InputTuple,
      PrizeDistributionCompletedEvent.OutputTuple,
      PrizeDistributionCompletedEvent.OutputObject
    >;
    PrizeDistributionCompleted: TypedContractEvent<
      PrizeDistributionCompletedEvent.InputTuple,
      PrizeDistributionCompletedEvent.OutputTuple,
      PrizeDistributionCompletedEvent.OutputObject
    >;

    "PrizeDistributionStarted(uint256,uint256)": TypedContractEvent<
      PrizeDistributionStartedEvent.InputTuple,
      PrizeDistributionStartedEvent.OutputTuple,
      PrizeDistributionStartedEvent.OutputObject
    >;
    PrizeDistributionStarted: TypedContractEvent<
      PrizeDistributionStartedEvent.InputTuple,
      PrizeDistributionStartedEvent.OutputTuple,
      PrizeDistributionStartedEvent.OutputObject
    >;

    "QuizCompleted(address)": TypedContractEvent<
      QuizCompletedEvent.InputTuple,
      QuizCompletedEvent.OutputTuple,
      QuizCompletedEvent.OutputObject
    >;
    QuizCompleted: TypedContractEvent<
      QuizCompletedEvent.InputTuple,
      QuizCompletedEvent.OutputTuple,
      QuizCompletedEvent.OutputObject
    >;

    "RandomNumberGenerated(uint256,uint256)": TypedContractEvent<
      RandomNumberGeneratedEvent.InputTuple,
      RandomNumberGeneratedEvent.OutputTuple,
      RandomNumberGeneratedEvent.OutputObject
    >;
    RandomNumberGenerated: TypedContractEvent<
      RandomNumberGeneratedEvent.InputTuple,
      RandomNumberGeneratedEvent.OutputTuple,
      RandomNumberGeneratedEvent.OutputObject
    >;

    "TokensTransferred(address,uint256)": TypedContractEvent<
      TokensTransferredEvent.InputTuple,
      TokensTransferredEvent.OutputTuple,
      TokensTransferredEvent.OutputObject
    >;
    TokensTransferred: TypedContractEvent<
      TokensTransferredEvent.InputTuple,
      TokensTransferredEvent.OutputTuple,
      TokensTransferredEvent.OutputObject
    >;

    "UserRegistered(address)": TypedContractEvent<
      UserRegisteredEvent.InputTuple,
      UserRegisteredEvent.OutputTuple,
      UserRegisteredEvent.OutputObject
    >;
    UserRegistered: TypedContractEvent<
      UserRegisteredEvent.InputTuple,
      UserRegisteredEvent.OutputTuple,
      UserRegisteredEvent.OutputObject
    >;
  };
}
