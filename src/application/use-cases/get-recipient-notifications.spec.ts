import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient_id_1',
    });

    expect(notifications).toHaveLength(2);
    // notifications.forEach((element) => {
    //   expect(element.recipientId).toEqual('recipient_id_1');
    // });

    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient_id_1' }),
        expect.objectContaining({ recipientId: 'recipient_id_1' }),
      ]),
    );
  });
});
