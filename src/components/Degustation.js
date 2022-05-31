
export default function Degustation(props) {
  const {details} = props
  return(
    <div className="degustation-preview">
   <div className="title-card">
    </div>
    {details.date_deg}
    {details.note_cuvee}
    {details.commentaire}
</div>
  )
}
