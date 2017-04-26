import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import AddGoalsModal from '../AddGoalsModal';

describe('Add Goals Modal', () => {
  function renderComponent(props = { parameters: {} }) {
    const onSubmit = () => {};
    const onCancel = () => {};
    const {parameters: passedParameters, ...rest } = props;
    const parameters = {
      name: '',
      description: '',
      ...passedParameters,
    };

    return shallow(<AddGoalsModal onSubmit={onSubmit} onCancel={onCancel} parameters={parameters} {...rest}/>);
  }

  it('should render Goals Modal', () => {
    const component = renderComponent();
    expect(component.find('GoalsModal')).to.have.length(1);
    expect(component.find('GoalsModal').props().editable).to.be.ok;
  });

  it('should pass correct modalActions to Goals Modal', () => {
    const component = renderComponent();
    const modalActions = component.find('GoalsModal').props().modalActions;
    expect(modalActions).to.have.length(2);
    expect(modalActions[0].props.label).to.equal('Cancel');
    expect(modalActions[1].props.label).to.equal('Submit');
  });

  it('should pass extra params to Goals Modal', () => {
    const component = renderComponent({extraField: 'foo'});
    expect(component.find('GoalsModal').props().extraField).to.equal('foo');
  });
});
