import React from 'react';
import DiagnosisForm from './DiagnosisForm';

export default class EditDiagnosis extends React.Component {
    state = {
        id: this.props.id,
        name: this.props.patient.name,
        phone: this.props.patient.phone,
        diagnosis: this.props.patient.diagnosis,
        error: undefined
    }
    editDiagnose = (e, id) => {
        e.preventDefault();
        id = this.state.id;
        const name = this.state.name;
        const phone = this.state.phone;
        const diagnosis = this.state.diagnosis;
        const patient = {name, phone, diagnosis}
        const error = this.props.editDiagnose(patient, id);
        this.setState(()=>({error}));
        if (!error) {
            e.target.elements.name.value = '';
            e.target.elements.phone.value = '';
            e.target.elements.diagnosis.value = '';
        }
    }

    toggleEdit = (e) => {
        e.preventDefault();
        this.setState(() => ({allowEdit: !this.state.allowEdit}))
    }

    changeName = (e) => {
        const name = e.target.value;
        this.setState(() => ({name}))
    }

    changePhone = (e) => {
        const phone = e.target.value;
        this.setState(() => ({phone}))
    }

    changeDiagnosis = (e) => {
        const diagnosis = e.target.value;
        this.setState(() => ({diagnosis}))
    }

    render() {
        return (
            <div>
            {this.state.error && <p className="alert alert-danger" role="alert">{this.state.error}</p>}
            {
                <form
                className="add-option"
                id="patient-form"
                onSubmit={this.editDiagnose}>
                <DiagnosisForm 
                changeName={this.changeName}
                changePhone={this.changePhone}
                changeDiagnosis={this.changeDiagnosis} 
                name={this.state.name} 
                phone={this.state.phone} 
                diagnosis={this.state.diagnosis} 
                editDiagnose={this.editDiagnose}/>
                <button className="btn btn-success" type="submit">Save Changes</button>
                <button 
                className="btn btn-danger"
                onClick={
                    e => {
                        e.preventDefault();
                        console.log(this.props.deleteDiagnose);
                        this.props.deleteDiagnose(this.props.patient);
                    }
                }>Delete Diagnosis</button>
                </form>}
            </div>
        )
    }
}