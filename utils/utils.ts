import { z } from "zod";

// Define a schema for form fields using Zod
export const SignUpSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
  phoneNumber: z.string().min(6, "Invalid phone number"),
  address: z.string().min(1, "Address is required"),
});
