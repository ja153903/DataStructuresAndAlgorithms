import Queue from "./Queue";

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it("should be empty", () => {
    expect(queue.size).toBe(0);
  });

  it("should have one element", () => {
    queue.enqueue(4);

    expect(queue.size).toBe(1);
  });

  it("should have one element after dequeue", () => {
    queue.enqueue(2);
    queue.enqueue(3);

    const returnValue = queue.dequeue();

    expect(returnValue).toBe(2);
    expect(queue.size).toBe(1);
  });
});
