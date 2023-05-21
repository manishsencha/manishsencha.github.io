import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
import axios from 'axios';
import { RepoResponse } from "../types/GHRepoTypes";

export default async function (request: GatsbyFunctionRequest, response: GatsbyFunctionResponse) {
    try {
        let res = await axios.get("https://api.github.com/users/manishsencha/repos")
        let data: any = res.data;
        // console.log(data.length);
        return response.status(200).json({ data })
    }
    catch (e) {
        return response.status(500).json(e);
    }
}