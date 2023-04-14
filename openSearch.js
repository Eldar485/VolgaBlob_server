const { Client } = require('@opensearch-project/opensearch')

module.exports.client = new Client({
    node: process.env.SERVICE_URI,
});