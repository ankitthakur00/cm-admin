import { Component } from '@angular/core';
import { Notification, NotificationDefDirective, NotificationListComponent } from '@elementar/components/notifications';

import { InviteToEditFilesInFolderNotification, MentionedInCommentNotification } from '@elementar/store/notifications';
import { RouterLink } from '@angular/router';
import { MatAnchor, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { PopoverComponent } from '../../../../../components/src/popover/popover/popover.component';

@Component({
  selector: 'emr-notifications-popover',
  imports: [
    PopoverComponent,
    InviteToEditFilesInFolderNotification,
    MentionedInCommentNotification,
    NotificationDefDirective,
    NotificationListComponent,
    RouterLink,
    MatAnchor,
    MatIcon,
    MatIconButton,
    MatRipple
],
  templateUrl: './notifications-popover.component.html',
  styleUrl: './notifications-popover.component.css'
})
export class NotificationsPopoverComponent {
  notifications: Notification[] = [
    {
      actor: {
        id: 1,
        name: 'Justin Hansen',
        username: 'justin.hansen',
        avatarUrl: 'assets/avatars/5.svg'
      },
      notifier: {
        id: 2,
        name: 'Elma Johnson',
        username: 'elma.johnson',
        avatarUrl: 'assets/avatars/2.svg'
      },
      payload: {
        content: 'what did you say?'
      },
      type: 'mentionedInComment',
      createdAt: '1 hour ago'
    },
    {
      actor: {
        id: 3,
        name: 'Johnny Gladden',
        username: 'johnny.gladden',
        avatarUrl: 'assets/avatars/6.svg'
      },
      notifier: {
        id: 4,
        name: 'Angela Naylor',
        username: 'angela.naylor',
        avatarUrl: 'assets/avatars/3.svg'
      },
      payload: {
        folderName: 'My New Project'
      },
      type: 'inviteToEditFilesInFolder',
      createdAt: '2 hours ago'
    }
  ];
}