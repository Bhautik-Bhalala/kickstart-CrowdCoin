import web3 from './web3'
import CampaignFactory from './build/CampainFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x5C12A9A9a50A6C96F97d38936F4053b5C5b8b486'
);

export default instance;