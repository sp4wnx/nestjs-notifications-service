import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'recipient_id_1',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'recipient_id_1',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'recipient_id_2',
      }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient_id_1',
    });

    expect(count).toEqual(2);
  });
});
