"use client"

import { PostsSchema, quoteSchema } from "@/schema/zodSchema";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function addNewPost(prevState: any, formData: FormData) {
    const result = PostsSchema.safeParse(Object.fromEntries(formData));
    console.log("FormData Entries:");
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  
    if (!result.success) {
        return {
          success: false,
          errors: result.error.flatten().fieldErrors,
          message: "form validation failed",
        };
      }
      try {
        
        // add backend logic
        if (!true) {
          throw new Error("Failed to submit post");
        }
    
        return {
          success: true,
          message: "Post submitted successfully",
        };
      } catch (error) {
        return {
          success: false,
          message: (error as Error).message,
        };
      }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function qouteForm(prevState: any , formData : FormData){
  const result = quoteSchema.safeParse(Object.fromEntries(formData));
  console.log("FormData Entries:");
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  if (!result.success) {
      return {
        success: false,
        errors: result.error.flatten().fieldErrors,
        message: "form validation failed",
      };
    }

}