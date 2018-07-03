/** TodoMVC model definitions **/

export interface MonsterModel {
  name: string
}

export namespace MonsterModel {
  export enum Filter {
    SHOW_ALL = 'all',
    SHOW_ACTIVE = 'active',
    SHOW_COMPLETED = 'completed'
  }
}
