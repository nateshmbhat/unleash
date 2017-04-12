import React, { Component } from 'react';
import map from 'lodash/map';
import flatten from 'lodash/flatten';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import GoalCard from './GoalCard';
import AddGoalsModal from './AddGoalsModal';

let styles = {};

class Goals extends Component {
  componentDidMount() {
    this.props.actions.fetchGoals();
  }

  getTags() {
    const { list } = this.props;
    const goalsWithTags = list.filter(goal => (goal.tags ? goal.tags.length > 0 : false));
    return flatten(goalsWithTags.map(goal => goal.tags));
  }

  renderGoals(goals) {
    return map(goals, goal => <GoalCard key={goal.id} goal={goal} />);
  }

  renderAddGoalModal() {
    const { actions, addModalParameters } = this.props;

    return (
      <AddGoalsModal
        parameters={addModalParameters}
        tagsOptions={this.getTags()}
        onSubmit={() => actions.addGoalRequest()}
        onCancel={() => actions.resetGoalModal()}
        onFieldChange={(field, value) => actions.updateAddGoalsField(field, value)}
      />
    );
  }

  render() {
    const { list, actions } = this.props;
    return (
      <div>
        <div style={styles.goalsWrapper}>
          {this.renderGoals(list)}
        </div>
        <FloatingActionButton
          style={styles.addButton}
          onClick={() => actions.showGoalsModal(true)}
        >
          <ContentAdd />
        </FloatingActionButton>
        {this.renderAddGoalModal()}
      </div>
    );
  }
}

Goals.propTypes = {
  actions: React.PropTypes.shape({
    fetchGoals: React.PropTypes.func.isRequired,
    showGoalsModal: React.PropTypes.func.isRequired,
    addGoalRequest: React.PropTypes.func.isRequired,
  }).isRequired,
  list: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  addModalParameters: React.PropTypes.shape({
    showModal: React.PropTypes.bool.isRequired,
    showSpinner: React.PropTypes.bool,
    name: React.PropTypes.string,
    description: React.PropTypes.string,
    tags: React.PropTypes.array,
    icon: React.PropTypes.string,
    level: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
  }).isRequired,
};

styles = {
  goalsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 'auto',
    width: '90%',
    maxWidth: '1150px',
  },
  addButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
  },
};

export default Goals;
