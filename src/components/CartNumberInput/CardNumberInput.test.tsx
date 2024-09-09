import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import CartNumberInput from "./CartNumberInput";
import "@testing-library/jest-dom";

describe("CartNumberInput", () => {
  let mockOnIncrement: Mock;
  let mockOnDecrement: Mock;

  beforeEach(() => {
    mockOnIncrement = vi.fn();
    mockOnDecrement = vi.fn();
    render(
      <CartNumberInput
        onIncrement={mockOnIncrement}
        onDecrement={mockOnDecrement}
        count={1}
      />
    );
  });

  it("should render count prop", () => {
    const countButton = screen.getByTestId("cart-product-count");
    expect(countButton).toHaveTextContent("1");
  });

  it("should onIncrement event work properly", async () => {
    const incrementButton = screen.getByText("+");
    await userEvent.click(incrementButton);

    expect(mockOnIncrement).toHaveBeenCalled();
    expect(mockOnIncrement).toHaveBeenCalledTimes(1);
  });
  it("should onDecrement event work properly", async () => {
    const decrementButton = screen.getByText("-");
    await userEvent.click(decrementButton);

    expect(mockOnDecrement).toHaveBeenCalled();
    expect(mockOnDecrement).toHaveBeenCalledTimes(1);
  });
});
