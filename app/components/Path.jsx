import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import map from 'lodash/map';
import * as PathsActions from '../actions/PathsActions';
import GoalCard from './GoalCard';
import PathHeader from './PathHeader';

let styles = {};

class Path extends Component {
  componentWillMount() {
    const { actions, path } = this.props;
    actions.pathGoalsList(path.userId, path.id);
  }

  render() {
    const { actions, path, editable, paths, profiles } = this.props;

    return (
      <div key={path.id}>
        <PathHeader path={path} actions={actions} showActions={editable} />
        <div style={styles.pathsWrapper}>
          {map(paths.goals[path.id], goal => (
            <GoalCard
              key={goal.id}
              goal={goal}
              path={path}
              actions={actions}
              editable={editable}
              paths={paths.list}
              profile={profiles.profile}
              usersGoal
            />
          ))}
        </div>
      </div>
    );
  }
}

Path.propTypes = {
  actions: React.PropTypes.shape({
    pathGoalsList: React.PropTypes.func,
  }).isRequired,
  path: React.PropTypes.shape({
    id: React.PropTypes.string,
    userId: React.PropTypes.string,
    name: React.PropTypes.string,
  }),
  editable: React.PropTypes.bool.isRequired,
  profiles: React.PropTypes.shape({
    profile: React.PropTypes.object.isRequired,
  }).isRequired,
  paths: React.PropTypes.shape({
    goals: React.PropTypes.object,
  }).isRequired,
};

styles = {
  pathsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 'auto',
    width: '90%',
    maxWidth: '1150px',
  },
};

function mapStateToProps(state) {
  const { paths, profiles } = state;
  return {
    profiles,
    paths,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...PathsActions,
    }, dispatch),
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Path));
