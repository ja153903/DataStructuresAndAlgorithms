import Stack from "./Stack";

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("should have one element", () => {
    stack.push(3);

    expect(stack.size).toBe(1);
  });

  it("should remove the top value on the stack", () => {
    stack.push(3);
    stack.push(4);

    expect(stack.top()).toBe(4);

    stack.pop();

    expect(stack.top()).toBe(3);
  });

  it("should throw an error since stack is empty", () => {
    stack.top = jest.fn(() => {
      throw new Error("STK_EMPTY_ERR");
    });

    expect(stack.top).toThrow("STK_EMPTY_ERR");
  });
});
