/**
 * Created by sheeraz on 21/7/17.
 */
import React, { Component } from 'react';
import SharedThoughts from "../SharedThoughts/SharedThoughts";
import ShareThoughts from "../ShareThoughts/ShareThoughts";
import SummaryLayout from "../SummaryLayout/SummaryLayout";
import EventSummaryItems from "../EventSummaryItems/EventSummaryItems"
import GroupSummaryItems from "../GroupSummaryItems/GroupSummaryItems";
import Divider from 'material-ui/Divider';


// Stylesheets
require('./DashboardSection.scss');

class DashboardSection extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("what the heck", this.props);
        return (
            <div className="dashboard-section-wrapper">
                <br/><br/>
                <SummaryLayout title="Groups">
                    <GroupSummaryItems/>
                    <Divider/>
                    <GroupSummaryItems/>
                    <Divider/>
                    <GroupSummaryItems/>
                </SummaryLayout>
                <SummaryLayout title="Upcoming Events">
                    <EventSummaryItems/>
                </SummaryLayout>
                <SummaryLayout title="Documents"/>
                <ShareThoughts/>
                <br/><br/>
                <SharedThoughts/>
                <br/>
                <SharedThoughts/>
                <br/>
                <SharedThoughts/>
                <button onClick={this.props.getRandomMessage()}>CLICK ME</button>
            </div>
        );
    }
}

export default DashboardSection;
