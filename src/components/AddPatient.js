import React from 'react';
import DiagnosisForm from './DiagnosisForm';
export default class AddPatient extends React.Component {
    state = {
        error: undefined,
        addNewPatient: false
    }

    addNewPatient = (e) => {
        e.preventDefault();
        this.setState(() => ({addNewPatient: !this.state.addNewPatient}));
    }

    cancelForm = (e) => {
        e.preventDefault();
        this.setState(() => ({error: undefined, addNewPatient: !this.state.addNewPatient}));
    }

    handleAddOption = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value.trim().toLowerCase();
        const phone = e.target.elements.phone.value.trim().toLowerCase();
        const diagnosis = e.target.elements.diagnosis.value.trim().toLowerCase();
        const patient = {name, phone, diagnosis};
        const error = this.props.addDiagnose(patient);
        // this.setState(()=>({error, patientId: this.state.patientId + 1}));

        if(patient.name && patient.phone && patient.diagnosis) {
            this.setState(()=>({addNewPatient: !this.state.addNewPatient}));
        }

        if (!error) {
            e.target.elements.name.value = '';
            e.target.elements.phone.value = '';
            e.target.elements.diagnosis.value = '';
        }
    }
    render() {
        return (
            <div className="add-patient">
            {this.state.error && <p className="alert alert-danger" role="alert">{this.state.error}</p>}
            {!this.state.addNewPatient && <button onClick={this.addNewPatient} className="btn btn-primary">Add A New Patient</button>}
            {this.state.addNewPatient &&
                <form
                className="add-option"
                id="patient-form"
                onSubmit={this.handleAddOption}>
                <DiagnosisForm handleAddOption={this.handleAddOption}/>
                <button className="btn btn-primary patient-form__btn" type="submit">Save</button>
                <button onClick={this.cancelForm} className="btn btn-warning">Cancel</button>
                </form>
                }
            </div>
        )
    }
}