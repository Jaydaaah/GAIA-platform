import { ChatGroq } from "@langchain/groq";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RateLimitError, APIConnectionTimeoutError } from "groq-sdk";
import { AITemplate, HumanTemplate, MainTemplate } from "./Groq/Chatbot-role";
import { usePage } from "@inertiajs/react";
import { Chat } from "@/types/models";
import { PageProps } from "@/types";
import { GeneralContexttest } from "./Groq/script-about";

const modelLlama8b = new ChatGroq({
    apiKey: "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",
    maxTokens: 256,
    model: "llama3-8b-8192",
});

const modelGemma = new ChatGroq({
    apiKey: "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",
    maxTokens: 256,
    model: "gemma-7b-it",
});

const outputParser = new StringOutputParser();
const mainChain = MainTemplate.pipe(modelLlama8b).pipe(outputParser);

function ErrorCatcher(error: any) {
    let message: string = `Something went wrong Error: ${error}`;
    if (error instanceof RateLimitError) {
        message = "Rate Limit Reached: Please Try again after a minute";
        console.error(error);
        return message;
    } else if (error instanceof APIConnectionTimeoutError) {
        message = "APIConnectionTimeoutError: Please try again in few seconds";
        console.error(error);
        return message;
    }
    console.error(error);
    throw Error(error);
}

function generateConversation(chats: Chat[]) {
    return chats.map(({ side, message }) => {
        if (side == "right") {
            return ["human", message];
        } else {
            return ["ai", message];
        }
    });
}

export const GroqPrompt = async (prompt: string, chat?: Chat[]) => {
    const context = GeneralContexttest;
    const conversation = generateConversation(chat ?? []);
    try {
        const response = await mainChain.invoke({
            context,
            conversation,
            prompt,
        });
        return response;
    } catch (error) {
        let message = ErrorCatcher(error);
        return message;
    }
};

async function sleep(ms: number) {
    return await new Promise((r) => setTimeout(r, ms));
}

export async function* GrogStreamPrompt(prompt: string, chat?: Chat[]) {
    const context = GeneralContexttest;
    const conversation = generateConversation(chat ?? []);
    try {
        const response = await mainChain.stream({
            context,
            conversation,
            prompt,
        });
        for await (const item of response) {
            await sleep(50);
            yield item;
        }
    } catch (error) {
        let message = ErrorCatcher(error);
        for (var chunk of message.split(" ")) {
            await sleep(50);
            yield chunk + " ";
        }
    }
}
