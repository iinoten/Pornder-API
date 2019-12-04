const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const PornHub = require('@bowwow/pornhub_api');

express()
  .use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
  })
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/c/', (req, res) => {
    const ph = new PornHub();
    ph.search({category:req.query.genre}).then(infos=>{
      let random_video = infos.videos[Math.floor(Math.random() * infos.videos.length)]
      var return_infos = {
        title: random_video.title,
        url: random_video.url,
        thumbnail: random_video.thumb,
        rating: Math.floor(random_video.rating)
      };
      res.json(return_infos);
    }).catch(err=>{
      res.json
    }) ;
  }) // 追加
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))