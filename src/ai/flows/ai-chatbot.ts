// Implemented a Genkit flow for an AI chatbot that answers questions and qualifies leads.
'use server';
/**
 * @fileOverview An AI chatbot for lead qualification.
 *
 * - aiChatbot - A function that handles the chatbot interactions.
 * - AIChatbotInput - The input type for the aiChatbot function.
 * - AIChatbotOutput - The return type for the aiChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIChatbotInputSchema = z.object({
  userInput: z.string().describe('The user input message.'),
  pastMessages: z.array(z.object({
    role: z.enum(['user', 'assistant']),
    content: z.string(),
  })).optional().describe('The past messages in the conversation.'),
});
export type AIChatbotInput = z.infer<typeof AIChatbotInputSchema>;

const AIChatbotOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user input.'),
});
export type AIChatbotOutput = z.infer<typeof AIChatbotOutputSchema>;

const askQualifyingQuestionTool = ai.defineTool(
    {
      name: 'askQualifyingQuestion',
      description: 'Ask a qualifying question to the user to better understand their needs. Should be used when the user input is vague or does not provide enough information to determine their needs.',
      inputSchema: z.object({
        question: z.string().describe('The qualifying question to ask the user.'),
      }),
      outputSchema: z.string(),
    },
    async ({ question }) => {
      return question;
    }
  );

export async function aiChatbot(input: AIChatbotInput): Promise<AIChatbotOutput> {
  return aiChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiChatbotPrompt',
  input: {schema: AIChatbotInputSchema},
  output: {schema: AIChatbotOutputSchema},
  tools: [askQualifyingQuestionTool],
  prompt: `You are a chatbot designed to answer questions about 1000leads marketing agency and qualify leads.

  Your goal is to understand the user's needs and determine if they are a good fit for 1000leads services.

  Based on the user's questions, provide helpful answers and ask clarifying questions to further qualify them as a lead.

  Here's some information about 1000leads:
  - 1000leads is a digital marketing agency focused on helping businesses attract clients through online marketing.
  - They offer services such as website design, SEO, paid advertising, and social media marketing.
  - They have two main packages: "Pacote Impulso Digital" and "Pacote Ecossistema de Crescimento".
  - Pacote Impulso Digital includes: Professional Website/Capture Page, Traffic Management (Google & Meta), 8 Strategic Posts per Month, Google Profile Optimization, CRM Implementation, Basic Local SEO, Monthly Performance Report.
  - Pacote Ecossistema de Crescimento includes: Everything in Pacote Impulso Digital + AI Chatbot for 24/7 Support, Personalized AI Agent, Strategic Referral Program, Email Marketing Management, Retargeting Campaigns, Monthly Strategic Consulting.

  Here are some examples of questions you can ask to qualify a lead:
  - What are your current marketing challenges?
  - What is your budget for marketing?
  - What are your goals for online marketing?

  Past messages:
  {{#each pastMessages}}
  {{#if (eq this.role "user")}}User: {{this.content}}{{/if}}
  {{#if (eq this.role "assistant")}}Assistant: {{this.content}}{{/if}}
  {{/each}}

  User input: {{userInput}}

  Chatbot response:`, // MUST be last line in prompt for proper auto-formatting
});

const aiChatbotFlow = ai.defineFlow(
  {
    name: 'aiChatbotFlow',
    inputSchema: AIChatbotInputSchema,
    outputSchema: AIChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
