//SPDX-License-Identifier:MIT
pragma solidity >= 0.8.0;

contract PointProgram{

    address owner;
    address creator;

    struct Point{
        string name;
        string reward;
        string multiplier;
    }

    struct Enroll{
        address member;
        uint purchase;
    }

    mapping(address => Point[]) points;
    mapping(address => Enroll[]) enrolls;

    function addPoint(string memory _name, string memory _reward, string memory _multiplier) public returns(Point[] memory){
        owner=msg.sender;
        Point memory temp = Point(_name, _reward, _multiplier);
        points[owner].push(temp);
        return points[msg.sender];
    }

    function addEnroll(address _creator, uint _purchase) public returns(Enroll[] memory){
        creator = _creator;
        Enroll memory temp1 = Enroll(msg.sender, _purchase);
        enrolls[creator].push(temp1);
        return enrolls[msg.sender]; 
    }

    function getPoint() public view returns(Point[] memory){
        return points[msg.sender];
    }

    function getEnroll() public view returns(Enroll[] memory){
        return enrolls[msg.sender];
    }
}