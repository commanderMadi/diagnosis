import React from 'react';
import DiagnosisForm from './DiagnosisForm';

export default class AddPatient extends React.Component {
    state = {
        error: undefined,
        addNewPatient: false
    }

    addNewPatient = (e) => {
        e.preventDefault();
        this.setState(() => ({ addNewPatient: !this.state.addNewPatient }));
    }

    cancelForm = (e) => {
        e.preventDefault();
        this.setState(() => ({ error: undefined, addNewPatient: !this.state.addNewPatient }));
    }

    handleAddOption = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value.trim();
        const phone = e.target.elements.phone.value.trim();
        const diagnosis = e.target.elements.diagnosis.value.trim();
        const patient = { name, phone, diagnosis };
        const error = this.props.addDiagnose(patient);
        if (patient.name && patient.phone && patient.diagnosis) {
            this.setState(() => ({ error, addNewPatient: !this.state.addNewPatient }));
        }
        else {
            this.setState(() => ({ error: 'Please fill out all the fields to continue.' }));
        }

    }
    render() {
        return (
            <div className="add-patient">
                {this.props.patientsList.length === 0 &&
                    <div className="no-patient-info">
                        <p className="no-patient-info__body">No records found. Start by adding new patient diagnosis.</p>
                        {!this.state.addNewPatient && <button onClick={this.addNewPatient} className="no-patient-info__btn btn btn-primary" role="button">Create A Patient Diagnosis</button>}
                    </div>
                }
                {this.state.error && <p className="alert alert-danger patient-form__error" role="alert">{this.state.error}</p>}
                {!this.state.addNewPatient && this.props.patientsList.length >= 1 && <button onClick={this.addNewPatient} className="btn btn-primary">Add A New Patient</button>}
                {this.state.addNewPatient &&
                    <form
                        className="add-option"
                        id="patient-form"
                        onSubmit={this.handleAddOption}>
                        <DiagnosisForm handleAddOption={this.handleAddOption} />
                        <button className="btn btn-primary patient-form__btn" type="submit">Save</button>
                        <button onClick={this.cancelForm} className="btn btn-warning patient-form__btn">Cancel</button>
                    </form>
                }
            </div>
        )
    }
}