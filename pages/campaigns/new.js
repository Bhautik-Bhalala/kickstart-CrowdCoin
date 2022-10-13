import React, { Component } from "react";
import Layout from "../../components/Layout";
import {Button, Form ,Input} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css' 
import factory from '../../ethereum/factory';
import web3 from "../../ethereum/web3";

class CampaignNew extends Component{

    state = {
        minimumContribution:''
    };

    onSubmit = async (event) =>{
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        
        await factory.methods.createCampaign('100').send({
            from:accounts[0],
            gas : '1000000'
        });
    };

    render(){
         return (
            <Layout>
                <h1>Create a Campaign</h1>

                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input 
                         label="wei" 
                         labelPosition="right"
                         value={this.state.minimumContribution}
                         onChange={event =>
                            this.setState({minimumContribution : event.target.value})}
                         />
                    </Form.Field>

                    <Button primary>Create!</Button>
                </Form>

            </Layout>
         );
    }
}

export default CampaignNew;