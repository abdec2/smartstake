// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.9/contracts/token/ERC20/utils/SafeERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.9/contracts/utils/math/SafeMath.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.9/contracts/utils/math/Math.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.9/contracts/token/ERC20/IERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.9/contracts/security/ReentrancyGuard.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.9/contracts/access/Ownable.sol";


interface IUniswapV2Router01 {
    function factory() external pure returns (address);

    function WETH() external pure returns (address);

    function addLiquidity(
        address tokenA,
        address tokenB,
        uint amountADesired,
        uint amountBDesired,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB, uint liquidity);

    function addLiquidityETH(
        address token,
        uint amountTokenDesired,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    )
        external
        payable
        returns (uint amountToken, uint amountETH, uint liquidity);

    function removeLiquidity(
        address tokenA,
        address tokenB,
        uint liquidity,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB);

    function removeLiquidityETH(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external returns (uint amountToken, uint amountETH);

    function removeLiquidityWithPermit(
        address tokenA,
        address tokenB,
        uint liquidity,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (uint amountA, uint amountB);

    function removeLiquidityETHWithPermit(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (uint amountToken, uint amountETH);

    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);

    function swapTokensForExactTokens(
        uint amountOut,
        uint amountInMax,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);

    function swapExactETHForTokens(
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external payable returns (uint[] memory amounts);

    function swapTokensForExactETH(
        uint amountOut,
        uint amountInMax,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);

    function swapExactTokensForETH(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);

    function swapETHForExactTokens(
        uint amountOut,
        address[] calldata path,
        address to,
        uint deadline
    ) external payable returns (uint[] memory amounts);

    function quote(
        uint amountA,
        uint reserveA,
        uint reserveB
    ) external pure returns (uint amountB);

    function getAmountOut(
        uint amountIn,
        uint reserveIn,
        uint reserveOut
    ) external pure returns (uint amountOut);

    function getAmountIn(
        uint amountOut,
        uint reserveIn,
        uint reserveOut
    ) external pure returns (uint amountIn);

    function getAmountsOut(
        uint amountIn,
        address[] calldata path
    ) external view returns (uint[] memory amounts);

    function getAmountsIn(
        uint amountOut,
        address[] calldata path
    ) external view returns (uint[] memory amounts);
}

interface IUniswapV2Router02 is IUniswapV2Router01 {
    function factory() external pure returns (address);

    function WETH() external pure returns (address);

    function swapExactETHForTokens(
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external payable returns (uint[] memory amounts);

    function swapExactTokensForTokensSupportingFeeOnTransferTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external;

    function swapExactETHForTokensSupportingFeeOnTransferTokens(
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external payable;

    function swapExactTokensForETHSupportingFeeOnTransferTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external;
}

contract Presale is ReentrancyGuard, Ownable  {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    IUniswapV2Router02 public uniswapV2Router;

    // The token being sold
    IERC20 private _token;
    IERC20 private _usdt;

    // Address where funds are collected
    address private _wallet;
    address private _tokenWallet;

    // Amount of wei raised
    uint256 private _weiRaised;

    uint256 private _minContribution = 1000;
    uint256 public _totalDistribution;

    enum Stages {STAGE_1, STAGE_2, STAGE_3, STAGE_4, STAGE_5, STAGE_6}

    Stages stage = Stages.STAGE_1;

    mapping(Stages => uint256) public rates;

    event TokensPurchased(address indexed purchaser, address indexed beneficiary, uint256 value, uint256 amount);

    constructor (address wallet_, IERC20 token_, IERC20 usdt_, address tokenWallet_, address uniswapRouter) {
        require(wallet_ != address(0), "Crowdsale: wallet is the zero address");
        require(address(token_) != address(0), "Crowdsale: token is the zero address");
        require(address(usdt_) != address(0), "Crowdsale: usdt is the zero address");
        require(tokenWallet_ != address(0), "Crowdsale: token wallet is the zero address");

        _wallet = wallet_;
        _token = token_;
        _usdt = usdt_;
        _tokenWallet = tokenWallet_;
        uniswapV2Router = IUniswapV2Router02(uniswapRouter); //0xD99D1c33F9fC3444f8101754aBC46c52416550D1
        rates[Stages.STAGE_1] = 5000;  // divide it by 1000
        rates[Stages.STAGE_2] = 4545;  // divide it by 1000
        rates[Stages.STAGE_3] = 4166;  // divide it by 1000
        rates[Stages.STAGE_4] = 3846;  // divide it by 1000
        rates[Stages.STAGE_5] = 3571;  // divide it by 1000
        rates[Stages.STAGE_6] = 3333;  // divide it by 1000

    }

    receive() external payable {
        uint256 amountReceived = convertBnbToToken(
            address(_usdt),
            msg.value,
            address(this)
        );

        buyTokens(msg.sender, amountReceived);
        
    }

    function getStage() public view returns (Stages) {
        return stage;
    }

    function setStage(Stages _stage) external onlyOwner {
        stage = _stage;
    }

    function token() public view returns (IERC20) {
        return _token;
    }

    function wallet() public view returns (address) {
        return _wallet;
    }

    function tokenWallet() public view returns (address) {
        return _tokenWallet;
    }

    function weiRaised() public view returns (uint256) {
        return _weiRaised;
    }

    function remainingTokens() public view returns (uint256) {
        return Math.min(token().balanceOf(_tokenWallet), token().allowance(_tokenWallet, address(this)));
    }

    function buyTokens(address beneficiary, uint256 amount) internal nonReentrant {
        uint256 weiAmount = amount;
        _preValidatePurchase(beneficiary, weiAmount);

        // calculate token amount to be created
        uint256 tokens = _getTokenAmount(weiAmount);

        // update state
        _weiRaised = _weiRaised.add(weiAmount);
        _totalDistribution = _totalDistribution.add(tokens);

        _processPurchase(beneficiary, tokens);
        _forwardFunds(weiAmount);
        emit TokensPurchased(msg.sender, beneficiary, weiAmount, tokens);

    }

    function buyTokensBUSD(address beneficiary, uint256 amount) public nonReentrant {
        uint256 weiAmount = amount;
        _preValidatePurchase(beneficiary, weiAmount);

        // calculate token amount to be created
        uint256 tokens = _getTokenAmount(weiAmount);

        _usdt.safeTransferFrom(msg.sender, _wallet, weiAmount);

        // update state
        _weiRaised = _weiRaised.add(weiAmount);
        _totalDistribution = _totalDistribution.add(tokens);

        _processPurchase(beneficiary, tokens);
        emit TokensPurchased(msg.sender, beneficiary, weiAmount, tokens);

    }

    function _preValidatePurchase(address beneficiary, uint256 weiAmount) internal view {
        require(beneficiary != address(0), "Crowdsale: beneficiary is the zero address");
        require(weiAmount != 0, "Crowdsale: weiAmount is 0");
        require(weiAmount >= _minContribution, "Crowdsale: amount is below minimum purchase limit");

        this; // silence state mutability warning without generating bytecode - see https://github.com/ethereum/solidity/issues/2691
    }
    
    function _deliverTokens(address beneficiary, uint256 tokenAmount) internal {
        token().safeTransferFrom(_tokenWallet, beneficiary, tokenAmount);
    }

    function _processPurchase(address beneficiary, uint256 tokenAmount) internal {
        _deliverTokens(beneficiary, tokenAmount);
    }

    function _getTokenAmount(uint256 weiAmount) internal view returns (uint256) {
        return weiAmount.mul(rates[stage]).div(1000);
    }


     // **************************
    // Helper Fuctions
    // **************************
    // convert BNB to busd tokens
    function convertBnbToToken(
        address tokenAddress,
        uint256 amount,
        address walletAddress
    ) private returns (uint256) {
        address[] memory path = new address[](2);
        path[0] = uniswapV2Router.WETH();
        path[1] = tokenAddress;
        // get balance currently of BUSD
        uint256 balanceBefore = IERC20(tokenAddress).balanceOf(address(this));
        uniswapV2Router.swapExactETHForTokensSupportingFeeOnTransferTokens{
            value: amount
        }(0, path, walletAddress, block.timestamp + 3600);
        // get balance after
        uint256 balanceAfter = IERC20(tokenAddress).balanceOf(address(this));
        // get the difference
        uint256 balanceDiff = balanceAfter - balanceBefore;
        // send the difference to the wallet
        return balanceDiff;
    }

    function _forwardFunds(uint256 _amount) internal {
        _usdt.safeTransfer(_wallet, _amount);
    }

}