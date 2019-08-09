export function fetchPopularRepo(language) {
    const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)

    return fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
            if (!data.items) {
                throw new ErrorEvent(data.message)
            }
            return data.items
        })
}
