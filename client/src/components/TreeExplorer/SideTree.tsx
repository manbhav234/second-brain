import useAppStore, { type ExplorerItem } from "../../store";
import TreeCategory from "./TreeCategory";

interface RenderTreeProps {
    node: ExplorerItem
}

const RenderTree: React.FC<RenderTreeProps> = ({node}) => {
    return (
        <div>
            <TreeCategory key={node.itemID} node={node}/>
            <div className="ml-3">
               {node.isCategory && node.children!.map((childNode) => (
                    <RenderTree node={childNode}/>
                ))}
            </div>

        </div>
    )
}

const SideTree: React.FC = () => {

    const {items, addCategory, addSubCategory} = useAppStore();

    return (
        <div className='text-white h-full overflow-y-auto'>
            {items.map((node) => (
              <RenderTree node={node}/>
            ))}
        </div>
      
    )
}

export default SideTree;