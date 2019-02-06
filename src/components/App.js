import React from 'react';
import Header from './Header';
import Patients from './Patients';
import AddPatient from './AddPatient';


export default class App extends React.Component {
    state = {
        patientsList: [],
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

        if (patient.name && patient.phone && patient.diagnosis) {
            this.setState((prevState) => ({ patientsList: prevState.patientsList.concat(patient) }));
        }
    }

    editDiagnose = (patient, id) => {
        if (!patient.name || !patient.phone || !patient.diagnosis) {
            return "Please fill out all the fields to continue.";
        }

        this.setState(prevState => {
            prevState.patientsList[id] = patient;
            return {
                patientsList: prevState.patientsList
            }
        }
        )
    }

    deleteDiagnose = (patientToDelete) => {
        console.log(patientToDelete);
        this.setState(
            (prevState) => {
                prevState.patientsList.map(patient => console.log(patient));
                return { patientsList: prevState.patientsList.filter(patient => patientToDelete !== patient) };
            }


        )
    }

    render() {
        return (
            <div className="container">
                <Header />

                <Patients
                    patientsList={this.state.patientsList}
                    deleteDiagnose={this.deleteDiagnose}
                    editDiagnose={this.editDiagnose} />

                <AddPatient patientsList={this.state.patientsList} addDiagnose={this.addDiagnose} />

            </div>
        )
    }
}

