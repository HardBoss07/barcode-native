import {useEffect, useState} from "react";
import bwipjs from "bwip-js";

interface BarcodeProps {
    chosenOption: string;
    value: string;
}

export default function Barcode({chosenOption, value}: BarcodeProps) {
    const [error, setError] = useState<string | null>(null);
    const [code, setCode] = useState<string>("");

    useEffect(() => {
        setError(null);

        try {
            setCode(bwipjs.toSVG({
                bcid: chosenOption,
                text: value,
                scale: 3,
                includetext: true,
                textxalign: 'center',
            }));
        } catch (e: any) {
            setError(e.message() || "Failed to generate barcode");
        }
    }, [chosenOption, value]);

    return (
        <>
        </>
    );
}