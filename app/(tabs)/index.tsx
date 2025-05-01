import React from 'react';
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";

export default function HomeScreen() {
    return (
        <>
            <ThemedView className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
                <ThemedText className="text-3xl font-bold mb-8 text-center" type="title">Barcode Generator and Reader</ThemedText>
                <ThemedView className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
                    <ThemedText className="p-4 text-center text-lg font-semibold" type="subtitle">Generator</ThemedText>
                    <ThemedText className="p-4 text-center text-lg font-semibold" type="subtitle">Reader</ThemedText>
                </ThemedView>
            </ThemedView>
        </>
    );
}

