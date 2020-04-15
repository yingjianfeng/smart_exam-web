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

export function submitAnswer(questions, time) {
  return axios({
    url: '/question/submitAnswer',
    method: 'post',
    data: {
      questions: questions,
      time: time
    }
  })
}

export function collect(qid) {
  return axios({
    url: '/question/insertByQidAndPid',
    method: 'post',
    data: {
      q_id: qid,
    }
  })
}


export function deleteCollect(qid) {
  return axios({
    url: '/question/deleteByQidAndPid',
    method: 'post',
    data: {
      q_id: qid,
    }
  })
}

export function qryAllGrade() {
  return axios({
    url: '/qryAllGrade',
    method: 'get',
  })
}


