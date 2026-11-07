// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://igvc.ee.cooper.edu',

  integrations: [
    starlight({
      title: 'Autonomy Lab',
      pagination: false,
      sidebar: [
        { label: '← Back to Hub', link: '/' },
        { label: 'Overview', link: '/docs/' },
        {
          label: 'Getting Started',
          items: [
            { autogenerate: {directory: 'docs/getting-started'} },
          ],
        },
      ],
      
      editLink: {
        baseUrl: 'https://github.com/aidanwl/igvc-hub/edit/main/',
      }
    }),
  ],
});
