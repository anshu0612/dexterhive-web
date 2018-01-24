/**
 * Created by anshu on 24/07/17.
 */
import React, {Component} from 'react';

// Reusable components
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';


// Stylesheets
require('./AddExperience.scss');

export default class AddExperience extends Component {

    constructor(props) {
        super(props);
    }

    handleClose = () => {
        this.props.handleCloseDialog();
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Add"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />
        ];

        return (
            <Dialog
                className="experience-dialog-wrapper"
                title="Add Experience"
                actions={actions}
                modal={true}
                open={this.props.openAddExperienceDia}
                autoScrollBodyContent={true}>
                <div>
                    <div>
                        <TextField
                            hintText="Enter position"
                            floatingLabelText="Position"
                        />
                    </div>
                    <div>
                        <TextField
                            hintText="Enter company"
                            floatingLabelText="Company"
                        />
                    </div>
                    <div>
                        <TextField
                            hintText="Enter Location"
                            floatingLabelText="Location"
                        />
                    </div>
                    <div>
                        <SelectField
                            floatingLabelText="From month"
                            //value={this.state.value}
                            //onChange={this.handleChange}
                        >
                            <MenuItem value={1} primaryText="Never" />
                            <MenuItem value={2} primaryText="Every Night" />
                        </SelectField>

                        <SelectField
                            floatingLabelText="To month"
                            //value={this.state.value}
                            //onChange={this.handleChange}
                        >
                            <MenuItem value={1} primaryText="Never" />
                            <MenuItem value={2} primaryText="Every Night" />
                        </SelectField>
                    </div>
                    <div>
                        <SelectField
                            floatingLabelText="From year"
                            //value={this.state.value}
                            //onChange={this.handleChange}
                        >
                            <MenuItem value={1} primaryText="Never" />
                            <MenuItem value={2} primaryText="Every Night" />
                        </SelectField>

                        <SelectField
                            floatingLabelText="To year"
                            //value={this.state.value}
                            //onChange={this.handleChange}
                        >
                            <MenuItem value={1} primaryText="Never" />
                            <MenuItem value={2} primaryText="Every Night" />
                        </SelectField>
                    </div>
                    <div>
                        <Checkbox
                            label="I am currently working here."
                        />
                    </div>
                    <div>
                        <TextField
                            hintText="Enter description"
                            floatingLabelText="Description"
                            multiLine={true}
                            rows={2}
                        />
                    </div>
                </div>
            </Dialog>
        );
    }
}
