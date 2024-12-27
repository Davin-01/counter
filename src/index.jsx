import { useEffect, useState } from "react";

export default function Demo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("The count is", count)
    }, [count]);

    return (
        <div className="practice p-4 bg-gray-100 rounded shadow-md text-center">
            <h1 className="text-2xl font-bold mb-4">Count: {count}</h1>
            <button
                className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
            <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => setCount(count - 1)}
            >
                Decrement
            </button>
        </div>
    );
}
