class SanitizerStripTagsDecorator {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }

    sanitize(text) {
        const strippedText = stripTags(text);
        return this.sanitizer.sanitize(strippedText);
    }
}