import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";
import CartItem from "./CartItem";
import { IProductItem } from "../../api/products/products.interface";

describe("CartItem", () => {
  let mockOnIncrement: Mock;
  let mockOnDecrement: Mock;
  const product: IProductItem = {
    createdAt: "2023-07-17T07:21:02.529Z",
    name: "Bentley Focus",
    image: "https://loremflickr.com/640/480/food",
    price: "51.00",
    description:
      "Quasi adipisci sint veniam delectus. Illum laboriosam minima dignissimos natus earum facere consequuntur eius vero. Itaque facilis at tempore ipsa. Accusamus nihil fugit velit possimus expedita error porro aliquid. Optio magni mollitia veritatis repudiandae tenetur nemo. Id consectetur fuga ipsam quidem voluptatibus sed magni dolore.\nFacilis commodi dolores sapiente delectus nihil ex a perferendis. Totam deserunt assumenda inventore. Incidunt nesciunt adipisci natus porro deleniti nisi incidunt laudantium soluta. Nostrum optio ab facilis quisquam.\nSoluta laudantium ipsa ut accusantium possimus rem. Illo voluptatibus culpa incidunt repudiandae placeat animi. Delectus id in animi incidunt autem. Ipsum provident beatae nisi cumque nulla iure.",
    model: "CTS",
    brand: "Lamborghini",
    id: "1",
  };
  beforeEach(() => {
    mockOnIncrement = vi.fn();
    mockOnDecrement = vi.fn();

    render(
      <CartItem
        product={product}
        count={4}
        onDecrement={mockOnDecrement}
        onIncrement={mockOnIncrement}
      />
    );
  });

  it("should render count prop", () => {
    const countButton = screen.getByTestId("cart-product-count");
    expect(countButton).toHaveTextContent("4");
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
