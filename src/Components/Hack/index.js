import QRCode from "react-qr-code";

export default function Hack({ route }) {
   // const supported = 'contacts' in navigator;

    async function hack() {
        console.log('hack');
        const supportedProperties = await navigator.contacts.getProperties();
        if (supportedProperties.includes('tel')) {
            const contacts = await navigator.contacts.select();
            console.log(contacts);
        } else {
            alert('Pas de contact à hacker');
        }
      }

    return (
        <div>
            <button className="button" onClick={() => hack()}>Hack</button><br/>
            <QRCode value={process.env.REACT_APP_QR_CODE} />
        </div>
    )
}