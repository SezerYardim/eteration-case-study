import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import Checkout from "./Checkout";

describe("Checkout", () => {
  beforeEach(() => {
    render(<Checkout price={200} />);
  });

  it("should render price prop", () => {
    const price = screen.getByTestId("checkout-price");
    expect(price).toHaveTextContent("Total Price: " + 200 + "₺");
  });
});
