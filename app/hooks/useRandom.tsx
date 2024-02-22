import {useState} from "react";

type useRandomReturn = [number, (value:number) => void, () => void]

function useRandom(max: number):useRandomReturn {
    const [value, setValue] = useState<number>(-1);

    function rollValue() {
        setValue(randInt(max));
    }

    return [value, setValue, rollValue]
}


function randInt(max: number): number {
    return Math.floor(Math.random() * max)
}


export default useRandom