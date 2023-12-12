function findNaughtyStep(original, modified) {
    const longerString = original.length > modified.length ? original : modified;
    const shorterString = original.length > modified.length ? modified : original;

    for (let i = 0; i < longerString.length; i++) {
        if (longerString[i] !== (shorterString[i] || '')) {
            return longerString[i];
        }
    }

    return '';
}