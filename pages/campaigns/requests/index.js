import React , {Component} from "react";
import { Button , Table} from "semantic-ui-react";
import { Link } from '../../../routes';
import Layout from "../../../components/Layout";
import 'semantic-ui-css/semantic.min.css' ;
import Campaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";

class RequestIndex extends Component {
    static async getInitialProps(props) {
        const  {address} = props.query;
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestCount().call();
        const approversCount = await campaign.methods.approverCount().call();

        const requests = await Promise.all(
            Array(requestCount).fill().map((element,index) =>{
                return campaign.methods.requests(index).call()
            })
        );
        return {address , requests , requestCount ,  approversCount};
    }

    renderRow(){
        return this.props.requests.map((request,index) => {
            console.log(request)
            return (
            <RequestRow 
                key = {index}
                id = {index}
                request = {request}
                address = {this.props.address}
                approversCount = {this.props.approversCount}
            />
            );
        });
    }

    render(){
        const {Header , Row , HeaderCell , Body} = Table;
        return (
            <Layout>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary floated="right" >
                            Add Request
                        </Button>
                    </a>
                </Link>
                <h3>Pending Requests</h3>

                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>

                    <Body>
                        {this.renderRow()}
                    </Body>


                </Table>
                <div>
                    Found {this.props.requestCount} request.
                </div>

            </Layout>
            );
    }
}

export default RequestIndex;