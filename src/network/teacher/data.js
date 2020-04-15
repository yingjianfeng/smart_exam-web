import axios from './../axios'


/*查*/
export function deleteFile(data) {
  return axios({
    url: '/data/deleteFile',
    method: 'post',
    data: {
      date: data.date,
      description: data.description,
      id: data.id,
      name: data.name,
      p_id: data.p_id,
      pname: data.pname,
      type: data.type,
      url: data.url
    }
  })
}

export function updateDesById(id,desc) {
  return axios({
    url: '/data/updateDesById',
    method: 'post',
    data: {
      description: desc,
      id: id,
    }
  })
}