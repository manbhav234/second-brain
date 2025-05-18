import { useState } from "react";
import useAppStore, { type ExplorerItem } from "../../store";
import { IconCheck, IconPlus } from '@tabler/icons-react';
import TreeItem from "./TreeItem";

interface RenderTreeProps {
    node: ExplorerItem,
    parent?: ExplorerItem
}

const RenderTree: React.FC<RenderTreeProps> = ({node}) => {
    const {activeItems} = useAppStore();
    return (
        <div>
            <TreeItem key={node.itemID} node={node}/>
            <div className="ml-2">
               {node.isCategory && node.children!.map((childNode) => activeItems.find((id: number) => id == node.itemID) && (
                    <RenderTree key={childNode.itemID} node={childNode}/>
               ))}
            </div>
        </div>
    )
}

const SideTree: React.FC = () => {

    const { items, addCategory } = useAppStore();
    const [takeInput, setTakeInput] = useState<boolean>(false);
    const [categoryTitle, setCategoryTitle] = useState<string>("") 
    const handleAddCategory = () => {
        setTakeInput((prev)=>!prev);
        addCategory(categoryTitle);
    }

    return (
        <div className='text-white h-full overflow-y-auto flex flex-col'>
            {items.map((node) => (
              <RenderTree key={node.itemID} node={node}/>
            ))}
            {takeInput && 
                <div className="flex items-center justify-center w-full">
                    <input className="border-1 h-full border-white/20 text-white text-sm p-1 px-4 w-[85%]" onChange={(e)=>setCategoryTitle(e.target.value)} autoFocus/>
                    <div className="flex justify-center items-center h-full w-[15%] p-2">
                        <IconCheck className="cursor-pointer" onClick={handleAddCategory}/>
                    </div>
                </div>  
            }
            <div className="w-full flex justify-start items-center px-4 py-2 border-1 border-white/20 mt-auto">
                <p className="text-sm">Add New Category</p>
                <IconPlus size={16} className="ml-auto cursor-pointer" onClick={()=>setTakeInput((prev)=>!prev)}/>
            </div>
        </div>
      
    )
}

export default SideTree;