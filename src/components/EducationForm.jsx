import { useState } from "react";
import "../styles/EducationForm.css";

export default function EducationForm({
  educationInfoItem,
  updateEducationItem,
  deleteEducationItem,
}) {
  const keys = Object.keys(educationInfoItem);
  const [isSubmitted, setIsSubmitted] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <>
      {!isSubmitted ? (
        <form className="education-form" onSubmit={handleSubmit}>
          {keys.map(
            (field) =>
              field !== "id" && (
                <div className="form-question" key={field}>
                  <label htmlFor={field}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type="text"
                    name={field}
                    id={field}
                    value={educationInfoItem[field]}
                    onChange={(e) => {
                      const newItem = {
                        ...educationInfoItem,
                        [field]: e.target.value,
                      };
                      updateEducationItem(educationInfoItem.id, newItem);
                    }}
                  />
                </div>
              )
          )}
          <button type="submit">Done</button>
          <button
            onClick={() => deleteEducationItem(educationInfoItem.id)}
            style={{ backgroundColor: "red" }}
          >
            Delete Education
          </button>
        </form>
      ) : (
        <div className="collapsed-education-info">
          <span className="education-item-title">
            {educationInfoItem.school || educationInfoItem.company}
          </span>
          <button onClick={() => setIsSubmitted(false)}>Edit</button>
        </div>
      )}
    </>
  );
}
