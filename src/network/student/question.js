import axios from './../axios'


export function qryGradeAndClassify() {
  return axios({
    url: '/question/qryGradeAndClassify',
    method: 'get'
  })
}

export function qryByclassifyIdAndGradeId(classify_id, grade_id) {
  return axios({
    url: '/question/qryByclassifyIdAndGraderId',
    method: 'post',
    data: {
      classify_id: classify_id,
      grade_id: grade_id
    }
  })
}

export function submitAnswer(questions) {
  return axios({
    url: '/question/submitAnswer',
    method: 'post',
    data: {
      questions: questions,
    }
  })
}