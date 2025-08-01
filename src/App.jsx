import "./App.css";
import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo.jsx";
import CV from "./components/CV.jsx";
import EducationForm from "./components/EducationForm.jsx";

function App() {
  const [formData, setFormData] = useState({
    name: "Justin Dotzlaw",
    email: "justin@fakeemail.com",
    phone: "+49 1420 18718727",
    location: "Amsterdam, NL",
  });

  const [educationList, setEducationList] = useState([
    {
      school: "University of Amsterdam",
      degree: "Bachelor of Psychology",
      startDate: "01.09.2022",
      endDate: "30.06.2025",
      location: "Amsterdam, NL",
    },
  ]);

  return (
    <>
      <div className="edit-info">
        <GeneralInfo formData={formData} setFormData={setFormData} />
        <EducationForm educationInfoItem={educationList[0]} />
      </div>
      <CV formData={formData} educationList={educationList}></CV>
    </>
  );
}

export default App;
