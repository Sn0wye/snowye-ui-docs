import { useRouter } from 'next/router';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';

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
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href='https://snowye.dev' target='_blank'>
          Gabriel Trzimajewski
        </a>
        .
      </span>
    )
  },
  darkMode: false,
  nextThemes: {
    forcedTheme: 'dark'
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: '%s - Snowye UI'
    };
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta
          property='og:url'
          content={`https://snowye-ui.snowye.dev${asPath}`}
        />
        <meta property='og:title' content={frontMatter.title || 'Snowye UI'} />
        <meta
          property='og:description'
          content={
            frontMatter.description ||
            'React Powered Component UI, accessible by default and built on top of Radix.'
          }
        />
      </>
    );
  }
};

export default config;
