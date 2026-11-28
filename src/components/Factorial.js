import { useState } from "react"

function factorial(n)
{
    if (n < 0) return null;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

export default function Factorial() {
    const [value, setValue] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const v = e.target.value.replace(/[^0-9]/g, "");
        setValue(v);
        setResult(null);
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const n = parseInt(value, 10);
        if (isNaN(n) || n < 0) {
            setError("Введите неотрицательное целое число");
            setResult(null);
            return;
        }
        if (n > 170) {
            setError("Слишком большое число (макс. 170)");
            setResult(null);
            return;
        }
        setError("");
        setResult(factorial(n));
    };

    return (
        <div className="card">
            <h2>Факториал (n!)</h2>
            <form onSubmit={handleSubmit} className="card-form">
                <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Введите n (≥ 0)"
                    value={value}
                    onChange={handleChange}
                />
                <button type="submit">Вычислить</button>
            </form>
            {error && <p className="error">{error}</p>}
            {result !== null && (
                <p className="result">
                    {value}! = <strong>{result.toExponential(10)}</strong>
                </p>
            )}
        </div>
    );
}