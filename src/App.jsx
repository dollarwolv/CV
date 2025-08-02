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

  function updateEducationItem(id, updatedItem) {
    setEducationList((prev) =>
      prev.map((item) => (item.id === id ? updatedItem : item))
    );
  }

  function deleteEducationItem(id) {
    setEducationList((prev) => prev.filter((item) => item.id !== id));
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

  return (
    <>
      <div className="edit-info">
        <GeneralInfo formData={formData} setFormData={setFormData} />
        <EducationList
          educationList={educationList}
          updateEducationItem={updateEducationItem}
          addEducation={addEducation}
          deleteEducationItem={deleteEducationItem}
        />
      </div>
      <CV formData={formData} educationList={educationList}></CV>
    </>
  );
}

export default App;
