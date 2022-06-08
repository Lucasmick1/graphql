const userResolvers = require('../querys/user/resolvers/userResolver')
const roleResolvers = require('../querys/role/resolvers/roleResolver')

const resolvers = [
    userResolvers,
    roleResolvers
]

module.exports = resolvers