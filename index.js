const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const PornHub = require('@bowwow/pornhub_api');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/g/', (req, res) => {
    const ph = new PornHub();
    ph.search({search:'porn'}).then(infos=>{
      console.log(infos.videos[0].title)
      var ppap = infos.videos[0].title;
      res.json(ppap);
    }).catch(err=>{
      res.json
    }) ;
  }) // 追加
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))