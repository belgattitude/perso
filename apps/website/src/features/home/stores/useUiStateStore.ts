import create from 'zustand';

export interface UiState {
  wirefame: boolean;
}

export const useUiStateStore = create<UiState>()((_set) => ({
  wirefame: false,
}));
