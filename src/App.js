import { RedocStandalone } from 'redoc';
import HttpsRedirect from 'react-https-redirect';

function App() {
  return (
    <div className='App'>
      <HttpsRedirect>
        <RedocStandalone
          specUrl='https://api.mightyapp.cc/spec'
          options={{
            nativeScrollbars: true,
            theme: { colors: { primary: { main: '#dd5522' } } },
          }}
        />
      </HttpsRedirect>
    </div>
  );
}

export default App;
