class LinkedList {
    constructor() {
        // linked list is recognised by a head
        // size is for utility
        this.head = null;
    }

    toString() {
        // return li as formatted string
        // ( value ) -> ( value ) -> null
        
        let listString = "";
        let current = this.head;

        // traverse all nodes until null
        while(current != null) {
            // for each node append `( value ) ->` to string
            listString += `( ${current.value} ) -> `;
            current = current.next;
        }
        
        // finally add a `null`
        listString += "null";
        
        return listString;
    }

    contains(value) {
        // return true if value is in list

        // if list is empty return
        if (this.head === null) return;

        // else traverse entire list until the value is seen
        // or end is reached
        let current = this.head;
        while (current.value != value && current.next != null) {
            current = current.next;
        }
        
        // return true if it is seen, false ow
        if (current.value == value) return true;
        else return false;
    }

    find(value) {
        // return index of node with value

        // if list is empty return
        if (this.head === null) return;

        // else traverse entire list until the value is seen
        // or end is reached
        let current = this.head;
        let idx = 0;
        while (current.value != value && current.next != null) {
            current = current.next;
            idx++;
        }
        
        // return true if it is seen, false ow
        if (current.value == value) return idx;
        else return null;
    }

    pop() {
        // remove the last element from the list
        // if list is empty return
        if (this.head === null) return;

        
        // else traverse with two pointers
        let first = this.head;
        let second = first.next;
        
        // until second reaches null
        while (second.next != null) {
            second = second.next;
            first = first.next;
        }
        // remove the first.next there
        first.next = null;
    }

    at(index) {
        // return node at given index

        // if list is empty return null
        if (index < 0 || this.head === null) return null;

        // else traverse to given index and return current node
        let current = this.head;
        for(let i = 0; i < index; i++) {
            current = current.next;
        }

        return current;
    }

    get size() {
        
        // if list is empty return 0
        if (this.head === null) return 0;

        let size = 1;
        let i = this.head;
        while (i.next != null) {
            // else iterate the list until null is reached
            // increment count in each itereation
            size++;
            i = i.next;
        }

        return size;
    }

    get tail() {
        // if list is empty return head
        if (this.head === null) return this.head;

        // else traverse node.next until null is reached
        let i = this.head;
        while(i.next != null) {
            i = i.next;
        }

        return i;

    }

    append(value) {
        // attach new node with value to end of list

        // create a new node with the value
        const endNode = new Node(value);

        // if list if empty, attach to head
        if (this.head === null) this.head = endNode;
        else {
            // traverse to node.next from head until null is reached
            let i = this.head;
            while (i.next != null) {
                i = i.next;
            }

            // put the new node here
            i.next = endNode;
        }

    }

    prepend(value) {
        // attach new node with value to start of list

        // create a new node with value
        const startNode = new Node(value);

        // put node.next -> head
        // put head -> node
        startNode.next = this.head;
        this.head = startNode;

    }
}

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

// testing

li = new LinkedList();

li.append("Second");
li.prepend("first");
li.append("third");
li.prepend("START");
li.append("END");




