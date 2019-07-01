import { IConfig } from 'umi-types';

export default {
  ssr: true,
  outputPath: '../public',
  manifest: {},
  plugins: [
    [
      'umi-plugin-react',
      {
        hd: true,
        antd: true,
        // TODO, page router css leak
        dynamicImport: false,
        publicPath: '/public/',
        locale: {
          enable: true,
          default: 'en-US',
          baseNavigator: true,
        },

        // dynamicImport: {
        //   webpackChunkName: true,
        // },
      },
    ],
  ],
  runtimePublicPath: true,
  disableCSSModules: true,
  cssModulesWithAffix: true,
} as IConfig;
