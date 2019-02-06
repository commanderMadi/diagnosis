import React from 'react';

const DiagnosisForm = props => (
    <div>

        <div className="form-group">
            <label
                className="patient-form__label"
                htmlFor="patient-name">Name</label>
            <input
                className="form-control form-control-lg patient-form__input"
                aria-describedby="patientName"
                placeholder="Enter patient name..."
                onChange={props.changeName}
                type="text"
                name="name"
                value={props.name} />
        </div>

        <div className="form-group">
            <label
                className="patient-form__label"
                htmlFor="patient-phone">Phone</label>
            <input
                className="form-control form-control-lg patient-form__input"
                aria-describedby="patientPhone"
                placeholder="Enter patient phone..."
                onChange={props.changePhone}
                type="number"
                name="phone"
                value={props.phone} />
        </div>

        <div className="form-group">
            <label
                className="patient-form__label"
                htmlFor="patient-diagnosis">Diagnosis</label>
            <textarea
                className="form-control form-control-lg"
                onChange={props.changeDiagnosis}
                name="diagnosis"
                value={props.diagnosis}></textarea>
        </div>

    </div>
)

export default DiagnosisForm;