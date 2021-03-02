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
                  buildHookId: '603e7a9cf3d7bc1d9725e639',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-y3bd41jq',
                  apiId: 'd2a285c6-c5b6-4e8b-9d4d-315549c900a3'
                },
                {
                  buildHookId: '603e7a9cfe3ab61d19ae07c8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dtg7fh5y',
                  apiId: 'ad382e82-8545-462d-a8dd-7f823527fe02'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sk-09/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dtg7fh5y.netlify.app', category: 'apps' }
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
