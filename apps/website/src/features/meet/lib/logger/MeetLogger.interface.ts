export type MeetAttendeeRole = 'AGENCY' | 'CLIENT' | 'ADVISOR';
export type MeetEventAction = 'JOIN' | 'LEAVE' | 'REJOIN' | 'FEEDBACK' | 'HELP';

export type MeetAttendee = {
  role: MeetAttendeeRole;
  userId?: string;
  email?: string;
  name?: string;
};

export type MeetLogEvent = {
  meetingSlug: string;
  action: MeetEventAction;
  attendee?: MeetAttendee;
  date?: string;
  browserString?: string;
};

export interface MeetLoggerInterface {
  /**
   * Capture a meeting event to the backend service.
   */
  captureEvent(event: MeetLogEvent): Promise<true | Error>;
}
