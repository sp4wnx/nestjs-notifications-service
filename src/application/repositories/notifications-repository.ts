import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  // abstract findByRecipientId(recipientId: string): Promise<Notification[]>;
}
