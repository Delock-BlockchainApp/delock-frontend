import overview_img from "../assets/overview_pic1.svg"
import Card_component2 from "../components/Card_component2"
import Overview_component1 from "../components/Overview_component1"
import TextComponent2 from "../components/TextComponent2"
function Overview() {
  return (
    <div className="h-full p-5 overflow-y-scroll scrollbar">
      <div className="h-32 w-[655px] bg-light-blue p-3 flex justify-between rounded-md">
        <div>
              <div className="flex text-3xl gap-3"><h3 className="text-dark-blue font-semibold">Welcome</h3><h3 className="font-light">Nandkishor R ,</h3></div>
              <p className="font-light font-lg">Great to have you back in the Delock are ready to go! </p>
        </div>
        <img src={overview_img} alt="secure_img" />
      </div>
      <div className="mt-5">
        <TextComponent2 text="Your latest searches"/>
        <div className="flex"> 
        <Overview_component1 />
        <Overview_component1 />
        <Overview_component1 />
        <Overview_component1 />
        </div>
        <div className=" flex items-center rounded-lg bg-light-blue pt-1 w-11/12 mt-2 h-12 mb-10 ">
          <div className="text-base ml-4 font-light text-dark-blue text-xl">Enhances security, reduces fraud risk,  streamlines document management for government and citizens.</div>
        </div>
        <TextComponent2 text="Documents you might need"/>
        <div className="flex w-full grid grid-cols-4 ">
          <Card_component2 Name="Aadhaar Card"/>
          <Card_component2 Name="Driving License"/>
          <Card_component2 Name="PAN Verification"/>
          <Card_component2 Name="Class X Marksheet"/>
          <Card_component2 Name="Registration of Vehicles"/>
          <Card_component2 Name="Voter ID"/>
          <Card_component2 Name="Life Insurance"/>
          <Card_component2 Name="Ration Card"/>
          <Card_component2 Name="Caste Certificate"/>
          <Card_component2 Name="Residence Certificate"/>

        </div>
        <div className=" flex items-center rounded-lg bg-light-blue pt-1 w-11/12 mt-10 h-10 mb-10 ">
          <div className="text-base ml-4 font-light text-dark-blue text-lg">Securely upload and personalize your documents in the cloud, tailored just for you. Upload personal documents with Delock in Your Docs</div>
        </div>
       
      </div >
     
    </div>
  )
}

export default Overview
