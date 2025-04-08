import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export default function MealDetail({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) notFound();

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            fill
            alt="detail"
            className={classes.image}
            src={meal?.image}
          />
        </div>
        <div className={classes.headerText}>
          <h1>{meal?.title}</h1>
          <p className={classes.creator}>Name: {meal?.creator}</p>
          <p className={classes.summary}>Summary: {meal?.summary}</p>
        </div>
      </header>

      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal?.instructions?.replace(/\n/g, "<br />"),
          }}></p>
      </main>
    </div>
  );
}
