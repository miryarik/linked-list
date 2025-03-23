# LinkedList

A simple and efficient implementation of a singly linked list data structure in vanilla JavaScript.

## Specifications

- Create a new linked list with `new LinkedList()`
- Basic operations:
  - `append(value)` - Add a node to the end of the list
  - `prepend(value)` - Add a node to the beginning of the list
  - `pop()` - Remove the last node from the list
  - `removeAt(index)` - Remove a node at the specified index
  - `insertAt(value, index)` - Insert a node at the specified index
- Helper methods:
  - `contains(value)` - Check if the list contains a value
  - `find(value)` - Find the index of a value in the list
  - `at(index)` - Get the node at the specified index
  - `toString()` - Get a string representation of the list
- Properties:
  - `size` - Get the number of nodes in the list
  - `tail` - Get the last node in the list
  
## Usage Example

```javascript
// Create a new linked list
const list = new LinkedList();

// Add elements
list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("hamster");

// Display the list
console.log(list.toString());
// Output: ( hamster ) -> ( dog ) -> ( cat ) -> ( parrot ) -> null

// Check if list contains a value
console.log(list.contains("cat")); // true
console.log(list.contains("fish")); // false

// Find the index of a value
console.log(list.find("cat")); // 2

// Get the size of the list
console.log(list.size); // 4

// Insert at specific position
list.insertAt("snake", 2);
console.log(list.toString());
// Output: ( hamster ) -> ( dog ) -> ( snake ) -> ( cat ) -> ( parrot ) -> null

// Remove from specific position
list.removeAt(1);
console.log(list.toString());
// Output: ( hamster ) -> ( snake ) -> ( cat ) -> ( parrot ) -> null
```
