import { useState } from "react";

const useCreateNewItem = (
    prop: string
): [string, string[], (prop: number) => void, string] => {
    const [inputValue, setInputValue] = useState<string>(prop); //adicionar ao hook

    const [itemArray, setItemArray] = useState<string[]>([
        "item1"
    ]);

    const createNewItem = () => {
        //adicionar ao hook
        const tempArr = [...itemArray, inputValue];
        setItemArray(tempArr);
        setInputValue("");
    };

    return [inputValue, itemArray, createNewItem, setInputValue];
};

export default useCreateNewItem;
