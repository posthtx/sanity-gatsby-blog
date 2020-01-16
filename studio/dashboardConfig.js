export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e20d125d4ce05cde9b4fc6e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-b663ywe5',
                  apiId: 'ed0f49ae-fc8f-4f67-a136-f71b2e81ff4a'
                },
                {
                  buildHookId: '5e20d12580377fb9954f566b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-oga6eggf',
                  apiId: '06598f74-e918-4808-a908-73f252796a8f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/posthtx/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-oga6eggf.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
