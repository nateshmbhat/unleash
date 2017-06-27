/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import generate from '../../testUtils/fixtures';
import GoalCard from '../GoalCard';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

describe('Goal Card', () => {
  let component;
  let goalData;

  function renderComponent(props) {
    goalData = generate('goal')[0];
    const context = {
      muiTheme: getMuiTheme()
    };
    const childContextTypes = {
      muiTheme: React.PropTypes.object
    };

    component = mount(
      <GoalCard goal={goalData} {...props} />,
      {
        context,
        childContextTypes
      });
  }

  it('should render without problems', () => {
    renderComponent();
    expect(component).to.exist;
  });

  it('should render the goal', () => {
    expect(component.find('Paper')).to.exist;
  });

  describe('show GoalsModal', () => {
    it('should toggle dialog state when touchTap event is fired', () => {
      renderComponent();
      const childComponent = component.find('Paper');
      expect(component.state().dialog).not.to.exist;
      childComponent.props().onTouchTap();
      expect(component.state().dialog).to.be.true;
    });

    it('should render a dialog when dialog state is true', () => {
      renderComponent();
      const childComponent = component.find('Paper');
      expect(component.find('GoalsModal').props().parameters.showModal).to.be.false;
      childComponent.props().onTouchTap();
      expect(component.find('GoalsModal').props().parameters.showModal).to.be.true;
    });

    it('should create only close action when Goal is not editable', () => {
      renderComponent();
      const modalActions = component.find('GoalsModal').props().modalActions;
      expect(modalActions.length).to.equal(1);
      expect(modalActions[0].props.label).to.equal('Close');
    });

    it('should not pass path params to Dialog when Goal is not users', () => {
      renderComponent();
      expect(component.find('GoalsModal').props().parameters.paths).not.to.be.ok;
      expect(component.find('GoalsModal').props().parameters.path).not.to.be.ok;
    });

    it('should not generate NotifySlack field when Goal is not users', () => {
      renderComponent();
      expect(component.find('GoalsModal').props().extraFields).not.to.equal([]);
    });

    it('should create "Mark as achieved" and "Remove" actions when Goal is editable', () => {
      renderComponent({ editable: true });
      const modalActions = component.find('GoalsModal').props().modalActions;
      expect(modalActions.length).to.equal(3);
      expect(modalActions[0].props.label).to.equal('Mark as achieved');
      expect(modalActions[1].props.label).to.equal('Remove');
      expect(modalActions[2].props.label).to.equal('Close');
    });

    it('should create Mark as achieved action when Goal is users', () => {
      renderComponent({ editable: true, path: { id: 7 } });
      const modalActions = component.find('GoalsModal').props().modalActions;
      expect(modalActions.length).to.equal(3);
      expect(modalActions[0].props.label).to.equal('Mark as achieved');
      expect(modalActions[1].props.label).to.equal('Remove');
      expect(modalActions[2].props.label).to.equal('Close');
    });

    it('should pass NotifyOnSlack field when Goal is users', () => {
      renderComponent({ usersGoal: true, path: { id: 7 } });
      const extraFields = component.find('GoalsModal').props().extraFields;
      expect(extraFields.length).to.equal(1);
    });
  });
});
