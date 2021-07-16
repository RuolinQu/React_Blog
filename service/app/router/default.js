module.exports = app =>{
    const {router,controller} = app
    router.get('/default/index',controller.default.home.index)
    router.get('/default/getArticle', controller.default.home.getArticle)
    router.get('/default/getArticleById/:id',controller.default.home.getArticleById)
}



//  const test = app =>{
//     const {router,controller} = app
//     router.get('/default/index',controller.default.home.index)
//  }

//  module.exports = test