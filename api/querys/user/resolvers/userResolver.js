const { GraphQLScalarType } = require('graphql')

const userResolvers = {
    RoleTypes: {
        ESTUDANTE: "ESTUDANTE", // mapeia os valores enumerados para um valor que queremos utilizar
        COORDENACAO: "COORDENACAO",
        DOCENTE: "DOCENTE"
    },
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'string de data e hora no formato ISO-8601',
        serialize: value => value.toISOString(),
        parseValue: value => new Date(value),
        parseLiteral: ast => new Date(ast.value)
    }),
    Query: {
        users: (root, _, { dataSources }) => dataSources.usersAPI.getUsers(),
        user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUser(id)
    },
    Mutation: {
        includeUser: (root, { user }, { dataSources }) => dataSources.usersAPI.includeUser(user),
        updateUser: (root, update, { dataSources }) => dataSources.usersAPI.updateUser(update),
        deleteUserById: (root, { id }, { dataSources }) => dataSources.usersAPI.deleteUserById(id)
    }

}

module.exports = userResolvers