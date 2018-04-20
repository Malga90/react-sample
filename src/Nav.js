import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        const {appName} = this.props;
        const navigation = this.props.navigation.map((nav, index) => (
            <li key = {index}>{nav}</li>
            ));
            
        return (
            <div className = 'navBody'>
             <div className = 'appName'>
                    <h2>{appName}</h2>
                </div>
                <div className = 'navigation'>
                    
                    <ul>
                        {navigation}
                    </ul>
                    
                </div>
                
            </div>
        );
    }
}

export default Nav;