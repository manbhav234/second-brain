import { useState } from "react";
import type { ExplorerItem } from "../../store";
import { IconChevronRight, IconChevronDown, IconFolder, IconCheck, IconFile } from '@tabler/icons-react';
import useAppStore from "../../store";


interface TreeCategoryProps {
    node: ExplorerItem,
}

const TreeItem: React.FC<TreeCategoryProps> = ({node}) => {

    const activeItems = useAppStore((state) => state.activeItems);
    const setActiveItem = useAppStore((state) => state.setActiveItem);
    const removeActiveItem = useAppStore((state) => state.removeActiveItem);
    const addItem = useAppStore((state) => state.addItem);
    const [takeInput, setTakeInput] = useState<boolean>(false);
    const [subCategoryTitle, setSubCategoryTitle] = useState<string>("");
    const [isFile, setIsFile] = useState<boolean>(false);
    
    const handleChevronClick = (itemID: number) => {
        if (activeItems.find((id) => id == itemID)){
            removeActiveItem(itemID);
        }else{
            setActiveItem(itemID);
        }
    }

    const handleAddItem = (file: boolean) => {
        setTakeInput((prev) => !prev)
        addItem(subCategoryTitle, node, file);
        setActiveItem(node.itemID);
        setIsFile((prev) => !prev);
    }

    const variants: Record<string, string> = {
        "folder": "text-sm w-full flex items-center gap-4 hover:bg-black/20 rounded-md",
        "item": "w-full flex items-center gap-4 hover:bg-black/20 rounded-md"
    }

    return (
        <>
            <div className={node.isCategory ? variants["folder"] : variants["item"]}>
                {node.isCategory ? activeItems.find((id) => id == node.itemID) ? <IconChevronDown className="cursor-pointer" stroke={2} onClick={() => {handleChevronClick(node.itemID)}}/>  : <IconChevronRight className="cursor-pointer" stroke={2} onClick={() => {handleChevronClick(node.itemID)}}/> : null}
                <p className="text-sm px-2 py-2 text-white">{node.title}</p>
                {node.isCategory && 
                    <div className="flex ml-auto">
                        <IconFolder size={16} className="ml-auto mr-3 cursor-pointer" onClick={()=>{setTakeInput((prev)=>!prev); setActiveItem(node.itemID)}}/>
                        <IconFile size={16} className="ml-auto mr-3 cursor-pointer" onClick={()=>{setTakeInput((prev)=>!prev); setIsFile(true)}}/>
                    </div>   
                }                    
            </div>
            { takeInput &&
                <div className="flex items-center justify-center w-full">
                    <input className="border-1 h-full border-white/20 text-white text-sm p-1 px-4 w-[85%]" onChange={(e)=>setSubCategoryTitle(e.target.value)} autoFocus/>
                    <div className="flex justify-center items-center h-full w-[15%] p-2">
                        <IconCheck className="cursor-pointer" onClick={() => handleAddItem(isFile)}/>
                    </div>
                </div>  
            }

        </>
    )
}

export default TreeItem;