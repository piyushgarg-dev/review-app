import * as z from 'zod'

export const formEditFormSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  slug: z.string(),
  introTitle: z.string().nullable().optional().default('Share a testimonial!'),
  introMessage: z
    .string()
    .nullable()
    .optional()
    .default(
      "Do you love using our product? We'd love to hear about it! - Share your experience with a quick video or text testimonial - Recording a video? Don't forget to smile 😊"
    ),
  promptTitle: z
    .string()
    .nullable()
    .optional()
    .default(
      '- What do you like most about us? - Would you recommend us to a friend?'
    ),
  promptDescription: z
    .string()
    .nullable()
    .optional()
    .default(
      '- What do you like most about us?\n- Would you recommend us to a friend?'
    ),
  thankyouTitle: z.string().nullable().optional().default('Thank you 🙏'),
  thankyouMessage: z
    .string()
    .nullable()
    .optional()
    .default(
      'Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.'
    ),
  enableCTA: z.boolean().nullable().optional().default(false),
  ctaTitle: z.string().nullable().optional().default(null),
  ctaURL: z.string().nullable().optional().default(null),
  projectId: z.string().uuid(),
  createdByUserId: z.string().uuid(),
  isActive: z.boolean().nullable().optional().default(true),
  primaryColor: z.string().nullable().optional().default('#8B41F2'),
  backgroundColor: z.string().nullable().optional().default('#FFFFFF'),
  lang: z.string().nullable().optional().default('en'),
  collectVideoTestimonials: z.boolean().nullable().optional().default(true),
  collectTextTestimonials: z.boolean().nullable().optional().default(true),
  collectRatings: z.boolean().nullable().optional().default(true),
  collectImages: z.boolean().nullable().optional().default(true),
  collectEmail: z.boolean().nullable().optional().default(true),
  collectJobTitle: z.boolean().nullable().optional().default(true),
  collectUserImage: z.boolean().nullable().optional().default(true),
  collectWebsiteURL: z.boolean().nullable().optional().default(true),
  collectCompany: z.boolean().nullable().optional().default(true),
  autoApproveTestimonials: z.boolean().nullable().optional().default(false),
  autoAddTags: z.array(z.string()).nullable().optional().default([]),
  createdAt: z.string().default('2023-09-15T07:17:25.113Z'),
  updatedAt: z.string().default('2023-09-15T07:17:25.113Z'),
})
