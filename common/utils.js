import _ from 'lodash'
function getUrl(url,query){
  if(!query)return url;
  url=url.replace(/:[^/.]*/g,function(val){
    return query[val.slice(1)]||'';
  })
  return url;
}

export function Get(url,data){
    // return fetch(url, {
    //     method: 'Get', 
    //     mode: 'cors', 
    //     redirect: 'follow',
    //     headers: new Headers({
    //         'Content-Type': 'application/json'
    //     })
    // }).then(function(res){
    //     return res.json();
    // })
    return $.ajax({
        url:getUrl(url,data),
        method:'get',
        data:data,
        dataType: 'json',
        contentType: 'application/json',
      })
}


export function Post(url,data){
    // return fetch(url, {
    //     method: 'Post', 
    //     mode: 'cors', 
    //     body:JSON.stringify(data),
    //     redirect: 'follow',
    //     headers: new Headers({
    //         'Content-Type': 'application/json'
    //     })
    // })
    return $.ajax({
        url:getUrl(url,data),
        method:'post',
        data:JSON.stringify(data),
        dataType: 'json',
        contentType: 'application/json',
      })
}


