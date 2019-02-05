import React from 'react';
import Header from './Header';
import PatientDiagnosis from './PatientDiagnosis';
import AddPatient from './AddPatient';


export default class App extends React.Component {
    state = {
        patientsList: [],
        inEditMode: false,
        allowDelete: false
    }

    componentDidMount() {
        try {
            const data = localStorage.getItem('patientsList');
            const parsedData = JSON.parse(data);
            if (parsedData) {
                this.setState(() => ({ patientsList: parsedData }));
            }
        } catch (e) {

        }
    }

    componentDidUpdate(undefined, prevState) {
        if (prevState.patientsList.length !== this.state.patientsList.length) {
            const data = JSON.stringify(this.state.patientsList);
            localStorage.setItem('patientsList', data);
        }
    }

    addDiagnose = (patient) => {
        if(patient.name && patient.phone && patient.diagnosis) {
        this.setState((prevState) => ({ patientsList: prevState.patientsList.concat(patient)}));
        }
        else {
            return 'Please fill out all the fields to continue.';
        }
    }

    editDiagnose = (patient, id) => {
        if (!patient.name || !patient.phone || !patient.diagnosis) {
            return "Please fill out all the fields to continue.";
        }

        this.setState(prevState => {
            prevState.patientsList[id] = patient;
            return {
                patientsList: prevState.patientsList,
                inEditMode: !this.state.inEditMode
            }
        }
        )
    }

    toggleEdit = (id) => {
        console.log(id);
        this.setState(() => ({inEditMode: !this.state.inEditMode}))
        }

    deleteDiagnose = (patientToDelete) => {
        console.log(patientToDelete);
        this.setState(
            (prevState) => {
                prevState.patientsList.map(patient => console.log(patient));
                return {patientsList: prevState.patientsList.filter(patient => patientToDelete !==patient)};
            }
                
            
        )
    }

    render() {
        return (
            <div className="container">
                <Header />
                <PatientDiagnosis
                patientsList={this.state.patientsList}
                toggleEdit={this.toggleEdit}
                inEditMode={this.state.inEditMode}
                deleteDiagnose={this.deleteDiagnose}
                editDiagnose={this.editDiagnose} />
                <AddPatient addDiagnose={this.addDiagnose} />

            </div>
        )
    }
}

