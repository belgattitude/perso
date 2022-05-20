import create from 'zustand';

export interface UiState {
  wirefame: boolean;
}

export const useStore = create<UiState>()((set) => ({
  wirefame: false,
}));
