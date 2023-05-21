import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
import axios from 'axios';
import { RepoResponse } from "../../types/GHRepoTypes";

export default async function handler(request: GatsbyFunctionRequest, response: GatsbyFunctionResponse) {
    try {
        let res = await axios.get("https://api.github.com/users/manishsencha/repos")
        let data: RepoResponse[] = res.data;
        console.log(data.length);
        return response.status(200).json({ length: data.length })
    }
    catch (e) {
        return response.status(500).json(e);
    }
}