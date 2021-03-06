---
search: true
---

## User Profile

The user profile is the central place where users can find different account sites, notifications, and view to modify their profile such as their name, email, custom fields and their subscription to email campaigns.

### Sites

Displays the list of enabled sites in the account, so that the user can easily find all the digital channels associated with the account

:::tip Tip
You can hide that section of the profile by using CSS in your customers settings, appearance section
:::

### Notifications

Each user can access their notifications directly from the profile, listing the unread notifications at the top, and then read notifications. Both listings are sorted from the most recent to the oldest. 

Clicking on a notification will display the full content of the notification and marked as read. 

### Edit Profile

In this section, each user can modify their profile data, depending on the [customer configuration](/es/platform/customers/realms.html #configuracion -de-customers), each user can modify:

* Name
* Last name
* Second surname
* E-mail
* Date of birth
* Gender
* [Custom Fields](/en/platform/customers/realms.html #custom -fields)
* Password

In addition, each user can definitely delete their account. 

:::danger danger
Deleting the user account is an irreversible action, and users who execute this action will need to register again in order to access.
:::

## Profile API

You can access the User Profile API through the URL `account_url/api/profile`, where you can make use of endpoints: 

* API Technical Documentation: `account_url/api/profile/docs`
* Notifications: `account_url/api/profile/notifications`
* User info: `account_url/api/profile/me`
