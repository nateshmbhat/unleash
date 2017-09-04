import React, { Component } from 'react';
import map from 'lodash/map';
import RaisedButton from 'material-ui/RaisedButton';
import { Timeline, GoalCard, GoalCardItem } from 'unleash-styles';
import Loading from './Loading';

let styles = {};

class Paths extends Component {

  handleCreatePath() {
    const { actions, profile } = this.props;
    actions.pathsCreate(profile.id);
  }

  renderGoals(path) {
    return map(path.goals, goal => (
      <GoalCardItem key={goal.id} label={goal.name} isComplete={goal.achieved} />
    ));
  }

  renderPath(path) {
    return (
      <GoalCard key={path.id} title={path.name} onClick={() => {}}>
        {this.renderGoals(path)}
      </GoalCard>
    );
  }

  renderCreateAPathButton() {
    const { editable } = this.props;

    let createAPathButton = null;
    if (editable) {
      createAPathButton = (
        <RaisedButton
          label="Create A Path"
          backgroundColor="#8FD694"
          labelColor="#FFFFFF"
          onTouchTap={() => this.handleCreatePath()}
          style={styles.addPathButton}
        />
      );
    }

    return createAPathButton;
  }

  render() {
    const { paths } = this.props;

    if (paths.isLoading) {
      return <Loading />;
    }

    return (
      <Timeline>
        {map(paths.list, path => this.renderPath(path))}
        {this.renderCreateAPathButton()}
      </Timeline>
    );
  }
}

Paths.propTypes = {
  actions: React.PropTypes.shape({
    pathsCreate: React.PropTypes.func,
  }).isRequired,
  profile: React.PropTypes.shape({
    id: React.PropTypes.string,
    fullName: React.PropTypes.string,
    picture: React.PropTypes.string,
  }),
  paths: React.PropTypes.shape({
    goals: React.PropTypes.array,
    list: React.PropTypes.array,
    isLoading: React.PropTypes.boolean,
  }).isRequired,
  editable: React.PropTypes.bool.isRequired,
};

styles = {
  addPathButton: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '20px auto 0 auto',
    width: '40%',
  },
};

export default Paths;
