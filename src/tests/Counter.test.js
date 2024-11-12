// import necessary react testing library helpers
import { render, screen, fireEvent } from "@testing-library/react";
// import the Counter component
import Counter from "../components/Counter";

beforeEach(() => {
    // Render the Counter component
    render(<Counter />);
});

test('renders counter message', () => {
    // check rendering
    const counterMessage = screen.getByText(/counter/i);
    expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    // check inital state
    const countElement = screen.getByTestId("count");
    expect(countElement).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
    // Test + button
    const incrementButton = screen.getByText("+");
    fireEvent.click(incrementButton);
    const countElement = screen.getByTestId("count");
    expect(countElement).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
    // Test - button
    const decrementButton = screen.getByText("-");
    fireEvent.click(decrementButton);
    const countElement = screen.getByTestId("count");
    expect(countElement).toHaveTextContent("-1");
});
