import "./App.css";
import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo.jsx";
import CV from "./components/CV.jsx";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  return (
    <>
      <div className="edit-info">
        <GeneralInfo formData={formData} setFormData={setFormData} />
      </div>
      <CV formData={formData}></CV>
    </>
  );
}

export default App;
