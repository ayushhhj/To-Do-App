import { useState } from "react";
import axios from "axios";

export function UpdateTodo({ _id, handleClose, handleChange }) {
    const [data, setData] = useState({ title: "", description: "", duration: "" });

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log({ _id }, { data });

        axios
            .put(`http://localhost:8000/api/todo/${_id}`, data)
            .then((res) => {
                setData({ title: "", description: "", duration: "" });
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log("Failed to update todo");
                console.log(err.message);
            });
    }

    return (
        <form
            className="form-container"
            onSubmit={(e) => {
                handleSubmit(e);
                handleChange(e);
                handleClose(e);
            }}
        >
            <label htmlFor="title" className="label">
                Title
            </label>
            <input
                type="text"
                name="title"
                className="input"
                onChange={handleChange}
            />
            <label htmlFor="description" className="label">
                Description
            </label>
            <input
                type="text"
                name="description"
                className="input"
                onChange={handleChange}
            />
            <label className="label" htmlFor="duration">
                        Duration
                    </label>
                    <input
                        type="text"
                        name="duration"
                        value={data.duration}
                        onChange={handleChange}
                        className="input"
                    />
            <button type="submit" className="button">
                Submit
            </button>
        </form>
    );
}