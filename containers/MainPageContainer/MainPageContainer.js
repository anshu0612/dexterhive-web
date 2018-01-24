import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components here
import Header from '../../components/Header/Header';

// Import actions
import * as ActionCreators from '../../actions/tempAjaxAction';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../../src/material_ui_raw_theme_file';
import DashboardSection from "../../components/DashboardSection/DashboardSection";

// Stylesheet
require('./MainPageContainer.scss');

class MainPageContainer extends Component {
    render() {

        const { todos, actions } = this.props;
        return (
            <MuiThemeProvider muiTheme={theme}>
                <div className="groups-container">
                    <div className="rightsection-container">
                        <Header/>
                        <DashboardSection getRandomMessage={this.props.actions.getRandomMessage}/>
                    </div>
                </div>
            </MuiThemeProvider>

        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...ActionCreators }, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPageContainer);
