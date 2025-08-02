import "../styles/CV.css";

export default function CV({ formData, educationList }) {
  return (
    <div className="main-cv-container">
      <section className="header">
        <div className="header-content-container">
          <h2 className="cv-name">{formData.name}</h2>
          <div className="personal-details-container">
            <span className="personal-details-item">{formData.email}</span>
            <span className="personal-details-item">{formData.phone}</span>
            <span className="personal-details-item">{formData.location}</span>
          </div>
        </div>
      </section>
      <section className="education">
        <div className="education-header">
          <h3>Education</h3>
        </div>
        <div className="education-list"></div>
        <CVEducationList educationList={educationList} />
      </section>
    </div>
  );
}

function CVEducationList({ educationList }) {
  return (
    <>
      {educationList.map((item) => (
        <div className="education-item">
          <div className="education-date-location">
            <div className="education-date">
              <span className="start-date">{item.startDate} - </span>
              <span className="end-date">{item.endDate}</span>
            </div>
            <span className="education-location">{item.location}</span>
          </div>
          <div className="education-uni-degree">
            <span className="education-uni">{item.school}</span>
            <span className="education-degree">{item.degree}</span>
          </div>
        </div>
      ))}
    </>
  );
}
