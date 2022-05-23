import { render, screen } from "@testing-library/react"
import { describe, test, expect} from 'vitest';
import Cards from "../Cards";
import cats from "../../../mocks/cats.json";


describe('Cards', () => { 
    test('should render 5 card component', () => {
        render(<Cards cats={cats} />);
        screen.getAllByRole('article');
        expect(screen.getAllByRole('article').length).toBe(5); 
    })
 })