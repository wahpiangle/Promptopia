import { connectToDB } from "@utils/database";
import Prompt from "@models/promptModel";

export const GET = async(request, { params }) =>{
    try {
        await connectToDB();
        const prompts = await Prompt.find({
            creator: params.id //find prompts that match the id in the params (api/users/[id]/posts)
        }).populate('creator');
        return new Response(JSON.stringify(prompts), {
            status:200
        })
    } catch (error) {
        return new Response("Failed to fetch prompts", {status:500})
    }
}