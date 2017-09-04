import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { routerShape } from 'react-router/lib/PropTypes';
import ContentPaste from 'material-ui/svg-icons/content/content-paste';
import Path from './Path';
import UserCard from './UserCard';
import AddGoalsModal from './AddGoalsModal';
import AddExistingGoalsModal from './AddExistingGoalsModal';
import Loading from './Loading';
import Tempo from './Tempo';

let styles = {};

function loadData(props) {
  const { actions, params } = props;
  actions.fetchProfile(params.userId);
  actions.pathsList(params.userId);
  actions.fetchGoals();
}

class Profile extends Component {

  componentWillMount() {
    loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const oldUserId = this.props.params.userId;
    const nextUserId = nextProps.params.userId;

    if (oldUserId !== nextUserId) {
      loadData(nextProps);
    }
  }

  handleSubmit() {
    const { actions, addModalParameters: { path }, paths: { list: [{ id }] } } = this.props;

    if (!path) {
      actions.updateAddGoalsField('path', id);
    }

    actions.addGoalToPathRequest().then(() => actions.resetGoalModal());
  }

  renderAddGoalModal() {
    const { addModalParameters, actions, paths } = this.props;
    const parameters = {
      ...addModalParameters,
      paths: paths.list,
    };

    return (
      <AddGoalsModal
        parameters={parameters}
        onFieldChange={(field, value) => actions.updateAddGoalsField(field, value)}
        onSubmit={() => this.handleSubmit()}
        onCancel={() => actions.resetGoalModal()}
        usersGoal
        editable
      />
    );
  }

  render() {
    const {
      actions,
      params,
      paths,
      goals,
      profiles,
      loggedInUser,
      addExistingGoalsModalParameters,
      isLoading,
    } = this.props;

    const userId = params.userId;
    const editable = loggedInUser.isAdmin || loggedInUser.id === userId;
    const skills = [
      { name: 'mongoDB', id: 'c390be96-168b-4f42-a0cd-933fbc46e249' },
      { name: 'React', id: 'c390be96-168b-4f42-a0cd-933fbc46e240' },
    ];
    let addGoalButton = null;
    if (editable) {
      addGoalButton = (
        <div>
          <FloatingActionButton
            style={styles.addCustomButton}
            onClick={() => actions.showGoalsModal(true)}
          >
            <ContentAdd />
          </FloatingActionButton>
          <AddExistingGoalsModal
            parameters={addExistingGoalsModalParameters}
            paths={paths.list}
            goals={goals}
            profile={profiles.profile}
            actions={actions}
          />
          <FloatingActionButton
            style={styles.addExistingButton}
            onClick={() => actions.showAddExistingGoalsModal(true)}
          >
            <ContentPaste />
          </FloatingActionButton>
          { this.renderAddGoalModal() }
        </div>
      );
    }

    return (
      <Loading loading={isLoading}>
        <div style={styles.wrapper}>
          <div style={styles.userWrapper}>
            <UserCard user={profiles.profile} router={this.props.router} key={userId} />
            <Tempo paths={paths} />
          </div>
          <div style={styles.skillsWrapper}>
            {skills.map(skill => (
              <Paper key={skill.id} style={styles.skill} zDepth={2} circle >
                <span style={styles.skillTitle}>{skill.name}</span>
              </Paper>
            ))}
          </div>
          <Path
            actions={actions}
            paths={paths}
            editable={editable}
            profile={profiles.profile}
          />
          {addGoalButton}
        </div>
      </Loading>
    );
  }
}

Profile.propTypes = {
  actions: React.PropTypes.shape({
    fetchProfile: React.PropTypes.func.isRequired,
    pathsList: React.PropTypes.func.isRequired,
  }).isRequired,
  router: routerShape.isRequired,
  params: React.PropTypes.shape({
    userId: React.PropTypes.string,
  }).isRequired,
  paths: React.PropTypes.shape({
    list: React.PropTypes.array.isRequired,
  }).isRequired,
  profiles: React.PropTypes.shape({
    profile: React.PropTypes.object.isRequired,
  }).isRequired,
  loggedInUser: React.PropTypes.shape({
    isAdmin: React.PropTypes.bool.isRequired,
    id: React.PropTypes.string.isRequired,
  }).isRequired,
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
  goals: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  addExistingGoalsModalParameters: React.PropTypes.shape({
    showModal: React.PropTypes.bool,
    showSpinner: React.PropTypes.bool,
    selectedPath: React.PropTypes.string,
    selectedGoal: React.PropTypes.object,
  }).isRequired,
  isLoading: React.PropTypes.bool,
};

export default Profile;

styles = {
  wrapper: {
    padding: '100px 0 0 0',
  },
  skill: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '80px',
    height: '80px',
    margin: '20px 20px 50px',
    padding: '20px',
    textAlign: 'center',
    color: '#5f5f5f',
  },
  skillTitle: {
    display: 'flex',
    flexGrow: '1',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: '12px',
    fontWeight: '200',
    padding: '5px',
    marginTop: '10px',
  },
  skillsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 'auto',
    width: '90%',
    maxWidth: '1150px',
  },
  userWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 'auto',
    width: '90%',
    maxWidth: '1150px',
  },
  addCustomButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
  },
  addExistingButton: {
    position: 'fixed',
    bottom: '20px',
    right: '100px',
  },
};
