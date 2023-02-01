import StudentCard from "../StudentCard/StudentCard";
import { useState } from "react";

import "./StudentList.css";

const StudentList = ({ studentData }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  let dataToDisplay = studentData;

  if (searchInput) {
    dataToDisplay = studentData.filter((student) => {
      const { firstName, lastName } = student;
      const fullName = `${firstName} ${lastName}`.toLowerCase();

      return fullName.includes(searchInput.toLowerCase());
    });
  }

  const renderContent = () => {
    let contentClassName = "StudentList__content";

    if (dataToDisplay.length === 0) {
      contentClassName += " StudentList__content--center";
      return (
        <div className={contentClassName}>No results for {searchInput}</div>
      );
    } else {
      return (
        <div className={contentClassName}>
          {dataToDisplay.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      );
    }
  };

  console.log(`<StudentList /> rendered!`);
  return (
    <div className="StudentList">
      <div className="StudentList__input">
        <input
          value={searchInput}
          type="text"
          placeholder="Search by name"
          onChange={handleChange}
        />
      </div>
      {renderContent()}
    </div>
  );
};

export default StudentList;
