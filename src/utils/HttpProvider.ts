export type successResponse = {
    account: {
        email: string
        firstname: string
        lastname: string
    }
}

export type HttpResponse = {
    errors: {} | []
    response: successResponse
}

export const HttpProvider =  async (token: string, endpoint: string): Promise<HttpResponse> => {
    
    var headers = new Headers()
    headers.append("x-rapidapi-host", "v3.football.api-sports.io")
    headers.append("x-rapidapi-key", token)

    const requestOptions: RequestInit = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    }

    const response = await fetch(`https://v3.football.api-sports.io/${endpoint}`, requestOptions)
    return await response.json()
}