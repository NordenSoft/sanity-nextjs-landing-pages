export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5df012c51e45118d5a8d134b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4rhk5cj4',
                  apiId: '5d8b8a89-74e8-40e6-b4bb-5ad45522aa5c'
                },
                {
                  buildHookId: '5df012c5bf74b782127dc331',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-t3kq3rnj',
                  apiId: 'f07d63b2-14d2-4726-b93f-3d124ff4c005'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NordenSoft/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-t3kq3rnj.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
