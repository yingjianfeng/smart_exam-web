import axios from 'axios'


export function login(people) {
  return axios.post('http://localhost/login', {
    account: people.account,
    password: people.password,
    type: people.type
  })
}


export function qryAllGrade() {
  return axios.get('http://localhost/qryAllGrade')
}
export function qryAllSchool() {
  return axios.get('http://localhost/qryAllSchool')
}

