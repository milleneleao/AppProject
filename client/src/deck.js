function shuffle(array){
    //copy of the array. slice(0) copy all obj to the new array
    const _array = array.slice(0);
    for(let i = 0; i < array.length - 1; i++){
        let randomI = Math.floor(Math.random() * (i + 1));
        let temp = _array[i];
        //swap to values
        _array[i] = _array[randomI];
        _array[randomI] = temp;
    }
    return _array
}

export default function initializeDeck(){
    //unique identifier
    let id = 0;
    //reduce(arrow func, index) allows to build up new obj or array based on each iteration
    const cards = ['alligator', 'apple', 'astronaut', 'arm'].reduce((acc, type) => {
        //push js obj
        acc.push({
            id: id++,
            type
        })
        acc.push({
            id: id++,
            type
        })
        return acc
    }, []);

    return shuffle(cards)
}