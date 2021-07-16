'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = 'api...';
    }

    async getArticle() {
        let sql='SELECT article.id as id,'+
        'article.title as title,'+
        'article.introduce as introduce,'+
        'article.thumbs as thumbs '+
        'FROM article'
        const results = await this.app.mysql.query(sql)
        
        this.ctx.body = {
            data:results
        }
    }

    async getArticleById() {
        
        let id=this.ctx.params.id
        
        let sql = 'SELECT article.id as id,' +
        'article.title as title,'+
        'article.introduce as introduce,' +
        'article.article_content as article_content,'+
        'article.thumbs as thumbs '+
        'FROM article ' +
        'WHERE article.id='+id
        
        const results = await this.app.mysql.query(sql)
        
        this.ctx.body = {
            data:results
        }
    }
}



module.exports = HomeController;
