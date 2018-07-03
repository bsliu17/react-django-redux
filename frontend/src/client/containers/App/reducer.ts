import { handleActions } from 'redux-actions'
import { RootState } from '../../reducers'
import { MonsterActions } from './actions'
import { MonsterModel } from './model'

export { MonsterModel }

const initialState: MonsterModel = {
  name: 'pikachut'
}

export const monsterReducer = handleActions<RootState.MonsterState, MonsterModel>(
  {
    [MonsterActions.Type.CHANGE_NAME]: (state, action: any) => {
      return {
        ...state,
        name: action.payload
      }
    }
  },
  initialState
)
