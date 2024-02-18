// import db from "../../Database";
import { useParams } from "react-router-dom";
import { TbFileImport } from "react-icons/tb";
import { BsFunnel } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { LiaFileImportSolid } from "react-icons/lia";
import "./index.css";
import { assignments, enrollments, grades, users } from "../../Database/index";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <h1>Grades</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {as.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>

          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user?.firstName} {user?.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;

