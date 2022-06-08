const userSchema = require('../querys/user/schema/user.graphql')
const roleSchema = require('../querys/role/schema/role.graphql')

const schemas = [
    userSchema,
    roleSchema
]

module.exports = schemas