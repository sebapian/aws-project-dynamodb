import request from 'superagent'

export function getFeedback() {
  return request.get('/feedback').then((res) => res.body.feedback)
}

export function sendFeedback(feedback) {
  return request
    .post(`/feedback`)
    .send(feedback)
    .then((res) => res.body)
}
