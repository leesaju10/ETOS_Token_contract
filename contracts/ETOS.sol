pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


//TODO change  : 3000000000000000000000000000
contract ETOS is ERC20("EternalOasis", "ETOS"), Ownable {

    constructor() public {
        _mint(msg.sender, 3000000000000000000000000000);
    }
}