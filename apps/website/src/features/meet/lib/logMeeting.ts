import axios from 'axios';
export const logMeeting = (meetingSlug: string, action: string) => {
  axios.get(`/api/log/meet`, {
    params: {
      meetingSlug,
      action,
    },
  });
};
