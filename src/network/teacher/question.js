import axios from './../axios'


export function qryAllQuestionInfo() {
  return axios({
    url: '/question/qryAllQuestionInfo',
    method: 'post',
    data: {}
  })
}

export function qryQuestionInfoById(id) {
  return axios({
    url: '/question/qryQuestionInfoById',
    method: 'post',
    data: {
      id: id
    }
  })
}

export function updateQuestionInfoById(questionInfo) {
  return axios({
    url: '/question/updateQuestionInfoById',
    method: 'post',
    data: {
      id: questionInfo.id,
      type: questionInfo.type,
      content: questionInfo.content,
      option1: questionInfo.option1,
      option2: questionInfo.option2,
      option3: questionInfo.option3,
      option4: questionInfo.option4,
      answer: questionInfo.answer,
      grade: questionInfo.grade,
      classify: questionInfo.classify,
    }
  })
}


export function deleteQuestionInfoById(id) {
  return axios({
    url: '/question/deleteQuestionInfoById',
    method: 'post',
    data: {
      id: id,
    }
  })
}

export function qryQClassify() {
  return axios({
    url: '/question/qryQClassify',
    method: 'post',
    data: {}
  })
}

export function qryAllGrade() {
  return axios({
    url: '/qryAllGrade',
    method: 'get',
  })
}

export function addQuestion(question) {
  return axios({
    url: '/question/addQuestion',
    method: 'post',
    data: {
      content: question.content,
      option1: question.option1,
      option2: question.option2,
      option3: question.option3,
      option4: question.option4,
      answer: question.answer,
      type: question.type,
      grader_id: question.grade_id,
      classify_id: question.classify,
      school_id: question.school
    }
  })
}
export function qryAllSchool() {
  return axios({
    url: '/qryAllSchool',
    method: 'get',
    
  })
}

export function qryEcharts1And2() {
  return axios({
    url: '/question/qryEcharts1And2',
    method: 'post',
  })
}
export function qryEcharts3(name,date) {
  return axios({
    url: '/question/qryEcharts3',
    method: 'post',
    data: {
      name:name,
      date:date
    }
  })
}