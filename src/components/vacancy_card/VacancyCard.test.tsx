import { screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";

 

describe( () => {
  it( async () => {
    waitFor(() => {
      expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    });
    waitFor(() => {
      expect(screen.getByText("Yandex")).toBeInTheDocument();
    });
    waitFor(() => {
      expect(screen.getByText("Москва")).toBeInTheDocument();
    });
  });

});
