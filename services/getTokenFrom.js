const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if(authorization && authorization.toLowerCase().startsWith('bearer ')){
        return token.substring(7)
    }
    return null
}

export default {
    getTokenFrom
}