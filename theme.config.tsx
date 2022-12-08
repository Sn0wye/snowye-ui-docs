import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <img src='/favicon.svg' width={36} height={36} />
      <strong>Snowye UI</strong>
    </div>
  ),
  project: {
    link: 'https://github.com/Sn0wye/snowye-ui'
  },
  docsRepositoryBase: 'https://github.com/Sn0wye/snowye-ui/tree/main/docs',
  footer: {
    text: 'Snowye UI'
  },
  darkMode: false,
  nextThemes: {
    forcedTheme: 'dark'
  }
};

export default config;
