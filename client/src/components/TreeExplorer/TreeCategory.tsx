import type { ExplorerItem } from "../../store";

interface TreeCategoryProps {
    node: ExplorerItem,
}

const TreeCategory: React.FC<TreeCategoryProps> = ({node}) => {
    return (
        <div className="border-1 border-white text-sm w-full p-2">
            {node.title}
        </div>
    )
}

export default TreeCategory;