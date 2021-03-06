import React from 'react';
import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';
import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
        <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
