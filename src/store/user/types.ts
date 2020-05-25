export interface User {
  id: string
  name: string
}

export interface InitialState {
  loggedIn: boolean
  user: User | undefined
}

export enum ActionTypeKeys {
  USER_SET = 'USER_SET',
  USER_DELETE = 'USER_DELETE',
}

interface SetUser {
  readonly type: ActionTypeKeys.USER_SET
  readonly payload: {
    user: User
  }
}

interface DeleteUser {
  readonly type: ActionTypeKeys.USER_DELETE
}

export type ActionTypes = SetUser | DeleteUser
