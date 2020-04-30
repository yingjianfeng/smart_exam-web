import axios from './../axios'

export function qryArticleById(id) {
  return axios({
    url: '/article/qryArticleById',
    method: 'get',
    params:{
      id:id
    }
  })
}

export function qryAll() {
  return axios({
    url: '/article/qryAll',
    method: 'get'
  })
}

