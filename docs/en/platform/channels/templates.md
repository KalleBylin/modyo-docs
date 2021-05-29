---
search: true
---

# Templates

One of the most important aspects when creating the site is the base architecture and appearance of the site. In Template Builder, you can modify base templates, along with global JavaScript and CSS to use on your pages and change their structure as required.

When you already select the theme that is used within the site, you can access the different pages from the Template Builder to change the codes as you need them.

Once inside the Template Builder, you can see that the main menu is hidden to optimize the workspace. In the top bar, on the left, you can find the section name and the current publication status:

- **Publiced**: When a published version already exists and its editable version is the same.
- **Pending changes**: When there is a published version, but there are pending changes to your editable version.
- **In Review**: When [Computer Patch] is enabled (/es/platform/core/key-concepts.html) and the editable version has been sent for revision.
- **Approved**: When [Computer Patch] is enabled (/es/platform/core/key-concepts.html) and if the item review conditions were met. If you are in this state, your templates are ready to be published.

![Template Builder](/assets/img/channels/template_builder/template-builder.jpg)

In the upper right, you can find the latest release date and available actions:

**Preview** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Clicking on this icon opens a new tab with preview mode of the templates, in which you can see as if they were published, all the changes you have in your templates.

። :warning Attention
You can preview the changes as a user without session or user with Modyo session. For this, it is advisable to log out or log out of Modyo from your site before entering preview mode, because if you log out in preview mode you might encounter security errors like _x-fame-options_ or _mixed-content_, depending on your site's SSL and custom domain settings, depending on your site's SSL and custom domain settings
።:

 <img src="/assets/img/channels/template_builder/differences.jpg" style="border: 1px solid #EEEEEE" width="700"> 

