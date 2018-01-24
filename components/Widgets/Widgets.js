/**
 * Created by anshu on 19/07/17.
 */
import React, {Component} from 'react';
import { Link } from 'react-router';

//Material Ui
import Updates from 'material-ui/svg-icons/communication/forum';
import {blueGrey200, blueGrey50} from 'material-ui/styles/colors';
import DashBoard from 'material-ui/svg-icons/action/dashboard';
import Groups from 'material-ui/svg-icons/social/group';
import Library from 'material-ui/svg-icons/av/library-books';
import Drive from 'material-ui/svg-icons/action/perm-media';

// Stylesheets
require('./Widgets.scss');

export default class Widgets extends Component {
    render() {
        return (
            <ul className="widgets-container">
                <li className="">
                    <a>
                        <Updates color = {blueGrey200} hoverColor={blueGrey50}/>
                        <span className="widget-name">Updates</span>
                    </a>
                </li>
                <li className="">
                    <Link to="/dashboard">
                        <DashBoard color = {blueGrey200} hoverColor={blueGrey50}/>
                        <span className="widget-name">Dashboard</span>
                    </Link>
                </li>
                <li className="">
                    <a>
                        <Library color = {blueGrey200} hoverColor={blueGrey50}/>
                        <span className="widget-name">Library</span>
                    </a>
                </li>

                <li className="">
                    <a>
                        <Drive color = {blueGrey200} hoverColor={blueGrey50}/>
                        <span className="widget-name">Storage</span>
                    </a>
                </li>
                <li className="">
                    <Link to="/groups">
                        <Groups color = {blueGrey200} hoverColor={blueGrey50}/>
                        <span className="widget-name">Groups</span>
                    </Link>
                </li>
            </ul>
    );
    }
}
