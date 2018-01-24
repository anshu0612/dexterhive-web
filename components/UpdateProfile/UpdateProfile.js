/**
 * Created by anshu on 19/07/17.
 */
import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import AddIcon from 'material-ui/svg-icons/content/add';

// Stylesheets
require('./UpdateProfile.scss');

//Reusable Components
import UserExperience from '../UserExperience/UserExperience';


// Images
//TODO: This is dummy image
const profile = require('../../assets/img/profiletemp.jpg');
const cover = require('../../assets/img/covertemp.jpg');

export default class UpdateProfile extends Component {


    render() {

        return (
          <div className="profile-section-wrapper">
            <Card className = "profile-header">

                <CardHeader
                    title="Anshu Singh"
                    subtitle="Full Stack Web Application Developer"
                />

                <img src={cover} alt="" className="profile-header-cover"/>
                <div className="profile-pic-container">
                    <img src={profile}/>
                </div>
            </Card>

            <UserExperience />


            <Card className="profile-description-card">
                <CardHeader
                    title="Experience"
                    actAsExpander={false}
                    showExpandableButton={false}
                />
                <CardText >
                    <Card className="">
                        <CardHeader
                            actAsExpander={true}
                            showExpandableButton={true}
                        />
                        <CardText expandable={true}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                    </Card>
                </CardText>
            </Card>
          </div>
    );
    }
}
/**
 * Created by anshu on 21/07/17.
 */
