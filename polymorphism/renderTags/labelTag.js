// my

export default class LabelTag {
    constructor(text, tag) {
        this.text = text;
        this.tag = tag;
    };

    render() {
        return `<label>${this.text}${this.tag.render()}</label>`
    }

    toString() {
        return this.render();
    }
};

// teacher

class LabelTag {
    constructor(text, child) {
        this.text = text;
        this.child = child;
    }

    render() {
        return `<label>${this.text}${this.child}</label>`;
    }

    toString() {
        return this.render();
    }
}