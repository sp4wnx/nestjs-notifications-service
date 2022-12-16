import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create notification', () => {
    const notification = new Notification({
      recipientId: 'any_recipient_id',
      content: new Content('You received a notification!'),
      category: 'Info',
    });

    expect(notification).toBeTruthy();
  });
});
