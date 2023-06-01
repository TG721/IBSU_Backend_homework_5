export default function UniqueCharacters(text){
    const charsCount = new Map();

    for (let char of text){
        let tempCharCount = charsCount.get(char);
        //check if value exists on this key
        if(tempCharCount==undefined)
        {
            charsCount.set(char, 1);
        }
        else {
            charsCount.set(char, ++tempCharCount);
        }
    }
    return charsCount;
}
