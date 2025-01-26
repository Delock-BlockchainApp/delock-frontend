import TextComponent from "../components/TextComponent"

function UploadDocs() {
  return (
    <div className="h-full p-5 overflow-y-scroll scrollbar">
      {/* Top section */}
      <div>
        <TextComponent text="Upload Docs" fontSize="40px" />
      </div>
    </div>
  )
}

export default UploadDocs
