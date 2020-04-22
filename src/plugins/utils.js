function isExternalURL(url)
{
    // eslint-disable-next-line no-useless-escape
    var pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    return pattern.test(url);
}

function getImageURL(url)
{
    if(!url)
    {
        return "/images/backgroun.jpg"
    }

    if(isExternalURL(url))
    {
        return url;
    }
    else
    {
        return "/images"+url;
    }
}

export {isExternalURL,getImageURL};