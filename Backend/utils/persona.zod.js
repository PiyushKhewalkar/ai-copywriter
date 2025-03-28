import { z } from "zod";

const personaZodResponseFormat = z.object({
   name: z.string(),
   ageRange: z.string(),
   gender: z.enum(["Male", "Female", "Other"]),
   location: z.string().optional(),
   maritalStatus: z.enum(["Single", "Married", "Divorced", "Other"]),
   incomeLevel: z.string(),
   educationLevel: z.enum(["High School", "Bachelor's", "Master's", "PhD", "Other"]),
   jobTitle: z.string(),
   industry: z.string(),

   goalsAndAspirations: z.object({
      primaryGoal: z.string(),
      secondaryGoals: z.array(z.string()).optional(),
      longTermVision: z.string().optional()
   }),

   painPointsAndChallenges: z.object({
      biggestProblems: z.array(z.string()).optional(),
      frustration: z.array(z.string()).optional(),
      commonObjections: z.array(z.string()).optional()
   }),

   buyingBehaviour: z.object({
      platforms: z.array(z.string()).optional(),
      influencersFollowed: z.array(z.string()).optional(),
      contentTypes: z.array(z.string()).optional(),
      decisionMakingProcess: z.string().optional()
   }),

   psychologicalTriggers: z.object({
      emotionalTriggers: z.array(z.string()).optional(),
      logicalTriggers: z.array(z.string()).optional(),
      socialProofPreferences: z.array(z.string()).optional()
   }),

   solutionFit: z.object({
      productBenefits: z.string(),
      keyFeatures: z.array(z.string()).optional(),
      messagingTone: z.enum(["Professional", "Friendly", "Authoritative"])
   })
});

export default personaZodResponseFormat;
