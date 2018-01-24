/**
 * Created by anshu on 19/07/17.
 */
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

//Components
import Search from '../Search/Search';
import Widgets from '../Widgets/Widgets';
import {blueGrey300, blueGrey50} from 'material-ui/styles/colors';

import DownArrowIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';

// Stylesheets
require('./Header.scss');

// Images
//TODO: This is dummy image
const profile = require('../../assets/img/profiletemp.jpg');
const appLogo = require('../../assets/img/dexterhive.png');

class Header extends Component {
    render() {
        return (
            <nav className="header">
                <div className="header-main-content">
                    <div className="header-main-logo-wrapper">
                        <a>
                            <img className="header-main-app-logo" src={appLogo} />
                        </a>
                    </div>
                    <Search/>
                    <Widgets/>
                    <div className="profile-container">
                        <Link to="/profile"><img src={profile}/></Link>
                        <DownArrowIcon className="profile-dropdown-arrow" color={blueGrey300} hoverColor={blueGrey50}/>
                    </div>
                </div>
            </nav>
        );
    }
}

Header.propTypes = {
    // Add here
};

export default Header;
