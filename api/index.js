const { ApolloServer } = require('apollo-server')

const schemas = require('./schemas/schemas')
const resolvers = require('./resolvers/resolvers')
const dataSources = require('./datasources/datasources')


const server = new ApolloServer({
    typeDefs: schemas,
    resolvers,
    dataSources
})

server.listen().then(({ port }) => {
    console.log(`Rondando na porta ${port}`)
})