import axios from "axios";
export default function axiosHelper() {
    if (process.env.NODE_ENV == 'development') {
        return axios.create({
            headers: {
                "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`
            }
        });
    }
    return axios.create()
}