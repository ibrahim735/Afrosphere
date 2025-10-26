import Freetier from "./Freetier"
import Professionaltier from "./ProfessionalTier"
const Pricingtiers = () => {
  return (
    <section className='min-h-screen py-14 flex flex-col items-center justify-center'>
      <Freetier />
      <Professionaltier />
    </section>
  )
}

export default Pricingtiers