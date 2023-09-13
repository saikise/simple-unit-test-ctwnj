"use client";

import Form, { FormValues } from "@/components/Form";
import styles from "./page.module.scss";

export default function Page() {
  const handleSubmit = async (formValues: FormValues) => {
    console.log("formValues", JSON.stringify(formValues, null, 2));
  };

  return (
    <div className={styles.container}>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}
