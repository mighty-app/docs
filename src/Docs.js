import { RedocStandalone } from 'redoc';
import { useTheme } from '@material-ui/core/styles';

export default function Docs() {
  const theme = useTheme();

  const options = {
    nativeScrollbars: true,
    theme: {
      typography: {
        headings: {
          fontWeight: 700,
        },
      },
      schemaView: {
        linesColor: '#DFC350',
        typeNameColor: '#ffffff',
        typeTitleColor: '#ffffff',
        requireLabelColor: '#ffffff',
        nestingSpacing: '#DFC350',
      },
      colors: {
        primary: {
          main: theme.palette.primary.main,
          text: '#ffffff',
        },
        secondary: {
          main: 'red',
        },
        text: {
          primary: theme.palette.gray.light,
          secondary: theme.palette.gray.light,
        },

        http: {
          get: theme.palette.fill.success,
          post: theme.palette.fill.info,
          // put: '#DFC350',
          // options: '#DFC350',
          // patch: '#DFC350',
          // delete: '#DFC350',
          // basic: '#DFC350',
          // link: '#DFC350',
          // head: '#DFC350',
        },
        success: {
          main: '#47FF94',
        },
        error: {
          main: theme.palette.fill.alert,
        },
      },
      menu: {
        backgroundColor: theme.palette.background.alt,
        textColor: theme.palette.gray.light,
      },
      rightPanel: {
        backgroundColor: theme.palette.background['alt-2'],
        borderLeft: '1px solid white',
      },
      logo: {
        maxHeight: '200px',
        maxWidth: '200px',
        gutter: '40px',
      },
    },
  };

  return <RedocStandalone specUrl='https://api.mightyapp.cc/spec' options={options} />;
}
