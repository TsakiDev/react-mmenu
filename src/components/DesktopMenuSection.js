import React, { Component } from 'react';
import DesktopMenu from "./DesktopMenu";
import { menuData } from '../menuData';


class DesktopMenuSection extends Component {
	render() {
		return(
			<DesktopMenu>
				{
					menuData.map( ( data, i ) => (
						<a href={ data.url + i } 
						className={ data.className } 
						key={ data.url }>{ data.label }</a>
					))
				}
			</DesktopMenu>
		);
	}
}

export default DesktopMenuSection;
