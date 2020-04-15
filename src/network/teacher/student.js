import axios from '../axios'



export function qryPeopleQuestionDetail() {
  return axios({
    url: '/question/qryPeopleQuestionDetail',
    method: 'post',
  })
}



