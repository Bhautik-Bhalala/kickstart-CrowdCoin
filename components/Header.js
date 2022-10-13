import React from "react";

import { Menu } from "semantic-ui-react";

export default ()=>{

    return(
        <Menu style ={{marginTop:'25px'}}>
            <Menu.Item>
                CrowdCoin
            </Menu.Item>

            <Menu.Menu position="right"></Menu.Menu>
            <Menu.Item>
                Campaign
            </Menu.Item>
            <Menu.Item>
                +
            </Menu.Item>
        </Menu>
    )
}