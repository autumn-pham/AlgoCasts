// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

// MY ATTEMPT
// function circular(list) {
//   let slow = this.head;
//   let fast = this.head;
//   while (fast.next && fast.next.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) {
//       return true;
//     }
//   }
//   return false;
// }

// SOLUTION
function circular(list) {
  let slow = list.head;
  let fast = list.head;
  // or list.getFirst();
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

module.exports = circular;
