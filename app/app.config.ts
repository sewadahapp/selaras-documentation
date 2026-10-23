export default defineAppConfig({
  selarasDocs: {
    site: {
      name: 'Project Docs',
      description: 'Guides, references, and examples for your project.',
      titleTemplate: '%s · Project Docs',
      favicon: '/favicon.svg',
      // Set these after choosing a domain and adding your logo files to public/.
      // url: 'https://docs.example.com',
      // logo: { light: '/logo-light.svg', dark: '/logo-dark.svg' },
    },
    repository: {
      branch: 'main',
      contentDirectory: 'content',
      // Add your GitHub or GitLab URL and enable these links after scaffolding.
      // url: 'https://github.com/your-org/your-project',
      editLinks: false,
      issueLinks: false,
    },
    header: {
      search: true,
      colorMode: true,
      links: [
        { label: 'Guides', to: '/guide/getting-started' },
        { label: 'API reference', to: '/reference/api' },
      ],
    },
    sidebar: {
      enabled: true,
      collapsed: false,
    },
    toc: {
      enabled: true,
      title: 'On this page',
    },
    footer: {
      text: 'Built with Selaras Docs. Make it yours.',
      links: [],
    },
  },
})
