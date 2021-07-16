module.exports = app=>{
    const { router, controller } = app
    router.get('/admin/index', controller.admin.main.index)
    router.post('/admin/checkLogin', controller.admin.main.checkLogin)
    router.post('/admin/addArticle', controller.admin.main.addArticle)
    router.post('/admin/updateArticle',controller.admin.main.updateArticle)
}