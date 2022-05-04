export type EventName = 'CONNECT' | 'CLOSE';

export type CaptureMeetingEvent<T extends EventName = EventName> = {
  name: T;
  payload: {
    browserString: string;
    meetingId: string;
  };
};

export interface MeetingLogger {
  captureEvent(event: CaptureMeetingEvent): Promise<true | Error>;
}
