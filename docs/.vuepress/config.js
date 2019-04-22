module.exports = {
  title: "Modyo Docs",
  description: "Welcome to the Modyo Support Center",
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "en", // this will be set as the lang attribute on <html>
      title: "Modyo Docs",
      description: "Welcome to the Modyo Support Center"
    },
    "/es/": {
      lang: "es",
      title: "Modyo documentación",
      description: "Bienvenido al centro de soporte Modyo"
    }
  },
  themeConfig: {
    logo: "/assets/img/modyo.png",
    repo: "modyo/modyo-docs",
    docsDir: "docs",
    editLinks: true,
    locales: {
      "/": {
        // text for the language dropdown
        selectText: "Languages",
        // label for this locale in the language dropdown
        label: "English",
        // text for the edit-on-github link
        editLinkText: "Edit this page on GitHub",
        nav: [
          { text: "Guides", link: "/guides/" },
          { text: "Help", link: "https://www.modyo.com" }
        ],
        sidebarDepth: 2,
        sidebar: [
          {
            title: "Introduction",
            collapsable: false,
            children: [
              "/guides/",
              ["/guides/key-concepts", "Key Concepts"],
              ["/guides/the-modyo-interface", "The modyo interface"]
            ]
          },
          {
            title: "Group 2",
            children: [
              /* ... */
            ]
          }
        ]
      },
      "/es/": {
        // text for the language dropdown
        selectText: "Lenguaje",
        // label for this locale in the language dropdown
        label: "Español",
        // text for the edit-on-github link
        editLinkText: "Edita esta página en GitHub",
        nav: [
          { text: "Guías", link: "/es/guides/" },
          { text: "Ayuda", link: "https://www.modyo.com" }
        ],
        sidebarDepth: 2,
        sidebar: [
          {
            title: "Introducción",
            collapsable: false,
            children: [
              "/es/guides/",
              ["/es/guides/key-concepts", "Conceptos claves"],
              ["/es/guides/the-modyo-interface", "La interfaz Modyo"]
            ]
          },
          {
            title: "Group 2",
            children: [
              /* ... */
            ]
          }
        ]
      }
    }
  }
};
