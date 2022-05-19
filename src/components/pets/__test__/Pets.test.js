import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pets from "../Pets";
import { rest } from "msw";
import { setupServer } from "msw/node";
import cats from "../../../mocks/cats.json"

const server = setupServer(
  rest.get("http://localhost:4000/cats", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(cats)
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterEach(() => server.close());

describe("Pets", () => {
  test("Should render the correct amount of cards", async () => {
    render(<Pets />);
    const cards = await screen.findAllByRole("article");
    expect(cards).toHaveLength(5);
  });

  test("should filter for male cats", async () =>{
    render(<Pets/>)
    const cards = await screen.findAllByRole("article");
    userEvent.selectOptions(screen.getByLabelText(/gender/i), 'male');
    const maleCards = screen.getAllByRole("article");
    expect(maleCards).toStrictEqual([cards[1], cards[3]]); 
  });

  test("should filter for female cats", async () =>{
    render(<Pets/>)
    const cards = await screen.findAllByRole("article");
    userEvent.selectOptions(screen.getByLabelText(/gender/i), 'female');
    const femaleCards = screen.getAllByRole("article");
    expect(femaleCards).toStrictEqual([cards[0], cards[2], cards[4]]); 
  })
});
