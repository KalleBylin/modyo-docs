---
search: true
---

# Key concepts

## Team Review

Team Review is a tool that allows you to control the process of publishing items in Modyo. When enabled, each item must go through review stages before enabling its publication.

This adds a level of monitoring and collaboration between the content editor and a team of reviewers.

### Function

When a publisher or developer considers the item you're working on is ready, you can submit it for review.

This task can be performed by default enabled users or by a computer chosen by the publisher.

They will be responsible for approving or rejecting the item, and finally determine whether it is already in a position to be published.

Each step in this process leads the item through different states, which are recorded in a history for subsequent audit.

[Image of review stages]

This tool is available for both Channels and Content (spaces).

The configuration of revision rules is done independently for each site or space.

### Configuration

To configure the tool, go to `Site/Space Settings > Computer Review`.

 <img src="/assets/img/platform/teamreviewsettings.jpg" width="500px" style="margin-top: 40px; border: 1px solid #EEE;" /> 

The options available are:

- **Enable Team Review**: Enables or disables team review completely in this context (site or space).
- **Number of approvals**: Determine how many users must approve the item in order to be published (it will change its status from "Waiting for Review" to "Approved").
- **Restrict review selection**: By default, any user with the necessary permissions will be able to approve the items that are awaiting review. By enabling this option, only those chosen by the editor will be able to do so.

:::tip Tip
While approval is limited, any user with permissions can comment on the item.
:::

- **Force Review**: This option allows you to select a list of users, of whom at least one approval is required for the item to move to the "Approved" status. This is independent of the number of approvals configured earlier, that is, even if an item has the number of approvals required, it will remain in the "Waiting Approval" status if no user in the list has approved it.

- **Require All**: This option extends the previous restriction to all selected users.

:::warning Attention
When you make changes to your team review settings, items that were already awaiting review will continue to be governed by the rules prior to the changes.

For those items to take into account the new configuration, they need to be rejected and sent for review again.
:::

### Roles and permissions

There are three levels of roles that allow users to perform different actions in the review process:

- High: Administrator (site or space)
- Media: Reviewer (site) or Editor (space)
- Under: Developer (site) or writer (space)

Users with the lowest role can submit to review and comment on items that are in that state.

Users with the intermediate role, in addition to the above, can approve items under review and once they are approved, they can publish them using the team review flow.

Users at the highest level, in addition to doing all of the above, can skip the review flow and use the Force Approval action to publish an item without having to comply with the restrictions of the team review.

:::warning Attention
Site or space administrators always have the ability to skip the team review flow.

For them, the "Send to Review" and "Review" buttons have an option inside the dropdown to "Force Approval" that will allow them to see the item in the publication view.

This option exists because there are times when you need to publish quickly, so be cautious when you assign roles for your spaces or sites.
:::

### About the interface

When team review is enabled, and after saving your changes, you will see the green button **Send to Review** as the main action.

 <img src="/assets/img/platform/send-to-review-bar.jpg" width="350px" style=" border: 1px solid #EEE;" /> 

At the time of submission to review the bar will change status:

<img src="/assets/img/platform/missing-conditions-team-review.jpg" width="350px" style="border: 1px solid #EEE;" />

When you click, you will see that the right side section will indicate the requirements to publish the item.

If there is a required reviewer, `(required)` will appear next to your name in the list of reviewers.

 <img src="/assets/img/platform/box-reviewers.jpg" width="500px" style="border: 1px solid #EEE;" /> 

To the right of each reviewer, the status of your review will appear, showing a yellow circle if you have not made your review, and a green check if you have approved the item.

Everyone who can access the item's edit view will see a **Approve** button under the reviewer list.

Those who have the necessary permission will see it active and can click it to approve the item. Those who do not have permission will see the disabled button.

When you approve the item, that user's approval will be recorded, showing a green check to the right of their name in the reviewers list.

When computer review is enabled, in the item's action bar, to the left of the green main button, and to the right of the differences button, an icon (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>) will appear to open the item's activity tab.

