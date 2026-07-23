import Myphoto from '../assets/Myphoto.jpeg'

const image = () => {
  return (
    <div className="flex justify-between items-center w-full">
        <img className="w-72 h-72 rounded-full object-cover transition-transform duration-300 hover:scale-110 inline-block" src={Myphoto} alt="Shaurya's Photo"></img>
    </div>
  )
}

export default image