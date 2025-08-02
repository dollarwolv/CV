import EducationForm from "./EducationForm";

export default function EducationList({
  educationList,
  updateEducationItem,
  addEducation,
  deleteEducationItem,
}) {
  return (
    <div className="education-list">
      {educationList.map((educationItem) => (
        <EducationForm
          key={educationItem.id}
          educationInfoItem={educationItem}
          updateEducationItem={updateEducationItem}
          deleteEducationItem={deleteEducationItem}
        />
      ))}
      <button onClick={() => addEducation()}>Add Education</button>
    </div>
  );
}