When you open it, a chronological list of the actions that have been performed on the item will be displayed, with the option to view the detail of the action, and at the bottom of the tab, you will be the option to leave a comment.

When you leave a comment or action is executed on the item, a notification is sent to both the one sent for review and to the users who are on the reviewer list.

## Versioning

As a backup mechanism, at the time of publishing an item, Modyo automatically generates and maintains a number of versions that can subsequently be retrieved if necessary.

This is useful when, for some reason, an improper change is made, then there is a possibility to reverse it through the platform.

This system is available for Widgets, Pages, Navigation, Templates and Content.

### Versions of resources

#### Editable

The Editable version maintains changes made to the item since its last publication or its creation if it has never been published.

This version is the one that goes through the team review process when it is enabled, and just at the time of publication, the "Editable" and "Published" versions have the same content.

#### Published

This version saves the content visible on the site and is freely available to any user.

In this case, internal resources such as Widgets and Templates can already be used in the creation of any site or page.

The published version does not necessarily have the same content as the editable one (except at the right time of publication), as it may contain changes that are in the process of testing or revision.

#### Backups

Backups are previously published versions of items. That is, every time we publish an item, Modyo saves the previously published version as a backup.

If you want to review a particular version of an item, you can go to the "Differences Between Versions" so you can see the changes that have been made and revert them when necessary.

:::warning Attention
By default, Modyo saves the last 20 published versions (`MAX_BACKUPS`) of each item, so by making the twenty-first publication, you'll be clearing the backing for the first post of the item.

This value can be modified using environment variables and is common for all accounts in environment variables.
:::

#### Scheduled

When you decide to schedule a publication, the editable version moves to a scheduled state, and when it is time for publication, that scheduled version will take the place of the version that is currently published. This allows you to schedule a future change for items, and continue working on the editable version.

:::warning Attention
Modyo only allows you to have one scheduled version of each item, so if you program a second modification to the item, you'll be overwriting the previous programming.
:::

Along with the publication schedule, you can schedule an unpublicisation. At the time, the version that is published will become a backup, leaving the item in question without a published version.

:::warning Attention
When it is time to execute the scheduled actions, Modyo may take a couple of minutes to perform the action. We'll send you an email when the action is complete.
:::

There are elements (home, navigation and templates) that cannot be unpublished, and when publishing them and scheduling an unpublication in conjunction with other elements, the latter will have no effect on these specific elements.

#### Approved

This status appears when computer review is enabled and means that an item in this state is ready to be published. Any changes made to an item in this state will lead the item to an editable state and must go through the review process again before it can be published.

### Actions for versioning

Inside the versioned you have two actions that allow you to interact with backups. Both actions are available in the differences modal.

![Differences Modal](/assets/img/platform/differences.png)

By default the differences modal shows the published version on the left, and the editable version on the right.

You can change which versions to compare, changing the values in the version selectors at the top of the modal.

When you apply any of the actions, you always take the selected version on the left, so if you reset, the left-hand version will be taken to the editable version, and if you roll back, the left version will be taken to the published version.

#### Reset

In this case, the backup will be copied to the editable version, so all the changes that were made later will be lost, so you can continue working on potential changes to that version to republish it.

#### Rollback

In this case, the backup will be copied directly to the published version of the item, without touching the editable version.

 This is useful when something was published by mistake, and you need to return to some of the stable versions quickly, while still working on resolving issues that the failed version may have had.

::: danger danger
Because this is a potentially dangerous action, only site or space administrators have the permission to be able to execute this action.
:::

## Locks

Locks is a Modyo functionality that allows you to securely modify a resource, without having concurrency problems that may occur when another user is working on it simultaneously, thus avoiding job loss or overwriting documents.

 <img src="/assets/img/platform/locks.jpg" style="border: 1px solid #EEE;" /> 

### What elements do Locks use?

Locks is mostly used in [Contents](/en/platform/content/) and [Channels](/en/platform/channels/), but can also be used in other sections where items such as Settings and [Customers](/en/platform/customers/) are edited.

### How to use Locks?

