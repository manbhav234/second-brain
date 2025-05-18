import { create, type StateCreator } from 'zustand'

export interface ExplorerItem {
    itemID: number,
    title: string,
    isCategory: boolean,
    children?: ExplorerItem[]
}

export interface Explorer {
    itemCounter: number,
    items: ExplorerItem[],
    activeItems: number[],
    addCategory: (title: string) => void,
    addItem: (title: string, parent: ExplorerItem, isFile: boolean) => void,
    setActiveItem: (id: number) => void,
    removeActiveItem: (id: number) => void,

}


const createExplorerSlice : StateCreator<Explorer> = (set) => ({
    itemCounter: 6,
    items: [{itemID: 1, title: "Tech", isCategory: true, children: [{itemID: 3, title:"ReactJS", isCategory: true, children: [{itemID: 4, title: "Integrating Zustand", isCategory: false}]}]}, {itemID: 2, title: "Gaming", isCategory: true, children: [{itemID: 5, title: "Minecraft", isCategory: true, children: []}]}] as ExplorerItem[],
    activeItems: [] as number[],
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
    addItem: (title: string, parent: ExplorerItem, isFile: boolean) => set((state) => {
        const newItem: ExplorerItem = !isFile ? {
            itemID: state.itemCounter,
            title: title,
            isCategory: true,
            children: [] as ExplorerItem[]
        } : {
            itemID: state.itemCounter,
            title: title,
            isCategory: false
        }
        const findParentItem = (parentID: number, items: ExplorerItem[]): boolean => {
            for (const item of items) {
                if (item.itemID === parentID) {
                    item.children!.unshift(newItem);
                    return true;
                }
                if (item.isCategory && item.children) {
                    const found = findParentItem(parentID, item.children);
                    if (found) return true;
                }
            }
            return false;
        };
        const newItems = state.items.map((item) => item);
        findParentItem(parent.itemID, newItems)
        return {
            items: newItems,
            itemCounter: state.itemCounter + 1
        }
    }),
    setActiveItem: (id: number) => set((state) => {
        return {
            activeItems: [...state.activeItems, id]
        }
    }),
    removeActiveItem: (id: number) => set((state) => {
        return {
            activeItems: state.activeItems.filter((itemID) => itemID !== id)
        }
    })
})

const useAppStore = create<Explorer>()((...a) => ({
  ...createExplorerSlice(...a),
}))

export default useAppStore;