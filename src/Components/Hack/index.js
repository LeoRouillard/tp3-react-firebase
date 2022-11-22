import { useState } from "react";
import QRCode from "react-qr-code";

export default function Hack({ route }) {
    console.log(route);

    return (
        <div>
            <QRCode value={process.env.REACT_APP_QR_CODE} />
        </div>
    )
}