function tempo(request, response) {
    const dynamicDate = new Date();

    response.json({
        date: dynamicDate.toGMTstring()
    })
}

export default tempo