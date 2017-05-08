import { expect } from 'chai';
import skillReducer from '../skillsReducer';
import { SKILL } from '../../actions/SkillActions';


describe('Skill Reducer', () => {

  const initialState = {
    list: [],
    resourceList: [],
    voteList: [],
    resourcesLoading: false,
    isLoading: false,
    addSkillModal: {
      showModal: false,
      showSpinner: false,
      name: '',
    },
  };

  it('should return the skill reducer default state', () => {
    expect(skillReducer()).to.deep.equal(initialState);
  });

  it('should return the updated vote list in the state object and should be a pure function', () => {
    const currentState = {
      list: [
        {
          slug: 'mongodb',
          createdAt: 1490955335397,
          id: 'faed9150-15fa-11e7-a58e-d7bb1dd5b8b9',
          name: 'MongoDB',
          updatedAt: 1490955335397,
        }
      ],
      resourceList: [
        {
          authorId: '114634487399949912483',
          createdAt: 1491391625404,
          description: 'ojhojoj',
          id: 'cc096fc0-19f2-11e7-bd17-131033301cf0',
          skillId: 'faed9150-15fa-11e7-a58e-d7bb1dd5b8b9',
          type: 'video',
          updatedAt: 1491391625404,
          url: 'oijoj',
        }
      ],
      voteList: {
        'cc096fc0-19f2-11e7-bd17-131033301cf0': [],
      },
      resourcesLoading: false,
      isLoading: false,
      addSkillModal: {
        showModal: false,
        showSpinner: false,
        name: '',
      }
    };

    const action = {
      resourceId: 'cc096fc0-19f2-11e7-bd17-131033301cf0',
      type: SKILL.VOTE_RESOURCE.SUCCESS,
      vote: {
        authorId: '103989332990951105247',
        createdAt: 1494201997688,
        resourceId: 'cc096fc0-19f2-11e7-bd17-131033301cf0',
        skillId: 'faed9150-15fa-11e7-a58e-d7bb1dd5b8b9',
        vote: 1,
      }
    };

    // Ensure we don't mutate the state object
    Object.freeze(currentState);

    const resultState = skillReducer(currentState, action);
    expect(resultState.voteList).to.deep.equal({
      'cc096fc0-19f2-11e7-bd17-131033301cf0': [{
        authorId: '103989332990951105247',
        createdAt: 1494201997688,
        resourceId: 'cc096fc0-19f2-11e7-bd17-131033301cf0',
        skillId: 'faed9150-15fa-11e7-a58e-d7bb1dd5b8b9',
        vote: 1,
      }]
    });
  });
});
