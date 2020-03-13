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

/*取消点赞*/
export function deleteLikeByDiscussion(id) {
  return axios({
    url: '/discussion/deleteLikeByDiscussion',
    method: 'get',
    params: {
      discussion_id: id
    }
  })
}

/*添加点赞*/
export function addLikeByDiscussion(id) {
  return axios({
    url: '/discussion/addLikeByDiscussion',
    method: 'get',
    params: {
      discussion_id: id
    }
  })
}


/*查询动态下的评论*/

export function qryByParentId(discussion_id) {
  return axios({
    url: '/discussion/qryByParentId',
    method: 'get',
    params: {
      parent_id: discussion_id
    }
  })
}