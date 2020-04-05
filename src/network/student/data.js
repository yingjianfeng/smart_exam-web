import axios from './../axios'



/*查*/
export function qryAll() {
  return axios({
    url: '/data/qryAll',
    method: 'post',
  })
}

