import request from 'superagent'

export function getFeedback() {
  return request.get('/feedback').then((res) => res.body.feedback)
}
