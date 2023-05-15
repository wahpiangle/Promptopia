import { connectToDB } from "@utils/database";
import Prompt from "@models/promptModel";

export const GET = async(request) =>{
    try {
        await connectToDB();
        const prompts = await Prompt.find({}).populate('creator'); //to also retrieve the user that posted the post
        return new Response(JSON.stringify(prompts), {
            status:200
        })
    } catch (error) {
        return new Response("Failed to fetch prompts", {status:500})
    }
}