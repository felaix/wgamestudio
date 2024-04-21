import {React, useState} from "react"
import { MdOutlineArrowDropDownCircle } from "react-icons/md";


const DropDownButton = ({ title, contentText }) => {

    const [isHidden, setIsHidden] = useState(false)
    const [oldText, setOldText] = useState("")

    const RemoveText = () => {
        setIsHidden(true);
        setOldText(contentText);
    }

    return (
        <>
        <div className="flex w-full h-full flex-col px-20">
            <div className="bg-blue-500 flex w-full h-9 justify-center items-center text-white gap-4 m-2">
            <MdOutlineArrowDropDownCircle />
            <p>{title}</p>
            </div>
            <p className="content text-xl">{contentText}</p>
        </div>
        </>
    )
}

export default DropDownButton;