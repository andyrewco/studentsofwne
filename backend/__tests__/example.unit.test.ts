import { assertEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";

// Simple name and function, compact form, but not configurable
Deno.test("example", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});
