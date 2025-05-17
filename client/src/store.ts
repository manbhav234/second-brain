import { create, type StateCreator } from 'zustand'

export interface ExplorerItem {
    itemID: number,
    title: string,
    isCategory: boolean,
    children?: ExplorerItem[]
}

export interface Explorer {
    itemCounter: number
    items: ExplorerItem[]
}


const createExplorerSlice : StateCreator<Explorer> = (set) => ({
    itemCounter: 6,
    items: [{itemID: 1, title: "Tech", isCategory: true, children: [{itemID: 3, title:"ReactJS", isCategory: true, children: [{itemID: 4, title: "Integrating Zustand", isCategory: false}]}]}, {itemID: 2, title: "Gaming", isCategory: true, children: [{itemID: 5, title: "Minecraft", isCategory: true, children: []}]}] as ExplorerItem[],
    addCategory: (title: string) => set((state) => {
        const newItem: ExplorerItem = {
            itemID: state.itemCounter,
            title: title,
            isCategory: true,
            children: [] as ExplorerItem[]
        }
        return {
            items: [...state.items, newItem],
            itemCounter: state.itemCounter + 1
        }
    }),
    addSubCategory: (title: string, parent: ExplorerItem) => set((state) => {
        const newItem: ExplorerItem = {
            itemID: state.itemCounter,
            title: title,
            isCategory: true,
            children: [] as ExplorerItem[]
        }
        const findParentItem = (index: number, items: ExplorerItem[]) => {
            if (index >= items.length){
                return false;
            }
            if (items[index].itemID == parent.itemID){
                items[index].children!.push(newItem);
                return true;
            }
            if (items[index].isCategory){
                for (let i = 0; i < items[index].children!.length; i++){
                    if (findParentItem(i, items)){
                        return true;
                    }
                }
            }
            return false;
        }
        findParentItem(0, state.items)
        return {
            items: state.items,
            itemCounter: state.itemCounter + 1
        }
    })
})

const useAppStore = create<Explorer>()((...a) => ({
  ...createExplorerSlice(...a),
}))

export default useAppStore;