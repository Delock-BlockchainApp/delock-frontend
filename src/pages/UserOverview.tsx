import { useNavigate } from "react-router-dom"
import overview_img from "../assets/overview_pic1.svg"
import Card_component2 from "../components/Card_component2"
import Overview_component1 from "../components/Overview_component1"
import Profile from "../components/Profile"
import TextComponent2 from "../components/TextComponent2"
import { useRecoilState} from "recoil"
import { userState } from "../recoil"
import { useEffect, useState } from "react"
import axios from "axios"
import { useAuth } from "../context/useAuth"
import toast from "react-hot-toast"
import Loader from "../components/Loader"
import {  ImportantDocuments } from "../utils/dataUtils"
import { useBlockchain } from "../context/BlockchainContext"

  function UserOverview() {
  
    
    const [user, setUser] = useRecoilState(userState);
    const [loading, setLoading] = useState(false);
 const { contract, account } = useBlockchain();
 const [documents, setDocuments] = useState<any[]>([]);

    const navigate = useNavigate();
    const auth = useAuth()
    const BACKEND_URL=import.meta.env.VITE_REACT_URL_BACKEND_URL


  const handleNavigate = (doc: {dep_code:string; doc_code: string; dep_name: string;state:string;title:string },index:number) => {
    navigate(`documents/issuers/${doc.dep_code}/${doc.doc_code}`, {
      state: {
        ...ImportantDocuments[index],
        document_name: doc.title,
      },
    });
  };
  
  const formatLastLogin = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short", // This gives time like 4:15 PM
    });
  };
  
  const fetchUserDetails = async () => {
    try {
      console.log("Fetching user details...");
      if (!auth.account) {
        toast.error("Wallet address not found.");
        return;
      }
      
      setLoading(true); // Set loading to true at the start of the fetch
      
      const response = await axios.get(`${BACKEND_URL}/api/users?address=${auth.account}`);
      
      if (response.status === 200 && response.data) {
        const user = response.data;
        const currentTime = new Date().toISOString();
        const formattedTime = formatLastLogin(currentTime);
        
        setUser({
          name: user?.name,
          email: user?.email,
          wallet: user?.wallet_address,
          userId: user?._id, // Ensure userId is included
          lastLogin: formattedTime,
        });
        
        // toast.success("User details fetched successfully.");
      } else {
        toast.error("Unexpected response while fetching user info.");
        console.error("Unexpected response:", response);
      }
    } catch (error) {
      toast.error("Error fetching user details.");
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false); // Set loading to false whether the request succeeds or fails
    }
  };
  const getRequestedDocuments = async () => {
    if (!contract) return;
    try {
      const docs = await contract.getRequestedDocuments();
      console.log("Own Documents:", docs);
      //  setDocuments(docs);

      // Parsing the data
      const parsedDocs = docs.map((doc: any[]) => ({
        ipfs: doc[0],  // IPFS Hash
        depId: doc[1],    // Document ID
        docId: doc[2],  // Document Name
        status: doc[3], // Boolean (Approved/Not)
        owner: doc[4]  // Wallet Address
      }));

   setDocuments(parsedDocs);
      console.log("Parsed Docs:", parsedDocs);
    } catch (error) {
      console.error(error);
      toast.error("Error fetching documents.");
    }
  };

  useEffect(() => {
    getRequestedDocuments();
    console.log("Account:", account);
  }
    , [contract, account]);


  useEffect(() => {
    // Only fetch if authenticated, has account, and user details aren't loaded yet
    if (auth.isAuthenticated && auth.account) {
      fetchUserDetails();
    }
  }, [auth.isAuthenticated, auth.account, user.name]);

  if (loading) {
    return <Loader />; // Show loading indicator while fetching user details  
  }

  
  
    return (
        <>
        <div className="flex justify-between">
        <div className="h-32 w-[655px] bg-light-blue p-3 flex justify-between rounded-md">
          <div>
                <div className="flex text-3xl gap-3"><h3 className="text-dark-blue font-semibold">Welcome</h3><h3 className="font-light">{user.name} ,</h3></div>
                <p className="font-light font-lg">Great to have you back in the Delock are ready to go! </p>
          </div>
          <img src={overview_img} alt="secure_img" />
        </div>
        <Profile />
        </div>
  
        <div className="mt-5">
          <TextComponent2 text="Your latest searches" dept="Your latest searches"/>
  
          {documents.length > 0 ? (
        <div className="flex flex-wrap">
          {documents.map((item, index) => (
            <Overview_component1
              key={index}
              title={item.title}
              maskedId={item.maskedId}
              issuer={item.issuer}
              
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
        <div className=" flex items-center rounded-xl bg-[#EBF3FC] p-4 w-[700px] h-28 mt-5 ">
        <div className="text-base ml-4 font-medium text-dark-blue">Currently there are <span className="font-semibold">NO</span> authentic original documents available.  Once you request for the Authorized Documents , it will be available here !</div>
      </div> </div>
      )}
          
  
          <TextComponent2 text="Documents you might need" dept="Documents you might need"/>
          <div className="w-full grid grid-cols-4 gap-4">
            {ImportantDocuments.map((doc, index) => (
              <div key={index} onClick={() => handleNavigate(doc,index)} className="cursor-pointer">
                <Card_component2 Name={doc.title} />
              </div>
            ))}
          </div>
  <div className="flex items-center rounded-lg bg-light-blue pt-1 w-11/12 mt-10 h-12 mb-10">
            <div className="text-base ml-4 font-light text-dark-blue text-xl">
              Enhances security, reduces fraud risk, streamlines document management for government and citizens.
            </div>
          </div>
          {/* <div className="flex items-center rounded-lg bg-light-blue pt-1 w-11/12 mt-10 h-10 mb-10">
            <div className="text-base ml-4 font-light text-dark-blue text-lg">
              Securely upload and personalize your documents in the cloud, tailored just for you. Upload personal documents with Delock in Your Docs.
            </div>
          </div> */}
        </div></>
    )
  }
  
  export default UserOverview
  
