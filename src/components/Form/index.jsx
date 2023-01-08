import React, { useState } from 'react'

const Form = () => {
    const [form, setForm] = useState({
        secret: '',
    });
    const [checked, setChecked] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    }

    return (
        <div>
            <label htmlFor="secret">Secret</label>
            <input id="secret" type="text" value={form.secret} onChange={handleChange} />
            <input type="checkbox" checked={checked} id="checkbox" onChange={(e) => setChecked(prev => !prev)} />
        </div>
    );
}

export default Form