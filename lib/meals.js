import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  throw new Error("kekekeke");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals where slug = ?").get(slug);
}

export function saveMeal(meal) {
  db.prepare(
    "INSERT INTO meals (title, summary, instructions, image, creator, creator_email) VALUES (?, ?, ?, ?, ?, ?)"
  ).run(
    "title",
    "summary",
    "instructions",
    "image",
    "creator",
    "creator_email"
  );

  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  return { success: true };
}
