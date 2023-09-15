"use client";

import styles from "./Form.module.scss";

export type FormValues = {
  fullName: string;
  dateOfBirth: string;
  email: string;
  mobileNumber: string;
  computer: "mac" | "pc";
  beverage: "coffee" | "tea";
  file: File;
};

export type FormProps = {
  handleSubmit: (formValues: FormValues) => void;
};

const Form = ({ handleSubmit }: FormProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Registration</h1>
      <form
        id="form"
        onSubmit={(e) => {
          // Prevent the page from refreshing when the form is submitted
          e.preventDefault();
          // Get all form values since we have defined handleSubmit to accept object of type FormValues
          const formData = new FormData(e.target as HTMLFormElement);
          const formValues = Object.fromEntries(
            formData.entries()
          ) as FormValues;
          handleSubmit(formValues);
        }}
        className={styles.form}
      >
        <div className={styles.formGroup}>
          <label htmlFor="fullName" className={styles.formLabel}>
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className={styles.formInput}
            required
            aria-required="true"
            aria-label="Full Name"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="dateOfBirth" className={styles.formLabel}>
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            className={styles.formInput}
            required
            aria-required="true"
            aria-label="Date of Birth"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.formInput}
            required
            aria-required="true"
            aria-label="Email"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="mobileNumber" className={styles.formLabel}>
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            className={styles.formInput}
            required
            aria-required="true"
            aria-label="Mobile Number"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="computer" className={styles.formLabel}>
            Computer
          </label>
          <select
            id="computer"
            name="computer"
            className={styles.formSelect}
            required
            aria-required="true"
            aria-label="Computer"
          >
            <option value="mac">Mac</option>
            <option value="pc">PC</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="file" className={styles.formLabel}>
            Upload File
          </label>
          <input
            type="file"
            id="file"
            name="file"
            className={styles.formInput}
            aria-label="Upload File"
          />
        </div>
        <div className={styles.formGroup}>
          <div>
            <label htmlFor="coffee">
              <input
                type="radio"
                id="coffee"
                name="beverage"
                value="coffee"
                required
              />
              Coffee
            </label>
            <label htmlFor="tea">
              <input
                type="radio"
                id="tea"
                name="beverage"
                value="tea"
                required
              />
              Tea
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <button
            type="submit"
            name="Submit"
            className={styles.formSubmitButton}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
