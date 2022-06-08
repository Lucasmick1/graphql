const userResolvers = {
    Query: {
        users: (root, _, { dataSources }) => dataSources.usersAPI.getUsers(),
        user: (root, {id}, {dataSources}) => dataSources.usersAPI.getUser(id)
    },
    Mutation: {
        includeUser: (root, user, {dataSources}) => dataSources.usersAPI.includeUser(user),
        updateUser: (root, update, {dataSources}) => dataSources.usersAPI.updateUser(update)
    }

}

module.exports = userResolvers