
import Featurebox from '../components/Home/Featurebox'

function Landing() {
  return (
    <div className='-z-10'>
       <div className="w-full h-60 bg-light-blue ">
          <p className="text-dark-blue font-extralight text-[64px] max-sm:text-[35px] p-8">Enhances security, reduces fraud risk ,  streamlines document management for government and citizens</p>            
          </div>
          <p className="mt-28 text-2xl font-caveat text-dark-blue px-8">Delock can help you :</p>
          <div className="flex px-8">
                <Featurebox/>
                <Featurebox/>
                <Featurebox/>
          </div>
    </div>
  )
}

export default Landing