Locks is implemented in different ways within the platform. In [Contents](/en/platform/content/) and [Channels](/en/platform/channels/), multiple users can enter a resource, only one being able to edit and save those changes, while others will only see the latest version saved on the platform.

If a second person tries to make a change, you will receive a message stating that the item already has changes and that what you are trying to modify is deprecated.

In other sections such as [Customers](/en/platform/customers/) and Settings, Locks will not allow simultaneous viewing of the resource, so if the resource is in edit, another user will not be able to enter the work view.

In this case, only an Administrator will be able to take control, activating editing for himself and discarding the unsaved progress of the user who is working on it.


:::warning Take control

If an Administrator wants to take control of a view, you must click on the item in use and on the next screen, click the**Take Control** button.

 <img src="/assets/img/platform/lock-forms.jpg" style="border: 1px solid #EEE;" /> 

When the Administrator takes control, the user who is using the resource will receive a message preventing them from continuing to make changes, so any changes that are being made must be saved and backed up offline.

After taking control, the Administrator will only have two hours to make unsaved changes. After that time, the resource will be released again and can be taken by any other user.
:::

## Preview mode

Preview mode allows you to preview the result of changes to publishable items such as Posts, Pages, Navigation, Widgets or Templates; accessible from the top right with the icon <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>. You can recognize that you are in preview mode, when you see the bar at the top of the site.

![Preview Bar](/assets/img/platform/preview-bar.png)

The items you can interact with in the preview bar are:

* **Template Selector**: Allows you to switch between the published and editable version of the elements belonging to the template builder.
* **Content Selector**: Allows you to switch between the published and editable version of items belonging to the content application and that are being used on the site using the Content Liquid SDK.
* **Navigation Selector**: Allows you to switch between the published and editable version of items belonging to the navigation builder.
* **Page Selector**: Allows you to switch between the published and editable version of the items belonging to the page builder.
* **Content View Selector**: This selector allows you to switch between the published and editable version of the content entry being previewed in custom content views. This view does not directly use the Content Liquid SDK, so the content in these views will not be affected by the Content SDK selector.
* **Widgets Selector**: If you're previewing pages that contain custom widgets, you will find a list of widgets that appear on the page, and you can select whether you want to view the editable or published version of each one of them. Once you complete the selection, click the "refresh" button for the widget settings to take effect.
* **Minimize tab**: Allows you to hide the preview bar so that it does not interfere with items at the top of the site. Once minimized, the tab will remain visible so you can restore the preview mode bar.
* **Edit item**: Clicking will go to the edit view of the item you're viewing, whether it's an entry, a page, a widget or a default template of the site.
* **Share link**: Allows you to copy a link that you can share and whoever opens it, will go directly to the preview mode with the settings when copying the link. In order to view the preview mode, just have a login to the account admin.
* **Exit preview mode**: Close preview mode, removing the bar and leaving the tab in the current url of the site.

:::warning Attention
Changing the content selector in the preview bar will have no effect on the content you're using through the JavaScript SDK or the Content API. It will only have an effect on the content used through the Liquid SDK.
:::

## Global Variables

Modyo has the functionality to define global variables that you can use everywhere you have Liquid, so you can, for example, share a _snippet_ code between sites.

:::tip Tip
You can use plain text, HTML, JavaScript, and CSS within global variables, however you cannot use Liquid code within them, however you should be aware that the content is up to 65,535 characters.
:::

You can create global variables in your account settings, and you can add values for different languages. If you require, you can also overwrite the values for certain sites in the Site Variables menu, in your site settings, or in each of the custom widget builder widget.

:::warning Attention
When using global variables, the variables defined at the lowest level will always be preferred, with the variables defined in the widget first, then those defined in the site and then the variables defined at the account level, so be careful when defining variables in widgets or the site with the same name that the variables in the account.
:::

:::danger danger
Global variables do not have a publishing, versioned, or team review workflow, and only account and site administrators can modify them, so consider that making a change in the value of these variables will immediately be reflected wherever they are being used. This does not apply for variables defined in widgets, because widgets and pages do have publishing flow.
:::
