export const handler = {
    returnSuccess: x => ({
        statusCode: 200,
        body: JSON.stringify(x)
    })
}

export default {
    handler: handler
}