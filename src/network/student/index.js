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


export function groupByPIdQry() {
  return axios({
    url: '/discussion/groupByPIdQry',
    method: 'get',
  })
}


/*查动态*/
export function qryQGroupByPid() {
  return axios({
    url: '/question/qryQGroupByPid',
    method: 'post',
  })
}

/*查动态*/
export function qryByGid(gid) {
  return axios({
    url: '/question/qryByGid',
    method: 'post',
    data: {
      gid: gid,
    }
  })
}

/*查动态*/
export function updateQGroupRemarkById(id, remark) {
  return axios({
    url: '/question/updateQGroupRemarkById',
    method: 'post',
    data: {
      id: id,
      remark: remark
    }
  })
}



export function reply(discussion) {
  return axios({
    url: '/discussion/reply',
    method: 'post',
    data: {
      parent_id:discussion.parent_id,
      content:discussion.content
    }
  })
}









