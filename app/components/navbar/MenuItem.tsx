"use Client"

interface MenuItemProps{
    onClick:()=> void;
    label:string;
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label
}) =>{
    return(
        <div 
        onClick={onClick} 
        className="
        px-4 
        py-3 
        hover:bg-neutral-200 
        hover:text-blue-500
        transition
        font-semibold
      "
    >
      {label}
    </div>
    )
}

export default MenuItem;