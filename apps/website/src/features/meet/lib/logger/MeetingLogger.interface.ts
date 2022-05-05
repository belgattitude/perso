export type CaptureMeetingEvent = {
  name: 'log';
  payload: {
    date: string;
    action: string;
    browserString: string;
    meetingId: string;
  };
};

export interface MeetingLogger {
  captureEvent(event: CaptureMeetingEvent): Promise<true | Error>;
}
