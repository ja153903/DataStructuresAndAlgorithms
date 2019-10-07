class Queue {
  container = [];

  enqueue(val) {
    this.container.push(val);
  }

  dequeue() {
    if (this.container.size === 0) {
      throw new Error("QUE_EMPTY_ERR");
    }

    const returnValue = this.container[0];

    this.container.splice(0, 1);

    return returnValue;
  }

  front() {
    if (this.container.size === 0) {
      throw new Error("QUE_EMPTY_ERR");
    }

    return this.container[0];
  }

  get size() {
    return this.container.length;
  }
}

export default Queue;
