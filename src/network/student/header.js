import axios from './../axios'



/*查*/
export function qryInfo() {
  return axios({
    url: '/info/qryInfo',
    method: 'post',
  })
}
