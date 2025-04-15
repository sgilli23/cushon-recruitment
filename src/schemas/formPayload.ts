import * as z from "zod";

export type FormPayload = {
  fundingOption: number;
  cashAmount: number;
};

export const step1Schema = z.object({
  fundingOption: z.number(),
});

// I have not implemented zod validation to save time, but here's an example of what you can do...
export const step2Schema = z.object({
  cashAmount: z
    .number()
    .min(100, "You must invest a minimum of £100")
    .max(25000, "You may not invest more than your tax free allowance"),
});
