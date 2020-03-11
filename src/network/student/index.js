import axios from './../axios'


export function insertDiscussion(discussion) {
  return axios({
    url: '/discussion/insert',
    method: 'post',
    data: {
      content: discussion.content,
      imgs: discussion.imgs,
    }
  })
}

export function deleteImg(filename) {
  return axios({
    url: '/discussion/imgDelete',
    method: 'post',
    data: {
      filename: filename,
    }
  })
}

/*查动态*/
export function qryNotParentId() {
  return axios({
    url: '/discussion/qryNotParentId',
    method: 'post',
  })
}

