import { RedocStandalone } from 'redoc';
import { useTheme } from '@material-ui/core/styles';

export default function Docs() {
  const theme = useTheme();

  const options = {
    nativeScrollbars: true,
    theme: {
      colors: {
        primary: {
          main: theme.palette.primary.main,
        },
        http: {
          get: theme.palette.fill.success,
          post: theme.palette.fill.alert,
          put: '#DFC350',
          options: '#DFC350',
          patch: '#DFC350',
          delete: '#DFC350',
          basic: '#DFC350',
          link: '#DFC350',
          head: '#DFC350',
        },
      },
      menu: {
        backgroundColor: theme.palette.background.alt,
      },
    },
  };

  return <RedocStandalone specUrl='https://api.mightyapp.cc/spec' options={options} />;
}
