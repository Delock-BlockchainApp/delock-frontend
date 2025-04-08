
function Featurebox({title, content}: {title: string, content: string}) {
  return (
    <div className="flex flex-col w-2/6 h-60 m-5">
      <div className="font-semibold text-xl text-dark-blue">{title}</div>
      <div className="text-sm mt-5">{content}</div>
    </div>
  )
}

export default Featurebox
