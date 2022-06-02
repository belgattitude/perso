import type {
  MeetAttendeeRole,
  MeetEventAction,
  MeetLogEvent,
} from '@/features/meet/backend/logger';

export type CreateMeetLogEventParams = {
  meetingSlug: string;
  role: MeetAttendeeRole;
  action: MeetEventAction;
};

export const createMeetLogEvent = (
  params: CreateMeetLogEventParams
): MeetLogEvent => {
  return {
    action: params.action,
    meetingSlug: params.meetingSlug,
    attendee: {
      role: params.role,
    },
  };
};
