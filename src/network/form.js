import axios from './axios'


export function login(people) {
  return axios({
    url: '/login',
    method: 'post',
    data: {
      account: people.account,
      password: people.password,
      role_id: people.role_id
    }
  })
}

export function register(people) {
  return axios({
    url: '/register',
    method: 'post',
    data: {
      name: people.name,
      account: people.account,
      password: people.password,
      role_id: people.role_id,
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




