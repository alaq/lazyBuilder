// Init reduxHelper
import reduxHelper from '../../utils/reduxHelper.js'
const reduxUtil = reduxHelper('ModelForm')

// Include component
import component from './ModelForm.js'

// Include action from Models
import { actions as modelActions } from '../Models/component.js'

// Action Definitions
const NAME_CHANGE = reduxUtil.defineAction('NAME_CHANGE')
const ADD_FIELD = reduxUtil.defineAction('ADD_FIELD')

// Initial State
const initialState = {
  name: '',
  fields: [{ id: 123 }]
}

// Make Actions
const actions = {
  nameChange: reduxUtil.createAction(NAME_CHANGE),
  addField: reduxUtil.createAction(ADD_FIELD),
  saveModel: modelActions.saveModel
}

// Make reducer
const reducer = reduxUtil.createReducer(
  {
    [NAME_CHANGE]: function(state, action) {
      let newState = { ...state, ...action.payload }
      return newState
    },
    [ADD_FIELD]: function(state, action) {
      let newState = { ...state }
      newState.fields.push(action.payload)
      return newState
    }
  },
  initialState
)

// Export
export { component, actions, reducer }
