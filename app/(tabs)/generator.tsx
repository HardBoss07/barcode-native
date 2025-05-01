import {ThemedText} from "@/components/ThemedText";
import {useRef, useState} from "react";
import {ThemedView} from "@/components/ThemedView";
import {TextInput} from "react-native";

export default function Generator() {
    const [value, setValue] = useState<string>("");

    const handleValueChange = (text: string) => {
        setValue(text);
    };

    return (
        <ThemedView>
            <ThemedText type="title">Generator</ThemedText>
            <TextInput
                value={value}
                onChangeText={handleValueChange}
                placeholder="Enter something..."
            />
            <ThemedText type="defaultSemiBold">{value}</ThemedText>
        </ThemedView>
    );
}