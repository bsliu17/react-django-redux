// import { todoReducer } from './todos';
import { routerReducer, RouterState } from 'react-router-redux'
import { combineReducers } from 'redux'
import { monsterReducer, MonsterModel } from '../containers/App/reducer'

export interface RootState {
  // todos: RootState.TodoState;
  router: RouterState
  monsters: MonsterModel
}

export namespace RootState {
  export type MonsterState = MonsterModel
}

// NOTE: current type definition of Reducer in 'react-router-redux' and 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<RootState>({
  //   todos: todoReducer as any,
  router: routerReducer as any,
  monsters: monsterReducer as any
})
