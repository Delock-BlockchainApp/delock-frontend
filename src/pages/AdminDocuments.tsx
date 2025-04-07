import React from 'react'
import Profile from '../components/Profile'
import TextComponent from '../components/TextComponent'
import { useRecoilValue } from 'recoil'
import { AdmindocumentState } from '../recoil'
import AdminCard3 from '../components/Admin/AdminCard3'

function AdminDocuments() {
  const Department=useRecoilValue(AdmindocumentState)
  return (
    <div>
    {/* Top section */}
    <div className="flex justify-between">
      <TextComponent text={"Documents"} fontSize="40px" />
      <Profile />
    </div>
    <div className='mt-5'>
      <div className='flex grid grid-cols-3'>
      {Department && Department?.documents?.map((doc, index) => (
        <AdminCard3 key={index} data={{...doc,state:Department?.state}} /> 
      ))}
      </div>
    </div>
    </div>
  )
}

export default AdminDocuments
