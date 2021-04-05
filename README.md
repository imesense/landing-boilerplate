# Landing boilerplate

Landing boilerplate for fast builds of landing pages and simple sites with reusable parts based on Next.js, Typescript and Sass

## Current version - 0.3.0

## Recommendations

- Use yarn for stable dev process.
- Before start of dev change remote origin.
## Parts of project

- `public/mail` - scripts for send e-mail messages via PHP:
  - `libmail.php` - class for configure of e-mail message;
  - `mail-callback.php` - script of send e-mail message to target e-mail, change marked for change content before production;
- `resources` - folder for any resources of project;
- `scripts` - scripts for local actions or build/compile;
- `src`:
  - `components` - all components of project;
    - `common` - common components for all projects that based on this boilerplate;
    - `layout` - themed sections (parts) of landing page;
    - `theme` - themed common components for landing page;
  - `pages` - pages of site (if project has only one page, keep `index.tsx` without changes);
  - `styles` - common SCSS styles;
  - `utils` - any TypeScript utils.

## Commands

- `yarn dev` - Start dev server on `http://localhost:3000/`.
- `yarn build` - Create production build.
- `yarn build:export` - Create production build and place it in folder `out`.
- `yarn start` - Start production server (for server-side rendering sites).
- `yarn rebuild` - Rebuild all dependencies.
- `yarn favicons` - Create favicons of all sizes (before use script place original favicon with size 192 and larger in `./public/images/favicons/base.png`).