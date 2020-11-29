// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// MY ATTEMPT
// function midpoint(list) {
//   let slow = this.head;
//   let fast = this.head;
//
//   while (node) {
//     slow = this.next;
//     fast = this.next.next;
//   }
//   if () {
//
//   }
// }

function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  // can also set it to this.head
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

module.exports = midpoint;
