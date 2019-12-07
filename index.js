const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const PornHub = require('@bowwow/pornhub_api');

var get_porn_info  = () => {
  return("VVVVVVVVV")
  const ph = new PornHub();
    ph.search({category:req.query.category}).then(infos=>{
      let random_video = infos.videos[Math.floor(Math.random() * infos.videos.length)]
      var return_infos = {
        title: random_video.title,
        video_url: random_video.url,
        thumb: random_video.thumb,
        rating: Math.floor(random_video.rating),
        views: random_video.views,
      };
      console.log("videos_array.length")
      videos_array.push(return_infos);
      return("SAVE")
    }).catch(err=>{
      res.json
    });
}

var porn_array = []; 
express()
  .use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
  })
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/test/', (req, res) => {
    var videos_array = []
    const ph = new PornHub();
    ph.search({category:req.query.category}).then(infos=>{
      let random_video = infos.videos[Math.floor(Math.random() * infos.videos.length)]
      
      let return_info = {categories: [], tags: []};
      for (let i = 0; i < random_video.categories.length; i++) {
        return_info.categories.push(random_video.categories[i].category)
      }
      for (let i = 0; i < random_video.tags.length; i++) {
        return_info.tags.push(random_video.tags[i].tag_name)
      }
      res.json(return_info)
    }).catch(err=>{
      res.json
    });
  }) // 追加
  .get('/c/', (req, res) => {
    var videos_array = []
    const ph = new PornHub();
    ph.search({category:req.query.category}).then(infos=>{
      let random_video = infos.videos[Math.floor(Math.random() * infos.videos.length)]
      var return_infos = {
        title: random_video.title,
        video_url: random_video.url,
        thumb: random_video.thumb,
        rating: Math.floor(random_video.rating),
        views: random_video.views,
      };
      console.log(get_porn_info())
      videos_array[return_infos];
      res.json(return_infos)
    }).catch(err=>{
      res.json
    });
  }) // 追加
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))