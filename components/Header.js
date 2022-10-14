import React from "react";
import { Menu } from "semantic-ui-react";
import {Link} from '../routes';

const Header  =()=>{

    return(
        <Menu style ={{marginTop:'25px'}}>
            <Link route="/"><a className="item">CrowdCoin</a></Link>

            <Menu.Menu position="right">
            <Link route="/"><a className="item">Campaign</a></Link>
            <Link route="/campaigns/new"><a className="item">Create Campaign</a></Link>
            </Menu.Menu>
        </Menu>
    )
}

export default Header;

