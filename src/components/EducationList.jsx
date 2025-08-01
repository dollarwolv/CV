import EducationForm from "./EducationForm";

export default function EducationList({ educationList, updateEducationItem }) {
  return (
    <div className="education-list">
      {educationList.map((educationItem) => (
        <EducationForm
          key={educationItem.id}
          educationInfoItem={educationItem}
          updateEducationItem={updateEducationItem}
        />
      ))}
    </div>
  );
}
