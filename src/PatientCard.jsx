//مطلوب بالوظيفة  
//  الموقع : 
// https://alhasan-hospital.netlify.app
export default function PatientCard({ patient, selected, onToggleSelected, onDelete }) {
  return (
    <div>
      <div className="patient-card">
        {/* ------إضافي-------*/}
        <label className="patient-select" aria-label={`Select ${patient.name}`}>
          <input
            className="patient-select-input"
            type="checkbox"
            checked={selected}
            onChange={() => onToggleSelected(patient.id)}
          />
          <span className="patient-select-control" />
        </label>
        {/* مطلوب بالوظيفة */}
        <h2>{patient.name}</h2>
        <p>Age: {patient.age}</p>
        <p>Disease: {patient.disease}</p>
        <p>Phone: {patient.phone}</p>
        <button
                className="btn btn-delete"
                onClick={() => onDelete(patient.id)}
            >
                Delete
            </button>
      </div>
      
    </div>
  );
}