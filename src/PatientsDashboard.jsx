import React, { useMemo, useState } from 'react';
import PatientCard from './PatientCard';
import { TrashSimple } from '@phosphor-icons/react';
import AddPatientForm from './AddPatientForm';
// مطلوب بالوظيفة 
export default function PatientsDashboard() {
    const [patients, setPatients] = useState([
        { id: 1, name: 'John Doe', age: 30, disease: 'Flu', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', age: 25, disease: 'Cold', phone: '098-765-4321' },
        { id: 3, name: 'Bob Johnson', age: 40, disease: 'Allergy', phone: '555-555-5555' },
        { id: 4, name: 'Alice Brown', age: 35, disease: 'Asthma', phone: '111-111-1111' },
        { id: 5, name: 'Charlie Davis', age: 28, disease: 'Diabetes', phone: '222-222-2222' },
    ]);
//  ------إضافي-------
    const [selectedIds, setSelectedIds] = useState(() => new Set());

    const selectedCount = useMemo(() => selectedIds.size, [selectedIds]);
    const [showModal, setShowModal] = useState(false);

    const toggleSelected = (id) => {
        setSelectedIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const handleDeleteSelected = () => {
        if (selectedIds.size === 0) return;
        setPatients((prev) => prev.filter((patient) => !selectedIds.has(patient.id)));
        setSelectedIds(new Set());
    };

    const handleClearSelection = () => {
    setSelectedIds(new Set());
};
 // مطلوب بالوظيفة   
    const handleDelete = (id) => {
        const newPatients = patients.filter(patient => patient.id !== id);
        setPatients(newPatients);
    }
    const handleAddPatient = (newPatient) => {
    const patient = {
        id: Date.now(),
        ...newPatient,
    };

    setPatients((prev) => [...prev, patient]);
    setShowModal(false);
};

    return (
        <div className="patients-page">
            <h1>Patients Dashboard:</h1>
           <div className="patients-actions">
    <button
    className="btn btn-add"
    onClick={() => setShowModal(true)}
>
    Add Patient
</button>

    {selectedCount > 0 && (
        <>
            <button
                className="btn btn-clear"
                onClick={handleClearSelection}
            >
                Clear Selection
            </button>

            <button
                className="btn btn-danger"
                onClick={handleDeleteSelected}
            >
                <TrashSimple size={32} /> ({selectedCount})
            </button>
        </>
    )}
</div>

            <div className="patients-grid">
                {patients.map((patient) => (
                    <PatientCard
                        key={patient.id}
                        patient={patient}
                        selected={selectedIds.has(patient.id)}
                        onToggleSelected={toggleSelected}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
            {showModal && (
    <div className="modal-overlay">
        <div className="modal-content">
            <button
                className="modal-close"
                onClick={() => setShowModal(false)}
            >
                ✕
            </button>

            <AddPatientForm
                onAddPatient={handleAddPatient}
            />
        </div>
    </div>
)}
        </div>
    );
}