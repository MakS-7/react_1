import { useState } from "react";

export default function Power() {
    const [base, setBase] = useState("");
    const [exponent, setExponent] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const b = parseFloat(base);
        const exp = parseFloat(exponent);

        if (isNaN(b) || isNaN(exp)) {
            setError("Введите числа в обоих полях");
            setResult(null);
            return;
        }

        // Защита от огромных чисел
        if (Math.abs(b) > 1e15 || Math.abs(exp) > 1e15) {
            setError("Числа слишком большие");
            setResult(null);
            return;
        }

        const r = Math.pow(b, exp);
        if (!isFinite(r)) {
            setError("Результат переполняет числовое значение");
            setResult(null);
            return;
        }

        setError("");
        setResult(r);
    };

    return (
        <div className="card">
            <h2>Возведение в степень</h2>
            <form onSubmit={handleSubmit} className="card-form">
                <input
                    type="number"
                    step="any"
                    placeholder="Основание"
                    value={base}
                    onChange={(e) => { setBase(e.target.value); setResult(null); setError(""); }}
                />
                <input
                    type="number"
                    step="any"
                    placeholder="Степень"
                    value={exponent}
                    onChange={(e) => { setExponent(e.target.value); setResult(null); setError(""); }}
                />
                <button type="submit">Вычислить</button>
            </form>
            {error && <p className="error">{error}</p>}
            {result !== null && (
                <p className="result">
                    {base}<sup>{exponent}</sup> = <strong>{result}</strong>
                </p>
            )}
        </div>
    );
}
