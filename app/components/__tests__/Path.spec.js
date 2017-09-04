/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import assign from 'lodash/assign';
import forEach from 'lodash/forEach';
import sinon from 'sinon';
import generate from '../../testUtils/fixtures';
import Paths from '../Path';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

describe('Path Component', () => {
  const testId = 'testId';
  const paths = { list: generate('path', 5, testId) };
  const location = { pathname: `/profiles/${testId}` };
  let profile;
  let editable;
  let mockedActions;
  let pathsCreateSpy;
  let pathsRemoveSpy;
  let pathsRenameSpy;
  let routerSpy;

  beforeEach(() => {
    profile = generate('user')[0];
  });

  afterEach(() => {
    profile = null;
    editable = false;
    mockedActions = null;
    pathsCreateSpy = null;
    pathsRemoveSpy = null;
    routerSpy = null;
  });

  function getComponent(props) {
    pathsCreateSpy = sinon.spy();
    pathsRemoveSpy = sinon.spy();
    pathsRenameSpy = sinon.spy();
    routerSpy = {
      push: sinon.spy(),
      replace: sinon.spy(),
      go: sinon.spy(),
      goBack: sinon.spy(),
      goForward: sinon.spy(),
      setRouteLeaveHook: sinon.spy(),
      isActive: sinon.spy()
    };
    mockedActions = {
      pathsCreate: pathsCreateSpy,
      pathsRemove: pathsRemoveSpy,
      pathsRename: pathsRemoveSpy,
    };
    const params = {
      userId: testId
    };
    const context = {
      muiTheme: getMuiTheme()
    };
    const childContextTypes = {
      muiTheme: React.PropTypes.object
    };

    const componentProps = assign({
      params: params,
      actions: mockedActions,
      paths: paths,
      profile: profile,
      userId: testId,
      location: location,
      router: routerSpy,
      editable: editable
    }, props);

    return mount(<Paths {...componentProps} />, { context, childContextTypes });
  }

  it('should render without problems', () => {
    const component = getComponent();
    expect(component).to.exist;
  });

  it('should render the list of goals', () => {
    const component = getComponent();
    const pathItems = component.find('h3[className^="GoalCard"]');
    forEach(paths.list, path => {
      expect(component.findWhere(n => n.text() === path.name).length).to.be.above(0);
    });
  });

  it('should render the list of goal items', () => {
    const component = getComponent();
    forEach(paths.list, path => {
      forEach(path.goals, goal => {
        expect(component.findWhere(n => n.text() === goal.name).length).to.be.above(0);
      });
    });
  });
});
