export interface Resource {
  id: string
  name: string
  minimumBookingDuration: number
  maximumBookingDuration: number
  bookingDurationStep: number
}

export interface InitialState {
  loaded: boolean
  loading: boolean
  resource: Resource
}

export enum ActionTypeKeys {
  RESOURCE_SET = 'RESOURCE_SET',
  RESOURCE_SET_STATUS = 'RESOURCE_SET_STATUS',
}

interface SetResource {
  readonly type: ActionTypeKeys.RESOURCE_SET
  readonly payload: {
    resource: Resource
  }
}

interface SetStatus {
  readonly type: ActionTypeKeys.RESOURCE_SET_STATUS
  readonly payload: {
    loaded: boolean
    loading: boolean
  }
}

export type ActionTypes = SetResource | SetStatus
