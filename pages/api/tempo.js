function tempo(request, response) {
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const primaryemailResponse = await fetch(`https://api.convertkit.com/v3/account?api_secret=${apiSecret}`);
    const primaryemailResponseJson = await primaryemailResponse.json();
    const email = primaryemailResponseJson.primary_email_address;

    response.json({
        date: dynamicDate.toGMTString(),
        email: email
    })
}

export default tempo;