import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import { describe, test, expect} from 'vitest';
import Card from "../Card";

const cardProps = {
  name: "Sydney",
  phone: "111-111-111",
  email: "cat@gmail.com",
  image: {
    url: "https://media.istockphoto.com/photos/kitten-exploring-domestic-setting-picture-id1335433001?k=20&m=1335433001&s=612x612&w=0&h=dsapxuNHv_J3eG05LFjqqf7NhfI6XNnhNq5KjReY_lE=",
    alt: "cute cat",
  },
  favoured: false,
};

describe("Card", () => {
  test("Should show name of the cat", () => {
    render(<Card {...cardProps} />);
    expect(
      screen.getByRole("heading", { name: /sydney/i })
    ).toBeInTheDocument();
  });
  test("Should show phone number of the cat", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByText(/111-111-111/i)).toBeInTheDocument();
  });

  test("Should show email number of the cat", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByText(/cat@gmail.com/i)).toBeInTheDocument();
  });

  test("Should show image with correct source", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByAltText(/cute cat/i).src).toBe(
      "https://media.istockphoto.com/photos/kitten-exploring-domestic-setting-picture-id1335433001?k=20&m=1335433001&s=612x612&w=0&h=dsapxuNHv_J3eG05LFjqqf7NhfI6XNnhNq5KjReY_lE="
    );
  });

  test("Should show outline heart", () => {
    render(<Card {...cardProps} />);
    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });

  test("Should show filled heart", () => {
    render(<Card {...cardProps} favoured={true} />);
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
  });


  test("should toggle heart status", () => {
    render(<Card {...cardProps} />);
    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
    userEvents.click(screen.getByRole("button"));
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
  });
});
