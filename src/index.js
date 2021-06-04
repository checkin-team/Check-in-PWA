import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, useSelector } from "react-redux";
import store from "./store/Index/index"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#d50000',
    },
    error: {
      main: '#f44336',
      dark: '#d50000',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: "Josefin Sans, sans-serif",
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
