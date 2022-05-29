import axios from 'axios';
import type { MeetLogEvent } from '@/features/meet/backend/logger';

export const logMeetEvent = async (meetLogEvent: MeetLogEvent) => {
  axios.post(`/api/log/log-meet`, {
    ...meetLogEvent,
  });
};
