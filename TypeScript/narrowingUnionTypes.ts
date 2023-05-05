//Challenge from Totally Typescript
//Answer by Eleanor

import { expect, it } from "vitest";

const coerceAmount = (amount: number | { amount: number }) => {
//can't access property unless you know it's there 
//ts needs to know which branch of the union it's looking at
  if (typeof amount === "number") {
    return amount;
  }
  return amount.amount;
};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});