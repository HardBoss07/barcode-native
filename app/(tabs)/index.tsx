import React from 'react';
import {Text, View} from "react-native";

export default function HomeScreen() {
    return (
        <View className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
            <Text className="text-3xl font-bold mb-8 text-center">Barcode Generator and Reader</Text>
            <View className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
                <Text className="p-4 text-center text-lg font-semibold">Generator</Text>
                <Text className="p-4 text-center text-lg font-semibold">Reader</Text>
            </View>
        </View>
    );
}

