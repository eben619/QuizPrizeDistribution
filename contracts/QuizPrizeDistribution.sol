// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract QuizPrizeDistribution is VRFConsumerBase {
    address public owner;
    address public tokenContract;
    uint256 public quizCount;
    uint256 public totalPrize;
    uint256 public questionCount = 20;
    uint256 public userCompletionCount;
    bool public distributionTriggered;
    bytes32 public keyHash;
    uint256 public fee;
    mapping(uint256 => mapping(address => bool)) public userQuizParticipation;
    mapping(address => uint256) public userQuizProgress; // Track quiz progress for each participant
    mapping(uint256 => uint256) public questionRandomNumbers;
    mapping(address => uint256) public userPrizes; // Amount of ERC20 tokens each user will receive
    
    event PrizeDistributed(address indexed user, uint256 amount);
    event UserRegistered(address indexed user);
    event QuizCompleted(address indexed user);
    event DistributionTriggered(uint256 userCompletionCount);
    event RandomNumberGenerated(uint256 indexed quizId, uint256 randomNumber);
    event PrizeDistributionStarted(uint256 indexed quizId, uint256 totalPrize);
    event PrizeDistributionCompleted(uint256 indexed quizId);
    event TokensTransferred(address indexed user, uint256 amount);

    constructor(address _vrfCoordinator, address _linkToken, bytes32 _keyHash, uint256 _fee, address _tokenContract) 
        VRFConsumerBase(_vrfCoordinator, _linkToken)
    {
        owner = msg.sender;
        keyHash = _keyHash;
        fee = _fee;
        tokenContract = _tokenContract;
    }
    
    function participateInQuiz(uint256 _quizId) external {
        require(!userQuizParticipation[_quizId][msg.sender], "User already participated");
        require(quizCount < questionCount, "Quiz already ended");
        
        // Simulate participation in quiz
        userQuizParticipation[_quizId][msg.sender] = true;
        userQuizProgress[msg.sender]++;
        emit UserRegistered(msg.sender);
        
        // Check if quiz is completed for the user
        if(userQuizProgress[msg.sender] == questionCount) {
            userCompletionCount++;
            emit QuizCompleted(msg.sender);
        }
        
        // Trigger distribution if user count reaches 500,000
        if (userCompletionCount == 500000) {
            distributionTriggered = true;
            emit DistributionTriggered(userCompletionCount);
        }
        
        quizCount++;
    }
    
    function distributePrize(uint256 _quizId, uint256 _randomNumber) external {
        require(msg.sender == owner, "Only owner can distribute prize");
        require(distributionTriggered, "Distribution not triggered");
        require(questionRandomNumbers[_quizId] == 0, "Prize already distributed for this quiz");

        questionRandomNumbers[_quizId] = _randomNumber;
        totalPrize += _randomNumber;
        
        emit RandomNumberGenerated(_quizId, _randomNumber);
        emit PrizeDistributionStarted(_quizId, totalPrize);
    }
    
    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
    uint256 quizId = uint256(requestId);
    this.distributePrize(quizId, randomness);
    emit PrizeDistributionCompleted(quizId);
}
    
    function claimPrize() external {
        require(questionRandomNumbers[quizCount] != 0, "Prize not yet distributed");
        require(userQuizProgress[msg.sender] == questionCount, "User hasn't completed the quiz");
        require(distributionTriggered, "Distribution not triggered");

        uint256 userPrize = (questionRandomNumbers[quizCount] * 1 ether) / questionCount;
        userPrizes[msg.sender] = userPrize;
        
        // Emit the event before transferring tokens
        emit PrizeDistributed(msg.sender, userPrize);
        
        // Transfer tokens in a gas-efficient way
        _safeTokenTransfer(tokenContract, msg.sender, userPrize);
        emit TokensTransferred(msg.sender, userPrize);
    }
    
    function _safeTokenTransfer(address _token, address _to, uint256 _amount) internal {
        (bool success, bytes memory data) = _token.call(abi.encodeWithSelector(IERC20(_token).transfer.selector, _to, _amount));
        require(success && (data.length == 0 || abi.decode(data, (bool))), "Token transfer failed");
    }
}
