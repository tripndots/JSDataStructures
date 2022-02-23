function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  let head = null;
  let tail = null;

  return {
    append(data) {
      const newNode = new Node(data);

      if (head === null) {
        head = newNode;
      } else {
        tail.next = newNode;
      }
      tail = newNode;
    },
    prepend(data) {
      const newNode = new Node(data);

      if (head === null) {
        tail = newNode;
      } else {
        newNode.next = head;
      }

      head = newNode;
    },
    remove(value) {
      let current = head.next;
      let previous = head;

      if (head.data === value) {
        head = head.next;
        return;
      }

      while (current !== null) {
        console.log(current);
        if (value === current.data) {
          nodeToRemove = current;
          break;
        }
        previous = current;
        current = current.next;
      }

      if (current === null) {
        return;
      }

      previous.next = current.next;
    },
    toArray() {
      const arr = [];

      if (head === null) {
        return arr;
      }

      let current = head;

      while (current !== null) {
        arr.push(current.data);
        current = current.next;
      }

      return arr;
    }
  };
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(9);
list.remove(9);

console.log(list.toArray());
