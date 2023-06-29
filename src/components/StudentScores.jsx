import '../style/style.css'


function studentScores({ dns }) {


  return (

      <li><span className='date'>{dns.date}</span>: <span className='score'>{dns.score}</span></li>

  )
}

export default studentScores