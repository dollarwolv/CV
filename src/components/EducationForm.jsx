import { useState } from "react";
import "../styles/EducationForm.css";

export default function EducationForm({
  educationInfoItem,
  updateEducationItem,
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
          <h2 className="form-heading">Education</h2>
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
        </form>
      ) : (
        <div className="collapsed-education-info">
          <span className="education-item-title">
            {educationInfoItem.school}
          </span>
          <button onClick={() => setIsSubmitted(false)}>Edit</button>
        </div>
      )}
    </>
  );
}
