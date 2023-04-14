const client = require('../openSearch')

class CommentsController {
    async getAll(req, res) {
        let params = req.query
        const body = params._search ? {
            query: {
                multi_match: {
                    query: params._search,
                    fields: ['name', 'body', 'email']
                },
            },
        }
        : {
            query: {
            match_all: {}
            }
        }

        let response = await client.client.search(
            {
                index: 'test',
                size: params._limit,
                from: params._limit * (params._page - 1),
                body
            })
        let result = response.body.hits.hits.map(el => el._source)
        return res.json({
            results: result,
            totalCount: response.body.hits.total.value
        })
    }

    async getOne(req, res) {
        let id = Number(req.params.id);
        const body = {
                query: {
                    term: {
                        ['id']: id
                    },
                },
            }
        let response = await client.client.search(
            {
                index: 'test',
                body
            })
        return res.json(response.body.hits.hits[0]._source)
    }
}

module.exports = new CommentsController()