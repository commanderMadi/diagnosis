import React from "react";
import PatientDiagnosis from "./PatientDiagnosis";

const Patients = ({
  patientsList,
  deleteDiagnose,
  editDiagnose,
}) => (
    <div>
      {patientsList.map((patient, index) => (
        <PatientDiagnosis key={index}
          {...{ id: index, patient, deleteDiagnose, editDiagnose }}
        />
      ))}
    </div>
  );

export default Patients;
