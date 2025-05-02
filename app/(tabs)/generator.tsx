import {useState} from "react";
import {Text, TextInput} from "react-native";

export default function Generator() {
    const [value, setValue] = useState<string>("");

    const handleValueChange = (text: string) => {
        setValue(text);
    };

    return (
        <>
            <Text>Generator</Text>
            <TextInput
                value={value}
                onChangeText={handleValueChange}
                placeholder="Enter something..."
            />
            <Text>{value}</Text>
        </>
    );
}