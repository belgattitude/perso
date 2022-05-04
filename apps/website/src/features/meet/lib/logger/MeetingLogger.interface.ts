export type CaptureMeetingEvent = {
  name: 'log';
  payload: {
    date: string;
    browserString: string;
    meetingId: string;
  };
};

export interface MeetingLogger {
  captureEvent(event: CaptureMeetingEvent): Promise<true | Error>;
}
