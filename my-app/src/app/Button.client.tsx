'use client';

type ButtonProps = {
    onClick: () => Promise<void>;
};

export default function Button(props: ButtonProps) {
    return (
        <button onClick={async () => {await props.onClick()}}>Click me</button>
    )
}