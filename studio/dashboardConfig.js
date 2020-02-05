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
                  buildHookId: '5e3a7e339848409f5d37fb0e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qi6a45o6',
                  apiId: 'f0a20e16-1794-4127-bc59-f0f619ed714a'
                },
                {
                  buildHookId: '5e3a7e3329eb549a68f57dfd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-p6uw27uv',
                  apiId: 'ce5bad7e-6fba-4a32-9fae-2492dc749ecf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/narendra-sharma/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-p6uw27uv.netlify.com', category: 'apps' }
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
