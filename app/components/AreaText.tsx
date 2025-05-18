export default function AreaText(props: { text: string }) {
    return (
        <div className="area-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 text-center leading-[80%] z-0 font-bold">
            {props.text}
        </div>
    );
}