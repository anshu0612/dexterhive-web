/**
 * Created by anshu on 19/07/17.
 */
import React, {Component} from 'react';

import SearchIcon from 'material-ui/svg-icons/action/search';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import AddIcon from 'material-ui/svg-icons/content/add';


// Stylesheets
require('./UserAccomplishments.scss');

// Images
const appLogo = require('../../assets/img/dexterhive.png');

export default class UserAccomplishments extends Component {
    render() {
        return (
            <form className="search-wrapper">
                <div className="search-bar">
                    <input placeholder="Search" className="search-input"/>
                    <span className="search-icon">
                        <SearchIcon />
                    </span>
                </div>
            </form>
        );
    }
}
