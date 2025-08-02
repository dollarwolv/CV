import "./App.css";
import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo.jsx";
import CV from "./components/CV.jsx";
// import EducationForm from "./components/EducationForm.jsx";
import EducationList from "./components/EducationList.jsx";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [formData, setFormData] = useState({
    name: "Justin Dotzlaw",
    email: "justin@fakeemail.com",
    phone: "+49 1420 18718727",
    location: "Amsterdam, NL",
  });

  const [educationList, setEducationList] = useState([
    {
      id: uuidv4(),
      school: "University of Amsterdam",
      degree: "Bachelor of Psychology",
      startDate: "09/2022",
      endDate: "07/2025",
      location: "Amsterdam, NL",
    },
  ]);

  const [jobList, setJobList] = useState([
    {
      id: uuidv4(),
      company: "Los Pollos Hermanos",
      title: "Manager",
      jobDescription:
        "During my time at Los Polles Hermanos, I oversaw the entire operations of the restaurant. I also spearheaded the launch of a new product, increasing profits by 50.000%.",
      startDate: "01/2008",
      endDate: "09/2013",
      location: "Albuquerque, N.M.",
    },
  ]);

  function updateEducationItem(id, updatedItem) {
    setEducationList((prev) =>
      prev.map((item) => (item.id === id ? updatedItem : item))
    );
  }

  function updateJobItem(id, updatedItem) {
    setJobList((prev) =>
      prev.map((item) => (item.id === id ? updatedItem : item))
    );
  }

  function deleteEducationItem(id) {
    setEducationList((prev) => prev.filter((item) => item.id !== id));
  }

  function deleteJobItem(id) {
    setJobList((prev) => prev.filter((item) => item.id !== id));
  }

  function addEducation() {
    setEducationList((prev) => [
      ...prev,
      {
        id: uuidv4(),
        school: "New Education",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ]);
  }

  function addJob() {
    setJobList((prev) => [
      ...prev,
      {
        id: uuidv4(),
        company: "New Job",
        title: "",
        jobDescription: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ]);
  }

  return (
    <>
      <div className="edit-info">
        <GeneralInfo formData={formData} setFormData={setFormData} />
        <EducationList
          educationList={educationList}
          updateEducationItem={updateEducationItem}
          addEducation={addEducation}
          deleteEducationItem={deleteEducationItem}
          type={"school"}
        />
        <EducationList
          educationList={jobList}
          updateEducationItem={updateJobItem}
          addEducation={addJob}
          deleteEducationItem={deleteJobItem}
          type={"work"}
        />
      </div>
      <CV
        formData={formData}
        educationList={educationList}
        jobList={jobList}
      ></CV>
    </>
  );
}

export default App;
