import axios from "axios";
export default function axiosHelper() {
    return axios.create({
        headers: {
            "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`
        }
    });
}