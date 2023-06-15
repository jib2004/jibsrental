

const Filter = ({title,icon}) => {
  return (
    <div className="text-[#ff5a60] flex 
    flex-col  gap-2  
    text-[15px] sm:text-[16px]
    items-center cursor-pointer 
     hover:text-red-600 hover:border-b-2  duration-150 ease-out">
     {icon} 
    {title}
    </div>
  )
}

export default Filter