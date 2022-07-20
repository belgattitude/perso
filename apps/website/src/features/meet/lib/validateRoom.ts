import { z } from 'zod';

export const roomSchema = z
  .string({
    required_error: 'room name is required',
  })
  .min(10, 'room name is too short');

export type Room = z.infer<typeof roomSchema>;

export const validateRoom = (room: Room) => {
  return roomSchema.safeParse(room);
};
