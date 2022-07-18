class Article {

    getArticleComments() {
        return this.comments;
    }
}

class Topic {

    getTopicComments() {
        return this.comments;
    }
}

const hasComments = (commentable) => {
    if (commentable instanceof Article) {
        return commentable.getArticleComments().length > 0;
    }
    else if (commentable instanceof Topic) {
        return commentable.getTopicComments().length > 0;
    }
}

const article = Article.first();
console.log(hasComments(article));