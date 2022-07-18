
reversedList - { "next": null, "value": 1 }
current - { "next": { "next": null, "value": 3 }, "value": 2 }


reversedList - { "next": { "next": null, "value": 1 }, "value": 2 }
current - { "next": null, "value": 3 }


reversedList - { "next": { "next": { "next": null, "value": 1 }, "value": 2 }, "value": 3 }
current - null

class Node1 {
    constructor(value, node = null) {
        this.next = node;
        this.value = value;
    }

    getNext() {
        return this.next;
    }

    getValue() {
        return this.value;
    }
}


const reverse = (list) => {
    let reversedList = null;
    let current = list;

    while (current) {
        reversedList = new Node(current.getValue(), reversedList);
        current = current.getNext();
    }

    return reversedList;
};

