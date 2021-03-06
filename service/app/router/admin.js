module.exports = app=>{
    const { router, controller } = app
    var adminauth = app.middleware.adminauth()
    router.get('/admin/index', controller.admin.main.index)
    router.post('/admin/checkLogin', controller.admin.main.checkLogin)
    router.get('/admin/logOff',adminauth, controller.admin.main.logOff)
    router.post('/admin/addArticle',adminauth, controller.admin.main.addArticle)
    router.post('/admin/updateArticle',adminauth,controller.admin.main.updateArticle)
    router.get('/admin/getArticleList',adminauth, controller.admin.main.getArticleList)
    router.get('/admin/getArticleById/:id',adminauth, controller.admin.main.getArticleById)
}