**Differences** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/> </svg>: By clicking on this icon, you will be going to the [view of differences](/es/platform/channels/sites.html #revision -y-publicacion-joint), in which you can compare the changes between multiple versions of your templates. 

By default, parts by comparing the published version to the editable version, but by using the version selectors, you can also compare with the backup versions.

።: tip Tip
Each time you publish a version, the version that was released becomes a backup version. By default, up to 20 backups are saved, so that the most recent 20 backups can be compared, restored, and rolled back. 
For more information on versioning, check out the [versioning] section (/es/platform/core/key-concepts.html #versionado).
።:

**Search templates** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M9 13a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3m11 6.59V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.76.83-2.76.83a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5c0 1-.31 1.96-.83 2.75L20 19.59z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Deploy a sidebar with a text finder that searches all editable templates. 

 <img src="/assets/img/channels/template_builder/conversation.jpg" style="border: 1px solid #EEEEEE" width="700"> 

**Activity/Comments** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Unfolds a sidebar with the activity history and comments of the templates. 

At the end of the sidebar, you see a text box where you can write a comment. Next to each activity, you can click**view detail** to display the complete information of that activity log.

**More actions** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>:

- **Themes**: Directs directly to the theme index of the site, where you can create copies of the current theme for use on the other sites in your account. To know more check out [Themes](/es/platform/channels/templates.html #temas)
- **Restore all**: Restore all templates to the original value of the theme.

**Main Action**

- **Save**: Save all changes to all templates.
- **Send to Review**: Change the status of the templates to “Waiting for Review”. In this state you can continue to make changes, but each change will be notified via mail to the assigned reviewers.
- **Reject**: Returns to “In Edit” status, notifying reviewers that the item was rejected.
- **Publish**: Once the templates have been approved, you can go to the [joint publication] view (/es/platform/channels/sites.html #revision -and-joint publication) and publish your templates.

In the main work area, you can see two sections:

- The work area.
- The area of selection of templates.

Each template you click on the right sidebar opens in the middle area, very similar to an IDE. If you open multiple templates, these are open as tabs in the workspace.

The templates bar on the right has two tabs: views and snippets.

Views are base elements required by Modyo, and usually translate into the direct structure of any of your site's URLs.

### Snippets

Snippets are pieces of code that can be used once or more times. Next to each custom snippet, you will find an icon (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>) to copy its reference path. The code will look similar to this: <span v-pre> `{% snippet “snippet-name”%}` </span>.

You can add custom snippets to the end of the platform's snippets list by clicking on the **+ Add a snippet** button.

 <img src="/assets/img/channels/template_builder/custom-snippet.jpg" style="border: 1px solid #EEEEEE" width="300"> 

።: tip Tip
For the system to recognize the type of programming language to which the snippet belongs, you must add the underscore ending +ending, i.e. **"front_css"** or **"library_js"** by default will recognize the snippet as HTML language.
።:

።: tip Tip
All elements in the Template Builder use Liquid as a template engine.

For more information on what Liquid is and how to get the best out of it, check out the [Liquid Markup] page (/es/docs/channels/liquid-markup.html)
።:

In the work area, under the tabs, you will find a bar with useful items:

 <img src="/assets/img/channels/template_builder/bar-templates.jpg" style="border: 1px solid #EEEEEE" width="700"> 

**File Manager**: A modal is raised where you can access all the files in the account and copy their URL. If you access the second tab, you can upload new files.

።: tip Tip
For more information about the benefits and features of File Manager, go to [Asset Manager](/es/docs/content/asset-manager.html)
።:

**Keyboard Shortcuts**: A small pop-up is displayed with some of the useful keyboard shortcuts to use in the Template Builder.

 <img src="/assets/img/channels/template_builder/keywords.jpg" width="400"> 

**Snippets**: A list of all snippets is displayed next to the option to copy your referral code.

 <img src="/assets/img/channels/template_builder/snippets.jpg" width="300"> 

**Changes**: A list of all the times and states in which you have done the “Save” action in this release. By clicking on one of the sub-versions, you change the content of the template you're working on to that sub-version.

 <img src="/assets/img/channels/template_builder/changes.jpg" style="border: 1px solid #EEE" width="300"> 

።: tip Tip
If you publish a version, you can see that the changelog disappears, this is because the new editable version has not had any changes.
።:

።: tip Tip
Sub-versions are for each template, so for some you can see that there are changes and for others you will not see the change selector. Similarly, if you return to a previous sub-version of a template, it does not affect the rest of the templates.
።:

።: tip Tip
If you reset a version prior to the editable version, you will be able to access the sub-versions of each template of that version. 
You can learn more about the [versioned here]. (/platform/core/key-concepts.html #versionado)
።:

Like each template, you can restore all templates to their original version by clicking on the secondary action in the top bar "<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg> Restore All”. For those changes to take effect, you must publish the templates.

### Topics

In this view you can see what theme you have installed, and then the list of all the themes installed on the site. 

By clicking on the **Use** button of an installed theme, you replace all the content of your editable themes with the content of the theme you are using. You can preview the changes using Template Builder's preview mode and then publish them to bring that new theme to the published site.

At the top you can find different actions:

- **Theme Gallery**: Open a modal with all the themes available to install on the site. You can choose to install the default Modyo themes or account themes (those that you turned into themes from other sites). When you install a theme from the theme gallery, you'll change the editable version of your templates to the templates of the theme you just installed.
- **Customize** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M14.6 16.6l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: It takes you to the edition (Template Builder) of the currently installed theme.
- **Convert to theme** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Create a copy of the installed theme as a global account theme. It will allow you to choose a new name for the new theme and you can install it on other sites in the account.
- **Reset ** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Like the Reset action in the Template Builder, this action restores all editable templates to the original version of the theme.
- **Load templates** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m.12 13.5l3.74 3.74l1.42-1.41l-2.33-2.33l2.33-2.33l-1.42-1.41l-3.74 3.74m11.16 0l-3.74-3.74l-1.42 1.41l2.33 2.33l-2.33 2.33l1.42 1.41l3.74-3.74z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: In a few cases, after complex migrations, there are unmodified templates that you could not miss and you might not see them in the list found in the Template Builder. This action retrieves those templates from the original theme and allows them to reoccupy them.

።: tip Tip
The load templates action does not modify or touch the editable templates that are already visible in the Template Builder, it only restores those that are not visible.
።:

።: tip Tip
When you create a theme from one site, that theme becomes available to all other sites in the account, so you can create a base theme, and start from that base when you need to create new sites quickly.
።:

## Error views

In the Views section, you will find 4 error types available to customize:

* **Disabled**: You will see this error view if the site you are trying to access has been [disabled](/es/platform/channels/sites.html).
* **404**: You will see this view if you enter a site URL that is not defined and if in the [site restrictions] settings (/es/platform/channels/sites.html #restricciones) you decide to display the 404 and not redirect to the home page.
* **Privacy**: You will see this error view if you don't have permissions to access [site](/es/platform/channels/sites.html #restricciones) or one of its [pages](/es/platform/channels/pages.html #privacidad).
* **Template**: You will see this error view when the page of the site you are loading has a liquid syntax error. You're unlikely to see this view, since modyo 8.1 onwards we have a functionality that checks the liquid syntax before you can save and publish changes to the template builder.

## Views for content

In order to automatically display [content](/en/platform/content/) on a site, you must meet certain conditions:

1. Have a space with at least one language (the same as the site) with at least one Type. Go to [Spaces](/es/platform/content/spaces.html) and [Types](/es/platform/content/types.html) to learn how.
1. Have posts published in the language of the site. Go to [Entries](/es/platform/content/entries.html) and [Location](/es/platform/content/spaces.html #localizacion) to learn more.
1. Create a custom view in the Templates Builder.

To create a custom view, you need to enter the Template Builder and make sure that you are in the first “Views” tab. When you scroll to the end of the list, you will see that there is a section called **Custom** and a **+ Add Custom View** button. When creating the custom view, you must select a name, a space to which it will be associated with, and finally a space content type.

። :warning Attention
The name of the view will be the path (URL) relative to the site of the content to display, so pay attention when naming these views.
።:

።: tip Tip
You can use the name you want for views, no matter what type or space you want to associate it with. Always keep in mind that entries will only be displayed if they have a published version in the language of the site you're creating these views on.
።:

By modifying this view, you can make use of Liquid, and the `entry` object, for example: <span v-pre> `{{entry.published_at | format_date}}` </span> 

A basic example of Liquid+HTML code you can use in these views is:

```html
<div>
  <h1 class="title">{{ entry.name }}</h1>
  <time>{{ entry.published_at | format_date }}</time>
  <span class="url">
    <a href="{{request.url}}">{{request.url}}</a>
    </span>
</div>

<div>
  <div class="description">
    {{ entry.description }}
  </div>
</div>
```

።: tip Tip
To learn more about using Liquid, go to [Liquid markup](/es/platform/channels/liquid-markup.html)
።:

If you want to display the view with the values of the entry you're working on, the following requirements must be met:

1. The view must be created and published. 
1. The URL that is being accessed is of type `site_url/custom_view_name/entry_slug`.
1. The `custom_view_name` is the name of the content view you created.
1. The URL matches the name of the view you just created. 
1. An entry already exists in the language of the site. 
1. The slug of the input is `entry_slug`.

።: tip Tip

To find the shape of the URL, if the custom domain is enabled, you must go to ``Site Settings > Domains``.

If it is not enabled, the URL will be in the form `account_url/site_host`.
።:

## Custom Layouts
Modyo has three layouts by default: 
* **Home**: Used exclusively on the home page of the site.
* **Base**: All pages except the home use this layout by default.
* **Error**: Error views use this clean layout (404, 401)

You can create new Layouts from the template builder by clicking “Add Layout” in the “Views” tab, which will allow you to define a new base structure to use on pages.

You can use as a base, this code that contains everything you need for your pages to use all the necessary elements of the site, such as head, header, footer, service worker and Google Tag Manager settings, but keep in mind that you can modify it as much as you want:

```liquid
{% html5 %}
<head>
  {% snippet 'shared/general/head' %}
</head>

{% body %}
{% snippet 'shared/general/body_tag_manager' %}
{% snippet 'shared/general/header' %}

{{ site.breadcrumb }}
<div id="main-layout">
{{ content_for_layout }}
</div>

<script>{% snippet "shared/serviceworker/register_js" %}</script>
{% snippet 'shared/general/footer' %}

{% endbody %}
{% endhtml5 %}
```

After you have created your new layout, you can go to the edit view of the pages and change from the properties tab the layout you are using.

## CSS and JavaScript

You can create custom CSS and JavaScript templates by clicking the **+ Add Styleshe** and **+ Add JavaScript** buttons, respectively, at the bottom of the Views tab.

To include any of these templates, there are different Liquid filters available: `asset_url` to generate the template URL, and `stylesheet_tag` and `script_tag` to generate the corresponding tags, e.g. 

```html
<head>
  {{ 'my-css' | asset_url: 'css' }}
  {{ 'my-css' | asset_url: 'css' | stylesheet_tag }}
  {{ 'my-js' | asset_url: 'js' | script_tag }}
</head>
```

For details and parameters supported by these filters, go to [Liquid Filters](/es/platform/channels/liquid-markup.html #filtros).

## SEO

SEO [(Search Engine Optimization)](/es/platform/channels/sites.html #seo) is one of the most important topics of the site and content. 

In Modyo there is a way to control how search engines read your site and content, adding meta tags dynamically depending on the attributes you add to your pages and content.

You can add this code snippet to the Template Builder, and then call this snippet from the head of your site:

```html
<!-- Site SEO -->
<meta name="keywords" content="{{ site.keywords }}" />
<meta name="author" content="{{ site.name }}" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
{% if page %}
<!--Layouts SEO -->
{{ page.meta_tags }}
<meta name="description" content="{{ page.excerpt }}" />
<meta property="og:title" content="{{ page.title }}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{{ page.url }}" />
<meta property="og:image" content="{{ site.logo | asset_url : 'original' }}" />
<meta property="og:site_name" content="{{ site.name }}" />
<meta property="og:description" content="{{ page.excerpt }}" />
{% endif %} 
{% if entry %}
<!-- Content SEO -->
<meta name="description" content="{{ entry.excerpt }}" />
<meta property="og:title" content="{{ entry.title }}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="{{site.url}}/{{entry.type_uid}}/{{entry.slug}}" />
<meta property="og:image" content="{{ entry.covers.first | asset_url : 'original' }} "/>
<meta property="og:site_name" content="{{ site.name }}" />
<meta property="og:description" content="{{ entry.excerpt }}" />
{% endif %} 
{% unless page or entry %}
<!-- Default SEO -->
<meta name="description" content="{{ site.description }}" />
<meta property="og:title" content="{{ site.name }}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{{ request.url }}" />
<meta property="og:image" content="{{ site.logo | asset_url : 'original' }}" />
<meta property="og:site_name" content="{{ site.name }}" />
<meta property="og:description" content="{{ site.description }}" />
{% endunless %}
<!-- END SEO <-->
```

This snippet differs when you are using a custom page, some of the default Modyo pages, or content views, so by making use of the attributes of each element, you can define a good SEO base for all the URLs of your site.

If you require it, you can further customize this snippet, defining which goals you want to appear for specific URLs or types. 

For example, in the content section, you can use:

```html
...
{% if entry %}
<!-- Content SEO -->
<meta name="description" content="{{ entry.meta.excerpt }}" />
<meta property="og:title" content="{{ entry.meta.title }}" />
<meta property="og:url" content="{{site.url}}/{{entry.meta.type_uid}}/{{entry.meta.slug}}" />
<meta property="og:image" content="{{ entry.fields.covers.first | asset_url : 'original' }}" />
<meta property="og:site_name" content="{{ site.name }}" />
<meta property="og:description" content="{{ entry.meta.excerpt }}" />
{% if entry.type_uid = 'posts'%}
<meta property="og:type" content="article" />
{endif} 
{% if entry.type_uid = 'place'%}
<meta property="og:type" content="place" />
<meta property="place:latitude" content="{{ entry.location.first.latitude }}" />
<meta property="place:longitude" content="{{ entry.location.first.longitude }}" />
{% endif %} 
{% endif %} 
...
```

In this case, the types `posts` and `place` share the attributes _title_, _excerpt_, and _covers_, and differ in the _locations_ object. In addition, it defines a different document type for each.

## Integrations

### Handling private session using OpenID Connect (OIDC)

The recommended method for interacting with a private API using the Modyo session with an OIDC integration consists basically of two steps:**make the private site** and **enable account-level integration**.

#### Make the site private

1. Log in to the account where you want to create the private site.
1. Click on create a new site.
1. Assign a name to the new site and select the base theme.
1. In the `Settings > Site` section, under the**Restrictions** tab, select **Private**. Also activate**Show home to public visits** to be able to redirect users without session.

#### Enable account-level integration (for all sites)

1. Go to the account, **Customers** and from there to the **Settings** section and then the**Integration** tab
1. Select OpenID Connect integration and select the**Enable OpenID Connect** check box
1. Fill in the**Service Name, Client ID, Secret, and Issuer** data and click on**Launch Discovery Service**
1. Check the fields you need (Enable refresh token, Enable remote logout, Enable token revocation, Enable claims synchronization)
1. Associate vendor fields with custom fields you have in Modyo [OpenID Connect 1.0 specification for Standard Claims](http://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)

### Using Axios to do integration

If you want to use a library like `axios` to perform an integration from Modyo, a pattern that is convenient is to create 3 snippets that take care of the most basic aspects of an integration.

The tasks you need to cover with snippets are:

1. An interceptor of requests to include a token.
1. A session handler.
1. A modal window that will inform the user that their session will expire.

### Intercept requests to include a token

```js
//global variable that will represent an instance of axios that will be responsible for making requests for services
var axios_api = axios.create ();
 axios_api.defaults.baseURL = 'API URL';
}
//global variable that will represent an axios instance that will be responsible for making modyo api requests
var axios_modyo=axios.create ({
 BaseUrl: Window.baseUrl + '/api/admin',
});
//global variable that will represent an axios instance that will be responsible for making requests for site content json
var axios_modyo_json=axios.create ({
 BaseUrl: {{site.url}},
});
//global variable that will represent an axios instance that will be responsible for making requests related to authentication
var axios_auth = axios.create ();
axios_auth.defaults.baseURL = window.baseUrl + '/auth/openidc';
//function that generates activity on the site with each authentication request
var resetIdleTime = function (request) {
 SessionManager.resetidleTime ();
 return request;
}
//function that adds the token to each request
var appendTokentoRequest=Function (request) {
 return axios_auth.get ('/access_token') .then (function (response) {
 request.headers.authorization='bearer '+ response.data.access_token;
 return request;
 }
}
//function that handles errors for each of the requests and sends them to a higher instance
var errorRequest=Function (error) {
 throw error;
}
axios_auth.interceptors.request.use (ReseTidleTime);
axios_api.interceptors.request.use (AppendTokentoRequest, ErrorRequest);
```

### A session handler

```js
// is in charge of raising the warning modal that will warn of the upcoming session closure, this variable will return a promise that will be effective if the Keep Session button is clicked and that will launch a reject promise in the case of selecting the button with the refusal to continue.
var modalConfirm = function() {
  return new Promise(function(resolve, reject) {
    $("#session-modal").modal({
      backdrop: "static",
      keyboard: false,
      show: true
    });
    $("#session-modal-yes").on("click", function() {
      resolve("keep session");
      $("#session-modal").modal("hide");
    });
    $("#session-modal-no").on("click", function() {
      reject("destroy session");
      $("#session-modal").modal("hide");
    });
  });
};
// will be in charge of starting the time tracking to raise this modal and manage the session on the Front side. The following explains each of the properties and methods of this object that manages the session.
var sessionManager = {
  // property that defines the time from the last activity to the end of the session in seconds (not the refresh time of the token but the end of the session, it is recommended that this is one minute less than that declared by the Open ID Connect provider to have some slack with the session and the closing of the session to be 100% valid).
  timeToEndSessionInSeconds: 900,
  // property defining the inactivity mode lifting time since the last action or request on the page.
  timeToRaiseWarningModalInSeconds: 720,
  // property that stores the timestamp of the last activity time of the sessionManager.
  lastActionTimeInThisWindow: new Date().getTime(),
  // función que convierte segundos a milisegundos
  secondsToMilisecs: function(minutes) {
    return minutes * 1000;
  },
  // property to store the interval id of session event revision
  intevalId:null,
  // function that determines whether the application is being accessed from the modyoShell or not.
  isModyoAppShell: function() {
    return /; Modyo_App_Shell/.test(navigator.userAgent);
  },
  // method to be executed at each page load to start the session event tracking process recommended to make this invocation sessionManager.init() in the layout head to start tracking the session (in some cases it is defined that developers do not launch this invocation in that case the test API to be connected must also have this if and so you will achieve that axios_api serves for the develop and development environment one with session and the other without session manager).
  init: function() {
    this.resetIdleTime();
    this.intevalId=this.interval();
  },
  // restarts the timeout or creates a new activity on the site
  resetIdleTime: function() {
    this.lastActionTimeInThisWindow = new Date().getTime();
    var sessionEndTime =
      this.lastActionTimeInThisWindow +
      this.secondsToMilisecs(this.timeToEndSessionInSeconds);
    localStorage.setItem("timeToEndSession", sessionEndTime);
    var raiseWarningModalTime =
      this.lastActionTimeInThisWindow +
      this.secondsToMilisecs(this.timeToRaiseWarningModalInSeconds);
    localStorage.setItem("timeToRaiseWarningModal", raiseWarningModalTime);
  },
  // method that starts the activity every second js that handles session events
  interval: function() {
    var self = this;
    return setInterval(this.checkSessionEvents, 1000, self);
  },
  // método que levanta el modal de warning time
  raiseModal: function() {
    return modalConfirm();
  },
  // method that logs out and clears storage
  logout: function() {
    localStorage.clear();
    sessionStorage.clear();
    clearInterval(this.intevalId);
    var withRedirect =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (withRedirect) {
      window.location.href =
        "{{site.account_url}}/logout?multi=true&redirect_to=https://chile.larrainvial.com";
    } else {
      window.location.href = "{{site.account_url}}/logout?site={{site.uuid}}";
    }
  },
  // method that reviews session events to determine if it is time to close the session or to keep it after displaying the modal.
  checkSessionEvents: function(self) {
    var sessionEndTime = localStorage.getItem("timeToEndSession");
    var raiseWarningModalTime = localStorage.getItem("timeToRaiseWarningModal");
    var diffInSecsToShow =
      Math.round((sessionEndTime - new Date().getTime()) / 1000) > 0
        ? Math.round((sessionEndTime - new Date().getTime()) / 1000)
        : 0;
    var expirationTimeHtml = document.querySelector("#expiration-time");
    var timeNow = new Date().getTime();
    expirationTimeHtml.innerText = diffInSecsToShow;
    if (sessionEndTime - timeNow < 0) {
      self.logout();
    } else if (raiseWarningModalTime - timeNow < 0) {
      self
        .raiseModal()
        .then(function(response) {
          axios_auth.get("/access_token");
        })
        .catch(function(err) {
          self.logout();
        });
    } else {
      if (($("#session-modal").data("bs.modal") || {})._isShown) {
        $("#session-modal").modal("hide");
      }
    }
  }
};
```

### A modal window that inform the user that their session will expire

This is the modal to activate in the previous step with bootstrap for the handling of the warning modal.

```html
<div
 id="session-modal”
 class="modal fade”
 tabindex=” -1"
 role="dialog”
 aria-labelledby="session-modal-label”
>
 <div class="modal-dialog" role="document"> 
 <div class="modal-content"> 
 <div class="modal-header"> 
 <h5 class="modal-title" id="session-modal-label"> 
 Your session will expire
 </h5> 
 </div> 
 <div class="modal-body text-center"> 
 <p> 
 Your session will expire in <span id="expiration-time"> </span> seconds.
 </p> 
 <p> Want to keep your session? </p> 
 </div> 
 <div class="modal-footer"> 
 <button id="session-modal-yes" type="button" class="btn btn-primary"> 
 If
 </button> 
 <button
 id="session-modal-no”
 type="button”
 class="btn btn-second”
 data-dismiss="modal”
 >
 Not
 </button> 
 </div> 
 </div> 
 </div> 
 </div> 
```