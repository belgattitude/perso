import create from 'zustand';

export interface MeetUiState {
  meetingSlug: string | null;
  videoEmbedStatus: 'open' | 'closed';
  openVideoEmbed: () => void;
  closeVideoEmbed: () => void;
}

export const useStore = create<MeetUiState>()((set) => ({
  videoEmbedStatus: 'closed',
  meetingSlug: null,
  openVideoEmbed: () => set(() => ({ videoEmbedStatus: 'open' })),
  closeVideoEmbed: () => set(() => ({ videoEmbedStatus: 'closed' })),
}));
