'use server';
/**
 * @fileOverview Generates landing page content based on a prompt.
 *
 * - generateLandingPageContent - A function that generates landing page content.
 * - LandingPageContentInput - The input type for the generateLandingPageContent function.
 * - LandingPageContentOutput - The return type for the generateLandingPageContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LandingPageContentInputSchema = z.object({
  prompt: z.string().describe('A detailed description of the desired landing page content, including target audience, product/service, and desired tone.'),
});
export type LandingPageContentInput = z.infer<typeof LandingPageContentInputSchema>;

const LandingPageContentOutputSchema = z.object({
  headline: z.string().describe('The main headline for the landing page.'),
  subheadline: z.string().describe('A supporting subheadline for the landing page.'),
  problemStatement1: z.string().describe('The first problem statement for section 3.'),
  problemStatement2: z.string().describe('The second problem statement for section 3.'),
  problemStatement3: z.string().describe('The third problem statement for section 3.'),
  problemStatement4: z.string().describe('The fourth problem statement for section 3.'),
  package1Title: z.string().describe('Title for package 1.'),
  package1Description: z.string().describe('Description for package 1.'),
  package1Benefit1: z.string().describe('Benefit 1 for package 1.'),
  package1Benefit2: z.string().describe('Benefit 2 for package 1.'),
  package1Benefit3: z.string().describe('Benefit 3 for package 1.'),
  package1Benefit4: z.string().describe('Benefit 4 for package 1.'),
  package1Benefit5: z.string().describe('Benefit 5 for package 1.'),
  package1Benefit6: z.string().describe('Benefit 6 for package 1.'),
  package1Benefit7: z.string().describe('Benefit 7 for package 1.'),
  package2Title: z.string().describe('Title for package 2.'),
  package2Description: z.string().describe('Description for package 2.'),
  package2Benefit1: z.string().describe('Benefit 1 for package 2.'),
  package2Benefit2: z.string().describe('Benefit 2 for package 2.'),
  package2Benefit3: z.string().describe('Benefit 3 for package 2.'),
  package2Benefit4: z.string().describe('Benefit 4 for package 2.'),
  package2Benefit5: z.string().describe('Benefit 5 for package 2.'),
  package2Benefit6: z.string().describe('Benefit 6 for package 2.'),
  package2Benefit7: z.string().describe('Benefit 7 for package 2.'),
  package2Benefit8: z.string().describe('Benefit 8 for package 2.'),
  case1Title: z.string().describe('Title for case 1.'),
  case1Challenge: z.string().describe('Challenge for case 1.'),
  case1Solution: z.string().describe('Solution for case 1.'),
  case1Result1: z.string().describe('Result 1 for case 1.'),
  case1Result2: z.string().describe('Result 2 for case 1.'),
  case1Result3: z.string().describe('Result 3 for case 1.'),
  case2Title: z.string().describe('Title for case 2.'),
  case2Challenge: z.string().describe('Challenge for case 2.'),
  case2Solution: z.string().describe('Solution for case 2.'),
  case2Result1: z.string().describe('Result 1 for case 2.'),
  case2Result2: z.string().describe('Result 2 for case 2.'),
  case2Result3: z.string().describe('Result 3 for case 2.'),
  testimonial1: z.string().describe('Testimonial 1.'),
  testimonial2: z.string().describe('Testimonial 2.'),
  testimonial3: z.string().describe('Testimonial 3.'),
  faq1: z.string().describe('FAQ 1.'),
  faq2: z.string().describe('FAQ 2.'),
  faq3: z.string().describe('FAQ 3.'),
  faq4: z.string().describe('FAQ 4.'),
  thankYouMessage: z.string().describe('Thank you message.'),
});
export type LandingPageContentOutput = z.infer<typeof LandingPageContentOutputSchema>;

export async function generateLandingPageContent(input: LandingPageContentInput): Promise<LandingPageContentOutput> {
  return landingPageContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'landingPageContentPrompt',
  input: {schema: LandingPageContentInputSchema},
  output: {schema: LandingPageContentOutputSchema},
  prompt: `You are an expert copywriter specializing in high-conversion landing pages.

  Based on the description provided, generate content for each of the following sections of the landing page.
  Make the content compelling and persuasive.

  Description: {{{prompt}}}

  Headline: {{headline}}
  Subheadline: {{subheadline}}
  Problem Statement 1: {{problemStatement1}}
  Problem Statement 2: {{problemStatement2}}
  Problem Statement 3: {{problemStatement3}}
  Problem Statement 4: {{problemStatement4}}
  Package 1 Title: {{package1Title}}
  Package 1 Description: {{package1Description}}
  Package 1 Benefit 1: {{package1Benefit1}}
  Package 1 Benefit 2: {{package1Benefit2}}
  Package 1 Benefit 3: {{package1Benefit3}}
  Package 1 Benefit 4: {{package1Benefit4}}
  Package 1 Benefit 5: {{package1Benefit5}}
  Package 1 Benefit 6: {{package1Benefit6}}
  Package 1 Benefit 7: {{package1Benefit7}}
  Package 2 Title: {{package2Title}}
  Package 2 Description: {{package2Description}}
  Package 2 Benefit 1: {{package2Benefit1}}
  Package 2 Benefit 2: {{package2Benefit2}}
  Package 2 Benefit 3: {{package2Benefit3}}
  Package 2 Benefit 4: {{package2Benefit4}}
  Package 2 Benefit 5: {{package2Benefit5}}
  Package 2 Benefit 6: {{package2Benefit6}}
  Package 2 Benefit 7: {{package2Benefit7}}
  Package 2 Benefit 8: {{package2Benefit8}}
  Case 1 Title: {{case1Title}}
  Case 1 Challenge: {{case1Challenge}}
  Case 1 Solution: {{case1Solution}}
  Case 1 Result 1: {{case1Result1}}
  Case 1 Result 2: {{case1Result2}}
  Case 1 Result 3: {{case1Result3}}
  Case 2 Title: {{case2Title}}
  Case 2 Challenge: {{case2Challenge}}
  Case 2 Solution: {{case2Solution}}
  Case 2 Result 1: {{case2Result1}}
  Case 2 Result 2: {{case2Result2}}
  Case 2 Result 3: {{case2Result3}}
  Testimonial 1: {{testimonial1}}
  Testimonial 2: {{testimonial2}}
  Testimonial 3: {{testimonial3}}
  FAQ 1: {{faq1}}
  FAQ 2: {{faq2}}
  FAQ 3: {{faq3}}
  FAQ 4: {{faq4}}
  Thank You Message: {{thankYouMessage}}`,
});

const landingPageContentFlow = ai.defineFlow(
  {
    name: 'landingPageContentFlow',
    inputSchema: LandingPageContentInputSchema,
    outputSchema: LandingPageContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
