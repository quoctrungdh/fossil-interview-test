interface IHttpService {
    get: (endpoint: string, params: Object) => Promise<Object>
}

const baseUrl = process.env.baseUrl || "http://localhost:3000";

class HttpService implements IHttpService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    get = (endpoint: string, params: Object) => {
        return fetch(this.baseUrl + endpoint, params)
            .then(res => res.json());
    }
}

export default new HttpService(baseUrl);