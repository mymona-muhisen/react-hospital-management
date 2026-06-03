import { useState } from "react";

export default function AddPatientForm({onAddPatient}) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [disease, setDisease] = useState("");
    const [phone, setPhone] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();

    const patient = {
        name,
        age,
        disease,
        phone
    };

    onAddPatient(patient);
};

    return (
        <div>
            <div className="form-container">
                <h2 className="form-title">Add a New Patient</h2>
                <form className="patient-form" onSubmit={handleSubmit}>
                <label className="form-label">
                Name:
                <input
                type="text"
                name="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                required
                />
                </label>
                <label className="form-label">
                    Age:
                    <input
                        type="number"
                        name="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="form-input"
                        required
                    />
                </label>
                <label className="form-label">
                    Disease:
                    <input
                        type="text"
                        name="Disease"
                        value={disease}
                        onChange={(e) => setDisease(e.target.value)}
                        className="form-input"
                        required
                    />
                </label>
                <label className="form-label">
                    Phone:
                    <input
                        type="tel"
                        name="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-input"
                        required
                    />
                </label>
                <button type="submit">Add Patient</button>
            </form>
        </div>
        </div>
    );
}




