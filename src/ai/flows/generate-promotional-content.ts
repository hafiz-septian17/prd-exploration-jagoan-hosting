'use server';
/**
 * @fileOverview An AI agent that generates promotional content for UMKM products.
 *
 * - generatePromotionalContent - A function that generates promotional content.
 * - GeneratePromotionalContentInput - The input type for the generatePromotionalContent function.
 * - GeneratePromotionalContentOutput - The return type for the generatePromotionalContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePromotionalContentInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  productDescription: z.string().describe('A detailed description of the product.'),
  posterTemplate: z.string().describe('The chosen poster template (e.g., minimal, elegant, modern).'),
});
export type GeneratePromotionalContentInput = z.infer<typeof GeneratePromotionalContentInputSchema>;

const GeneratePromotionalContentOutputSchema = z.object({
  caption: z.string().describe('A suggested caption for the product promotion.'),
  hashtags: z.string().describe('Suggested hashtags for the product promotion.'),
});
export type GeneratePromotionalContentOutput = z.infer<typeof GeneratePromotionalContentOutputSchema>;

export async function generatePromotionalContent(
  input: GeneratePromotionalContentInput
): Promise<GeneratePromotionalContentOutput> {
  return generatePromotionalContentFlow(input);
}

const generatePromotionalContentPrompt = ai.definePrompt({
  name: 'generatePromotionalContentPrompt',
  input: {schema: GeneratePromotionalContentInputSchema},
  output: {schema: GeneratePromotionalContentOutputSchema},
  prompt: `You are an expert marketing assistant specializing in generating engaging content for UMKM products.

  Based on the product name, description, and chosen poster template, generate a compelling caption and relevant hashtags for promoting the product on social media.

  Product Name: {{{productName}}}
  Product Description: {{{productDescription}}}
  Poster Template: {{{posterTemplate}}}

  Caption:
  Hashtags:`, // Removed extra newline
});

const generatePromotionalContentFlow = ai.defineFlow(
  {
    name: 'generatePromotionalContentFlow',
    inputSchema: GeneratePromotionalContentInputSchema,
    outputSchema: GeneratePromotionalContentOutputSchema,
  },
  async input => {
    const {output} = await generatePromotionalContentPrompt(input);
    return output!;
  }
);
