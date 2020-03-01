import { STATUS_REST_PAUSE, STATUS_REST_RUNNING } from '../constant'

export const isRest = status =>
  [STATUS_REST_PAUSE, STATUS_REST_RUNNING].includes(status)
