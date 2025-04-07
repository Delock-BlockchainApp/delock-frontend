import React from 'react'
import Profile from '../components/Profile'
import TextComponent from '../components/TextComponent'
import { useRecoilValue } from 'recoil'
import { AdmindocumentState } from '../recoil'
import AdminCard3 from '../components/Admin/AdminCard3'

function AdminDocuments() {
  const documents=useRecoilValue(AdmindocumentState)
  let state: string 
  if(documents?.length!=0){
    if (documents[0].department_id.startsWith("CG")) {
      state="All State"
    }
  }



  return (
    <div>
    {/* Top section */}
    <div className="flex justify-between">
      <TextComponent text={"Documents"} fontSize="40px" />
      <Profile />
    </div>
    <div className='mt-5'>
      <div className='flex grid grid-cols-3'>
      {documents && documents?.map((doc, index) => (
        <AdminCard3 key={index} data={{...doc,state}} /> 
      ))}
      </div>
    </div>
    </div>
  )
}

export default AdminDocuments
