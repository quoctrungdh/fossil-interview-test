import { URL } from "url";

interface IHttpService {
    get: (endpoint: string, params: Object) => Promise<Object>
}

const baseUrl = process.env.baseUrl || "http://localhost:3000";

class HttpService implements IHttpService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private objectToQueryString(obj: any) {
        return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
    }

    get = (endpoint: string, query: Object) => {
        const url = this.baseUrl + endpoint + `?${this.objectToQueryString(query)}`
        return fetch(url)
            .then(res => res.json());
    }
}

export default new HttpService(baseUrl);