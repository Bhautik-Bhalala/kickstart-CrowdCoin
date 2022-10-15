pragma solidity ^0.4.17;

contract CampainFactory{
    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum , msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns(address[]){
        return deployedCampaigns;
    }
}

contract Campaign{
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalcount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    // address[] public approvers;
    mapping(address => bool) public approvers;
    uint public approverCount;

    modifier restricted(){
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint minimum , address creator) public{
        manager = creator;  
        minimumContribution = minimum;
    }

    function contribute() public payable{
        require(msg.value > minimumContribution);
        // approvers.push(msg.sender);
        approvers[msg.sender] = true;
        approverCount++;
    }

    function createRequest(string description , uint value , address recipient) public restricted{
        Request memory newrequest = Request({
            description: description,
            value:value,
            recipient : recipient,
            complete:false,
            approvalcount: 0
        });
        requests.push(newrequest);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalcount++;

    }

    function finalizeRequest(uint index) public restricted{
        Request storage request = requests[index];
        
        require(request.approvalcount > (approverCount / 2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete =true;

    }

    function getSummary() public view returns(uint, uint, uint, uint, address){
        return (
            minimumContribution,
            this.balance,
            requests.length,
            approverCount,
            manager
        );
    }

    function getRequestCount() public view returns (uint){
        return requests.length;
    }
} 