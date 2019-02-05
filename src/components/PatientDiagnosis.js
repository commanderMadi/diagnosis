import React from 'react'
import EditDiagnosis from './EditDiagnosis';

const PatientDiagnosis = ({patientsList, deleteDiagnose, editDiagnose, inEditMode, toggleEdit}) => (
    <div>
    {patientsList.map((patient, index) => {
        return (
            <div key={index}>
            <h1>{patient.name}</h1>
            <h1>{patient.phone}</h1>
            <h1>{patient.diagnosis}</h1>
            <button onClick={e => {e.preventDefault(); toggleEdit(patient)}}>Edit Diagnosis</button>
            {inEditMode && <EditDiagnosis id={index} patient={patient} editDiagnose={editDiagnose} deleteDiagnose={deleteDiagnose}/>}
            </div>
        )
    })}
    </div>
    )


export default PatientDiagnosis;