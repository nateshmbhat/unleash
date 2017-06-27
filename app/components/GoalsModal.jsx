import React, { PropTypes } from 'react';
import capitalize from 'lodash/capitalize';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import ChipInput from 'material-ui-chip-input';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import Loading from './Loading';
import IconSelector from './IconSelector';

let styles = {};

class GoalsModal extends React.Component {
  getGoalForm() {
    const { parameters, tagsOptions, editable, onFieldChange } = this.props;

    if (!editable) {
      return (
        <div>
          { parameters.description }
        </div>
      );
    }
    return (
      <div style={styles.modalContainer}>
        <div>
          {this.generateTextField('name')}
          {this.generateTextField('description')}
          {this.generateTextField('level')}
          {this.generatePathsSelectField()}
          {this.generateDueDateField()}
          <IconSelector
            value={parameters.icon}
            onChange={value => onFieldChange('icon', value)}
          />
          <ChipInput
            style={styles.textFields}
            floatingLabelText="Tags"
            dataSource={tagsOptions}
            value={parameters.tags}
            onRequestAdd={chip => this.handleChipChange('add', chip)}
            onRequestDelete={chip => this.handleChipChange('remove', chip)}
          />
          {this.generateExtraFields()}
        </div>
      </div>
    );
  }

  generateExtraFields() {
    const { extraFields } = this.props;

    return extraFields && extraFields.map((generateField, index) => generateField({ key: index }));
  }

  generateDueDateField() {
    const { parameters, usersGoal, onFieldChange } = this.props;

    if (!usersGoal) {
      return null;
    }

    return (
      <div style={styles.dueDateContainer}>
        <DatePicker
          style={styles.dueDateField}
          textFieldStyle={styles.textFields}
          hintText="Due Date"
          container="inline"
          mode="landscape"
          onChange={(event, date) => onFieldChange('dueDate', date)}
          value={parameters.dueDate ? new Date(parameters.dueDate) : null}
        />
        <FlatButton
          style={styles.dueDateFieldClear}
          hintText="Clear Due Date"
          onClick={() => onFieldChange('dueDate', null)}
          label="Clear"
        />
      </div>
    );
  }

  generatePathsSelectField() {
    const { parameters, usersGoal, onFieldChange } = this.props;

    if (!usersGoal) {
      return null;
    }

    return (
      <SelectField
        floatingLabelText="Path"
        style={styles.textFields}
        value={parameters.path}
        onChange={(event, index, value) => onFieldChange('path', value)}
      >
        {parameters.paths.map(path => (
          <MenuItem key={path.id} value={path.id} primaryText={path.name} />
        ))}
      </SelectField>
    );
  }

  generateTextField(fieldName) {
    const { parameters, onFieldChange } = this.props;
    return (
      <TextField
        style={styles.textFields}
        floatingLabelText={capitalize(fieldName)}
        value={parameters[fieldName]}
        onChange={event => onFieldChange(fieldName, event.target.value)}
      />
    );
  }

  handleChipChange(actionType, chip) {
    const { parameters, onFieldChange } = this.props;
    if (actionType === 'add') {
      onFieldChange('tags', [...parameters.tags, chip]);
    } else if (actionType === 'remove') {
      const removeElementIndex = parameters.tags.indexOf(chip);
      parameters.tags.splice(removeElementIndex, 1);
      onFieldChange('tags', parameters.tags);
    }
  }

  render() {
    const { parameters, title, modalActions } = this.props;
    const modalContent = parameters.showSpinner ? <Loading /> : this.getGoalForm();
    const autoScrollBodyContent = !!parameters.extraFields;

    return (
      <Dialog
        title={title}
        open={parameters.showModal}
        contentStyle={styles.modal}
        actions={modalActions}
        autoScrollBodyContent={autoScrollBodyContent}
        modal
      >
        {modalContent}
      </Dialog>
    );
  }
}

GoalsModal.propTypes = {
  parameters: PropTypes.shape({
    showModal: PropTypes.bool.isRequired,
    showSpinner: PropTypes.bool,
    name: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.array,
    icon: PropTypes.string,
    level: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }).isRequired,
  onFieldChange: PropTypes.func.isRequired,
  modalActions: PropTypes.arrayOf(PropTypes.object),
  extraFields: PropTypes.arrayOf(PropTypes.func),
  tagsOptions: PropTypes.arrayOf(PropTypes.string),
  usersGoal: PropTypes.bool,
  title: PropTypes.string,
  editable: PropTypes.bool,
};

GoalsModal.defaultProps = {
  title: 'Add Goal',
};

styles = {
  modal: {
    width: '500px',
  },
  modalContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '50px',
  },
  textFields: {
    width: '100%',
  },
  dueDateContainer: {
    display: 'flex',
  },
  dueDateField: {
    paddingTop: 20,
    width: '80%',
  },
  dueDateFieldClear: {
    marginTop: 20,
    width: '20%',
  },
};

export default GoalsModal;
