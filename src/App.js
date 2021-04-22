import { RedocStandalone } from 'redoc';

function App() {
  return (
    <div className='App'>
      <RedocStandalone
        specUrl='https://api.mightyapp.cc/spec'
        options={{
          nativeScrollbars: true,
          theme: { colors: { primary: { main: '#dd5522' } } },
        }}
      />
    </div>
  );
}

export default App;
