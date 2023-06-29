import StudentScores from "./StudentScores"
import '../style/style.css'

function StudentList({ student }) {
  const ds = student.scores.map((s, idx) => <StudentScores key={idx} dns={s} />)


  return (
    <>
      <h3 className="student-name" >{student.name}</h3>
      <p className="student-bio">{student.bio}</p>
      <ul className="date-score-ul">
        {ds}
      </ul>
      
    </>
  )
}

export default StudentList