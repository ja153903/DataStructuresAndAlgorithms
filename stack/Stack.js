class Stack {
  constructor() {
    this.container = [];
  }

  push(val) {
    this.container.push(val);
  }

  pop() {
    if (this.container.length === 0) {
      return;
    }

    this.container.splice(this.container.length - 1, 1);
  }

  top() {
    if (this.container.length === 0) {
      throw new Error("STK_EMPTY_ERR");
    }

    return this.container[this.container.length - 1];
  }

  get size() {
    return this.container.length;
  }
}

export default Stack;
