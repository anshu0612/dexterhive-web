/**
 * Created by anshu on 19/07/17.
 */
import React, {Component} from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import AddIcon from 'material-ui/svg-icons/content/add';

//Reusable Components
import AddExperience from '../AddExperience/AddExperience';

// Stylesheets
require('./UserExperience.scss');

export default class UserExperience extends Component {

    constructor(props) {
        super(props)
        this.state = {
            openAddExperienceDia: false
        };
    }

    handleOpen = () => {
        this.setState({openAddExperienceDia: true});
    };

    handleClose = () => {
        this.setState({openAddExperienceDia: false});
    };


    render() {
        return (
            <Card className="profile-description-card">
                <div className="add-button-wrapper">
                    <button className="add-button" onTouchTap={this.handleOpen} >
                        <AddIcon />
                    </button>
                </div>
                <CardHeader
                    title="Experience"
                />
                <div className="profile-list-wrapper">
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </div>
                </div>
                <div className="profile-list-wrapper">
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </div>
                </div>
                <AddExperience openAddExperienceDia = {this.state.openAddExperienceDia}
                               handleCloseDialog = {this.handleClose}/>
            </Card>
        );
    }
}
