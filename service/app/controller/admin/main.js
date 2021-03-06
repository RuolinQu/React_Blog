
'use strict';

const Controller = require('egg').Controller

class MainController extends Controller{

    async index(){
        this.ctx.body='hi api'
    }


    async checkLogin() {
        let userName = this.ctx.request.body.userName
        let password = this.ctx.request.body.password
        const sql = " SELECT userName FROM admin_user WHERE userName = '"+userName +
                    "' AND password = '"+password+"'"
  
        const res = await this.app.mysql.query(sql)
        if(res.length>0){
            //login, store seesion 
            let openId=new Date().getTime()
            this.ctx.session.openId=openId 
            this.ctx.body={'data':'success','openId':openId}
  
        }else{
            this.ctx.body={data:'failed'}
        }
    }

    async logOff(){
        this.ctx.session=null
        console.log("logging off")
        this.ctx.body = {
            data:this.ctx.session
        }
    }

    async addArticle() {
        let tmpArticle = this.ctx.request.body
        const result = await this.app.mysql.insert('article',tmpArticle)
        const insertSuccess = result.affectedRows === 1
        const insertId = result.insertId
        this.ctx.body={
            isScuccess:insertSuccess,
            insertId:insertId
        }
    }

    async updateArticle() {
        let tmpArticle = this.ctx.request.body
        
        const result = await this.app.mysql.update('article',tmpArticle)
        const updateSuccess = result.affectedRows === 1
        console.log(updateSuccess)
        this.ctx.body={
            isScuccess:updateSuccess
        }   
    }
    async getArticleList(){
        console.log(this.ctx.session,"!!!")
        let sql = 'SELECT article.id as id,'+
                    'article.title as title,'+
                    'article.introduce as introduce '+
                    'FROM article '+
                    'ORDER BY article.id DESC '
    
        const result = await this.app.mysql.query(sql)
        this.ctx.body = {
            list:result
        }
    }
    async getArticleById() {
        
        let id = this.ctx.params.id
        let sql = 'SELECT article.id as id,'+
                'article.title as title,'+
                'article.introduce as introduce,'+
                'article.article_content as article_content '+
                'FROM article '+
                'WHERE article.id='+id
        const result = await this.app.mysql.query(sql)
        this.ctx.body = {
            data:result
        }
    }
}

module.exports = MainController