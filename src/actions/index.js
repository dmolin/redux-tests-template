import { SAVE_COMMENT } from './types'

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    comment: comment
  }
}
