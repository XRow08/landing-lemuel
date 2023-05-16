import { create } from "zustand";
import { IData } from "../Components/ExpCards/data";

export interface GlobalModalState {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  item: IData | undefined;
  setItem: (item: IData) => void;
}

export const useGlobalModalStateStore = create<GlobalModalState>((set) => ({
  showModal: false,
  setShowModal: (showModal) => set(() => ({ showModal })),
  item: undefined,
  setItem: (item: IData) => set(() => ({ item })),
}));
