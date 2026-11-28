import { useState } from "react";

function getFibonacci(n) {
    if (n <= 0) return [];
    const arr = new Array(n);
    arr[0] = 0;
    if (n > 1) arr[1] = 1;
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}

export default function Fibonacci() {
    const [count, setCount] = useState("");
    const [sequence, setSequence] = useState(null);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const v = e.target.value.replace(/[^0-9]/g, "");
        setCount(v);
        setSequence(null);
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const n = parseInt(count, 10);
        if (isNaN(n) || n <= 0) {
            setError("Введите целое число > 0");
            setSequence(null);
            return;
        }
        if (n > 90) {
            setError("Слишком много чисел (макс. 90)");
            setSequence(null);
            return;
        }
        setError("");
        setSequence(getFibonacci(n));
    };

    return (
        <div className="card">
            <h2>Числа Фибоначчи</h2>
            <form onSubmit={handleSubmit} className="card-form">
                <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Сколько чисел показать?"
                    value={count}
                    onChange={handleChange}
                />
                <button type="submit">Построить</button>
            </form>
            {error && <p className="error">{error}</p>}
            {sequence && (
                <ul className="fib-list">
                    {sequence.map((num, i) => (
                        <li key={i}>
                            F({i}) = <strong>{num}</strong>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
