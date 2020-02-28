import axios from './axios'


export function login(people) {
  return axios( {
    url: '/login',
    method: 'post',
    data:{
      account: people.account,
      password: people.password,
      type: people.type
    }
  })
}

export function register(people) {
  return axios({
    url: '/register',
    method: 'post',
    data:{
      account: people.account,
      password: people.password,
      type: people.type,
      grade_id: people.grade,
      school_id: people.school,
    }
})
}

export function qryAllGrade() {
  return axios({
    url: '/qryAllGrade',
  })
}

export function qryAllSchool() {
  return axios({
    url: '/qryAllSchool',
  })
}

