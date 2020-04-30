import axios from '../axios'



export function addArticle(article) {
  return axios({
    url: '/article/addArticle',
    method: 'post',
    data: {
      name:article.name,
      content:article.content,
      introduce:article.introduce
    }
  })
}



