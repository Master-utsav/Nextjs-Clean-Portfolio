"use server";

import { db } from "@/lib/prisma";
import { articleSchema, PostsSchema, quoteSchema } from "@/schema/zodSchema";

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
  const {day , quote} = result.data;
  try{
    const Quote = await db.quote.create({
      data: {
        quote: String(quote),
        day: String(day),
      }
    })
    if(Quote){
      return {
        success: false,
        errors: {day : [] , quote : []},
        message: "quote created successfully",
      };
    }
  }
  catch(err){
    console.log(err);
  }

}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function articleForm(prevState: any, formData: FormData){
  const result = articleSchema.safeParse(Object.fromEntries(formData));
  console.log("FormData Entries:");
  console.log(formData.get("image"));
  for (const [key, value] of formData.entries()) {
    console.dir(`${key}: ${value}` , {depth: null});
  }

  if (!result.success) {
      return {
        success: false,
        errors: result.error.flatten().fieldErrors,
        message: "form validation failed",
      };
    }
    // const {content , description , image , title} = result.data;
    // try{
    //   const Quote = await db.article.create({
    //     data: {
    //       title: String(title),
    //       content: String(content),
    //       description: String(description),
    //       image: String(image),
    //     }
    //   })
    //   if(Quote){
    //     return {
    //       success: false,
    //       errors: {day : [] , quote : []},
    //       message: "quote created successfully",
    //     };
    //   }
    // }
    // catch(err){
    //   console.log(err);
    // }
}