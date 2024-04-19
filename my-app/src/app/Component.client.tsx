'use client';

import { useState } from "react";

export default function Component() {
    const [items, setItems] = useState<string[]>([]);

    return (
        <>
            <hr/>
            <div><button onClick={() => {
                setItems([...items, `${items.length+1} client. ${new Date().toLocaleString()}`])
            }}>Add Client Item</button></div>
            <div>
                {items.map((item, index) => {
                    return (<div key={index}>{item}</div>)
                })}
            </div>
        </>
    )
}