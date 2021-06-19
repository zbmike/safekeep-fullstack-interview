import { isNum } from "../src/util/validate";

test("it should return false when pass in a non-number string", () => {
  const inputStr = "hello";

  expect(isNum(inputStr)).toEqual(false);
});

test("it should return false when pass in a mixed char-number string", () => {
  const inputStr = "hello9year";

  expect(isNum(inputStr)).toEqual(false);

});

test("it should return false when pass in a mixed number-char string", () => {
  const inputStr = "89baby";

  expect(isNum(inputStr)).toEqual(false);

});

test("it should return false when pass in an empty string", () => {
  const inputStr = "";

  expect(isNum(inputStr)).toEqual(false);

});

test("it should return true when pass in a number string", () => {
  const inputStr = "99";

  expect(isNum(inputStr)).toEqual(true);
});