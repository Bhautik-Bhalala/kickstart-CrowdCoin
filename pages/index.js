import React , {Component} from 'react';
import { Card , Button} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import 'semantic-ui-css/semantic.min.css' 
import Layout from '../components/Layout';


// export default () => {
//     return <h1>This is the new campaign page !!!</h1>
// };

class CampaignIndex extends Component {
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return {campaigns};
    }
    renderCampaigns(){
        const items = this.props.campaigns.map(address =>{
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid:true
            }
        });
        return <Card.Group items={items} />;
    }

    render(){

        return (
            <Layout>
                <div>
                    <h3>Open Campaign</h3>
                    <Button floated='right'
                        content = "Create Campaign"
                        icon = "add"
                        primary
                    /> 
                    { this.renderCampaigns()}

                </div>
            </Layout>
            )
    }
}


export default CampaignIndex;