import EducationForm from "./EducationForm";

export default function EducationList({
  educationList,
  updateEducationItem,
  addEducation,
  deleteEducationItem,
  type,
}) {
  return (
    <div className="education-list">
      {type === "school" ? <h2>Education</h2> : <h2>Work Experiences</h2>}
      {educationList.map((educationItem) => (
        <EducationForm
          key={educationItem.id}
          educationInfoItem={educationItem}
          updateEducationItem={updateEducationItem}
          deleteEducationItem={deleteEducationItem}
        />
      ))}
      <button onClick={() => addEducation()}>Add Experience</button>
    </div>
  );
}
