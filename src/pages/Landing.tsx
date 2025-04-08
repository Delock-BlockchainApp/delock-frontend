
import Featurebox from '../components/Home/Featurebox'

const benefits = [
  {
    title: "Tamper-resistant and Scalable Solution",
    content:
      "A tamper-resistant and scalable solution for sensitive documents is well-suited for blockchain technology due to its decentralized and immutable nature. Once a document or its metadata is recorded on the blockchain, it cannot be altered without consensus, ensuring strong protection against unauthorized changes. This makes the system highly tamper-resistant and ideal for preserving the integrity of sensitive information."
  },
  {
    title: "Decentralized IPFS-based Storage",
    content:
      "Our Delock leverages the InterPlanetary File System (IPFS) to store documents in a decentralized manner. This ensures that files are distributed across a peer-to-peer network, eliminating the risks of central server failure and enhancing data availability and redundancy. IPFS also enables efficient content addressing, ensuring each document is uniquely and securely referenced."
  },
  {
    title: "Access Control and Traceability",
    content:
      "Smart contracts ensure only authorized users can access specific documents, with all interactions recorded immutably on the blockchain. This provides full traceability and auditability of document usage, helping to maintain compliance with regulatory standards."
  }
];
function Landing() {
  return (
    <div className='-z-10'>
       <div className="w-full h-60 bg-light-blue ">
          <p className="text-dark-blue font-extralight text-[64px] max-sm:text-[35px] p-8">Enhances security, reduces fraud risk ,  streamlines document management for government and citizens</p>            
          </div>
          <p className="mt-28 text-2xl font-caveat text-dark-blue px-8">Delock can help you :</p>
          <div className="flex px-8">
            {benefits.map((item, index) => (
              <Featurebox key={index} title={item.title} content={item.content} />
            ))}
          </div>
    </div>
  )
}

export default Landing
