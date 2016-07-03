import ArticleModel from "../../../dao/models/article.model";

export  default
{
    index(request, response)
    {

        ArticleModel.paginate(
            {
                page: request.query.Page || 1,
                limit: request.query.perPage || 10
            }, (error, articles)=> {

                if (!error || articles) {
                    return response.status(200).send({
                        status_code: 200,
                        status_text: "OK",
                        pages: {
                            total: articles.total,
                            page: articles.page,
                            pages: articles.pages
                        },
                        data: articles.docs
                    });

                }
            }
        )

    }
}