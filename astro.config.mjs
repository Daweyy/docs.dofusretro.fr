import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.dofusretro.fr',
	integrations: [
		starlight({
			title: 'DofDocs',
			locales: {
				root: {
					label: 'Français',
					lang: 'fr',
				},
			},
			social: {
				github: 'https://github.com/Daweyy/docs.dofusretro.fr',
			},
			sidebar: [
				{
					label: 'Le projet',
					autogenerate: { directory: 'project' },
				},
				{
					label: 'Ankama Launcher',
					autogenerate: { directory: 'launcher' },
				},
				{
					label: 'Dofus Retro',
					badge: 'WIP',
					autogenerate: { directory: 'retro' },
				}
			],
			editLink: {
				baseUrl: 'https://github.com/Daweyy/docs.dofusretro.fr/blob/main/',
			},
		}),
	],
});
