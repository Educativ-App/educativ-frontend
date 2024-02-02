import { z } from "zod";

// HDR: -------------LOGIN SCHEMA----------------
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field can not be empty" })
    .email("Please enter a valid email address"),
  password: z.string().min(1, { message: "This field can not be empty" }),
});
