import React from 'react';

class Sidebar extends React.Component {
	render() {
		return (
			<div className="rmm-sidebar-container">
				{ menuData.length && (
					<ul>
						{ menuData.map( item => (
							<li>
								<a href={item.url}>
									{ item.label }
								</a>
							</li>
						) ) }
					</ul>
				) }
			</div>
		);
	}
}

export default Sidebar;
