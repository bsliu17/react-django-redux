import { createAction } from 'redux-actions'
import { MonsterModel } from './model'

export namespace MonsterActions {
  export enum Type {
    CHANGE_NAME = 'CHANGE_NAME'
  }

  export const changeName = createAction<MonsterModel['name']>(Type.CHANGE_NAME)
}

export type MonsterActions = Omit<typeof MonsterActions, 'Type'>
