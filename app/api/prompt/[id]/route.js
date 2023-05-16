import { connectToDB } from "@utils/database";
import Prompt from "@models/promptModel";

//GET request to get prompt
export const GET = async(request, {params}) =>{
    try {
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate('creator'); //to also retrieve the user that posted the post
        if(!prompt){
            return new Response("Prompt not found", {status:404})
        }
        return new Response(JSON.stringify(prompts), {
            status:200
        })
    } catch (error) {
        return new Response("Failed to fetch prompts", {status:500})
    }
}

//PATCH request to update prompt
export const PATCH = async(request, {params}) =>{
    const { prompt, tag } = await request.json();
    try {
        await connectToDB();
        const existingPrompt = await Prompt.findById(params.id);

        if(!existingPrompt){
            return new Response("Prompt not found", {status:404})
        }

        existingPrompt.prompt = prompt; //update the prompt found to match the prompt from frontend
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), {status:200})
    } catch (error) {
        return new Response("Failed to update prompt", {status:500})
    }
}

//DELETE request to delete prompt
export const DELETE = async(request, {params}) =>{
    try {
        await connectToDB();
        const existingPrompt = await Prompt.findById(params.id);

        if(!existingPrompt){
            return new Response("Prompt not found", {status:404})
        }

        await existingPrompt.remove();

        return new Response(JSON.stringify({message: "Prompt deleted successfully"}), {status:200})
    } catch (error) {
        return new Response("Failed to delete prompt", {status:500})
    }
}