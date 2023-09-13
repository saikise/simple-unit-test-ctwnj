import Form from "@/components/Form";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Form />", () => {
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleSubmit.mockClear();
    render(<Form handleSubmit={handleSubmit} />);
  });

  it("should render all form fields", () => {
    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Date of Birth")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Mobile Number")).toBeInTheDocument();
    expect(screen.getByLabelText("Computer")).toBeInTheDocument();
    expect(screen.getByLabelText("Upload File")).toBeInTheDocument();
    expect(screen.getByLabelText("Coffee")).toBeInTheDocument();
    expect(screen.getByLabelText("Tea")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("should not submit the form if required fields are empty", async () => {
    await userEvent.click(screen.getByRole("button", { name: "Submit" }));
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("should submit the form with correct values", async () => {
    await userEvent.type(screen.getByLabelText("Full Name"), "John Doe");
    await userEvent.type(screen.getByLabelText("Date of Birth"), "1990-01-01");
    await userEvent.type(screen.getByLabelText("Email"), "johndoe@example.com");
    await userEvent.type(screen.getByLabelText("Mobile Number"), "1234567890");
    await userEvent.selectOptions(screen.getByLabelText("Computer"), "mac");
    await userEvent.click(screen.getByLabelText("Coffee"));
    const file = new File(["hello"], "hello.txt", { type: "text/plain" });
    await userEvent.upload(screen.getByLabelText("Upload File"), file);
    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    // The handleSubmit function will retain the number of times it has been called and the values it has been called with until you call mockClear() on it.
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      fullName: "John Doe",
      dateOfBirth: "1990-01-01",
      email: "johndoe@example.com",
      mobileNumber: "1234567890",
      computer: "mac",
      beverage: "coffee",
      file: file,
    });
  });
});
