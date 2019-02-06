import React from "react";
import EditDiagnosis from "./EditDiagnosis";

class PatientDiagnosis extends React.Component {
    state = {
        inEditMode: false
    }
    openEditor = () => {
        this.setState(() => ({ inEditMode: true }));
    }
    closeEditor = () => {
        this.setState(() => ({ inEditMode: false }));
    }
    render() {
        const { patient, id, editDiagnose, deleteDiagnose } = this.props;
        return (
            <div className="patient-record">
                <p className="patient-record__data"><span className="patient-record__label">Patient Name</span>{patient.name}</p>
                <p className="patient-record__data"><span className="patient-record__label">Patient Phone</span>{patient.phone}</p>
                <p className="patient-record__data"><span className="patient-record__label">Patient Diagnosis</span>{patient.diagnosis}</p>
                {!this.state.inEditMode && <button className="patient-record__btn btn btn-primary" onClick={this.openEditor}>Edit Diagnosis</button>}
                {this.state.inEditMode && (
                    <EditDiagnosis
                        id={id}
                        closeEditor={this.closeEditor}
                        patient={patient}
                        editDiagnose={editDiagnose}
                        deleteDiagnose={deleteDiagnose}
                    />
                )}
            </div>
        )
    }
}

export default PatientDiagnosis;