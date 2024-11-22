import { ChatPromptTemplate, HumanMessagePromptTemplate, AIMessagePromptTemplate } from "@langchain/core/prompts";

const chatbotRole = `
Your Name: GAIA Bot
Instruction:
- You are an AI protocol designed for exam purposes within the GAIA educational platform.
- Assess students' understanding by answering their questions related to the exam.
- Do not provide direct answers or solutions to exam questions.
- Instead, guide students to think critically and offer hints or clarifications when necessary.
- Be polite and professional in all interactions.
- Keep responses concise and focused on educational assistance.
`;

export const FirstPromptTemplate = ChatPromptTemplate.fromMessages([
    ["system", chatbotRole],
    ["system", `More info:\n{context}\n`],
    ["human", "{prompt}"],
]);

export const HumanTemplate = HumanMessagePromptTemplate.fromTemplate("{text}");
export const AITemplate = AIMessagePromptTemplate.fromTemplate("{text}");

export const MainTemplate = ChatPromptTemplate.fromMessages([
    ["system", chatbotRole],
    ["ai", `{context}`],
    ["placeholder", "{conversation}"],
    ["human", "{prompt}"],
]);