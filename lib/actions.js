"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  validateText(formData?.title ?? "");

  await saveMeal(meal);

  // fix static page ở production mode
  // khi mà các page đc pre-render và cache lại
  revalidatePath("/meals", "layout");

  redirect("/meals");
}

const validateText = (text) => {
  if (!text.trim()) {
    return {
      message: "Invalid",
    };
  }
};
