import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import type {TreeViewBaseItem} from '@mui/x-tree-view/models';

const SideTree: React.FC = () => {

const MUI_X_PRODUCTS: TreeViewBaseItem[] = [
  {
    id: 'grid',
    label: 'Data Grid',
    children: [
      { id: 'grid-community', label: '@mui/x-data-grid' },
      { id: 'grid-pro', label: '@mui/x-data-grid-pro' },
      { id: 'grid-premium', label: '@mui/x-data-grid-premium' },
    ],
  },
  {
    id: 'pickers',
    label: 'Date and Time Pickers',
    children: [
      { id: 'pickers-community', label: '@mui/x-date-pickers' },
      { id: 'pickers-pro', label: '@mui/x-date-pickers-pro' },
    ],
  },
  {
    id: 'charts',
    label: 'Charts',
    children: [
      { id: 'charts-community', label: '@mui/x-charts' },
      { id: 'charts-pro', label: '@mui/charts-pro' },
    ],
  },
  {
    id: 'tree-view',
    label: 'Tree View',
    children: [
      { id: 'tree-view-community', label: '@mui/x-tree-view' },
      { id: 'tree-view-pro', label: '@mui/x-tree-view-pro' },
    ],
  },
  {
    id: '1',
    label: 'Tree View',
    children: [
      { id: '1-1', label: '@mui/x-tree-view' },
      { id: '1-2', label: '@mui/x-tree-view-pro' },
      { id: '1-3', label: '@mui/x-tree-view-pro' },
      { id: '1-4', label: '@mui/x-tree-view-pro' },
      { id: '1-5', label: '@mui/x-tree-view-pro' },
      { id: '1-6', label: '@mui/x-tree-view-pro' },
      { id: '1-7', label: '@mui/x-tree-view-pro' },
      { id: '1-8', label: '@mui/x-tree-view-pro' },
      { id: '1-9', label: '@mui/x-tree-view-pro' },
      { id: '1-10', label: '@mui/x-tree-view-pro' },
      { id: '1-11', label: '@mui/x-tree-view-pro' },
    ],
  },
];

    return (
        <div className='text-white h-full overflow-y-auto'>
            <RichTreeView items={MUI_X_PRODUCTS} />
        </div>
      
    )
}

export default SideTree;