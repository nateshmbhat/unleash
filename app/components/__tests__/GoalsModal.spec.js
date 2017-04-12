import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import GoalsModal from '../GoalsModal';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

describe('Goals Modal', () => {
  let component;
  const tags = ['react', 'wordpress', 'php', 'node'];

  let onFieldChangeSpy;

  const renderGoalsModal = (options = {}, props = {}) => {
    onFieldChangeSpy = sinon.spy();
    const context = {
      muiTheme: getMuiTheme()
    };
    const childContextTypes = {
      muiTheme: React.PropTypes.object
    };
    const modalParameters = {
      showModal: true,
      showSpinner: false,
      name: '',
      description: '',
      tags: [],
      icon: '',
      level: '',
    };

    const defaultProps = {
      tagsOptions: tags,
      parameters: {...modalParameters, ...options},
      editable: true,
      onFieldChange: onFieldChangeSpy,
    };

    component = shallow(<GoalsModal {...defaultProps} {...props} />, {
      context,
      childContextTypes
    });
  };

  it('should render without problems', () => {
    renderGoalsModal();
    expect(component).to.exist;
  });

  it('should render the three textfield component to fill the new goal', () => {
    renderGoalsModal();
    const textFields = component.find('TextField');
    expect(textFields.length).to.equal(3);
  });

  it('should render icon select component', () => {
    renderGoalsModal();
    const iconSelector = component.find('IconSelector');
    expect(iconSelector.length).to.equal(1);
  });

  it('should render icon select component', () => {
    renderGoalsModal();
    const iconSelector = component.find('IconSelector');
    expect(iconSelector.length).to.equal(1);
  });

  it('should render chip component for the tags', () => {
    renderGoalsModal();
    const chipInput = component.find('ChipInput');
    expect(chipInput.length).to.equal(1);
  });

  it('should not render the dueDate field if usersGoal prop is not provided', () => {
    renderGoalsModal({ paths: [] }, { usersGoal: false });
    const dueDateField = component.find('DatePicker');
    expect(dueDateField.length).to.equal(0);
  });

  it('should render the dueDate field if usersGoal prop is true', () => {
    renderGoalsModal({ paths: [] }, { usersGoal: true });
    const dueDateField = component.find('DatePicker');
    expect(dueDateField.length).to.equal(1);
  });

  it('should render the paths select field if usersGoal prop is true', () => {
    renderGoalsModal({ paths: [] }, { usersGoal: true });
    const pathsSelectField = component.find('SelectField');
    expect(pathsSelectField.length).to.equal(1);
  });

  it('should call updateAddGoalFields when dueDate changes', () => {
    renderGoalsModal({ paths: [] }, { usersGoal: true });
    const dueDateField = component.find('DatePicker');
    const onDueDateChange = dueDateField.prop('onChange');

    expect(onDueDateChange).to.be.a('function');
    expect(onFieldChangeSpy.callCount).to.equal(0);
    onDueDateChange('evt', 'test-date');
    expect(onFieldChangeSpy.callCount).to.equal(1);
    expect(onFieldChangeSpy.getCall(0).args).to.eql(['dueDate', 'test-date']);
  });

  it('should hide all the element and show the spinner', () => {
    renderGoalsModal({ showSpinner: true });
    const textFields = component.find('TextField');
    const chipInput = component.find('ChipInput');
    const iconSelector = component.find('IconSelector');
    const loading = component.find('Loading');
    expect(textFields.length).to.equal(0);
    expect(chipInput.length).to.equal(0);
    expect(iconSelector.length).to.equal(0);
    expect(loading.length).to.equal(1);
  });

  it('should not render any edit fields when editable set to false', () => {
    renderGoalsModal({}, { editable: false });
    const textFields = component.find('TextField');
    const chipInput = component.find('ChipInput');
    const iconSelector = component.find('IconSelector');
    const dueDate = component.find('DatePicker');
    const pathSelect = component.find('SelectField');

    expect(textFields.length).to.equal(0);
    expect(chipInput.length).to.equal(0);
    expect(iconSelector.length).to.equal(0);
    expect(dueDate.length).to.equal(0);
    expect(pathSelect.length).to.equal(0);
  });

  it('should populate all fields with passed values', () => {
    const props = {
      name: 'My Custom Goal',
      description: 'My Description',
      tags,
      icon: 'icon-file',
      level: 'beginner',
      path: 'Test Path',
      dueDate: '2012-07-11',
      paths: [],
    };
    renderGoalsModal(props, { usersGoal: true });
    const textFields = component.find('TextField');
    const chipInput = component.find('ChipInput');
    const iconSelector = component.find('IconSelector');
    const dueDate = component.find('DatePicker');
    const pathSelect = component.find('SelectField');

    expect(textFields.findWhere((textField) => textField.props().value === props.name)).to.have.length(1);
    expect(textFields.findWhere((textField) => textField.props().value === props.description)).to.have.length(1);
    expect(textFields.findWhere((textField) => textField.props().value === props.level)).to.have.length(1);
    expect(chipInput.props().value).to.equal(props.tags);
    expect(iconSelector.props().value).to.equal(props.icon);
    expect(dueDate.props().value).to.eql(new Date(props.dueDate));
    expect(pathSelect.props().value).to.equal(props.path);
  });
});
