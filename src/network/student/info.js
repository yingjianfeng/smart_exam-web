import axios from './../axios'


/*查*/
export function qryInfo() {
  return axios({
    url: '/info/qryInfo',
    method: 'post',
  })
}

export function updatePassword(oldPwd,newPwd) {
  return axios({
    url: '/info/updatePassword',
    method: 'post',
    data: {
      oldPwd: oldPwd,
      newPwd: newPwd
    }
  })
}
