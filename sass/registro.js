import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // # comiensa registro
  'registro': {
    'background': '#005E77',
    'fontFamily': ''Open Sans', sans-serif'
  },
  'registro--titulo h2': {
    'color': '#01A6CF'
  },
  'registro--titulo linea': {
    'width': [{ 'unit': 'px', 'value': 60 }],
    'height': [{ 'unit': 'px', 'value': 5 }],
    'background': '#01A6CF'
  },
  'registro--titulo span': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }]
  },
  'registro--fondo': {
    'backgroundImage': 'url(../img/fondo-circu.png)',
    'height': [{ 'unit': 'vh', 'value': 160 }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'registro-white': {
    'width': [{ 'unit': 'em', 'value': 40 }],
    'height': [{ 'unit': 'em', 'value': 45 }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'background': 'white',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(3, 2, 2, 0.64)' }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'flexDirection': 'column'
  },
  'registro-white li': {
    'padding': [{ 'unit': 'em', 'value': 0.8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.8 }, { 'unit': 'px', 'value': 0 }]
  },
  'registro--campos input': {
    'background': '#FAFAFA',
    'height': [{ 'unit': 'em', 'value': 2 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.9 }],
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 1.5 }],
    'width': [{ 'unit': 'em', 'value': 22 }],
    'borderRadius': '0.6em',
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'registro--campos select': {
    'background': '#FAFAFA',
    'height': [{ 'unit': 'em', 'value': 2 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.9 }],
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 1.5 }],
    'width': [{ 'unit': 'em', 'value': 22 }],
    'borderRadius': '0.6em',
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'registro--campos select': {
    'height': [{ 'unit': 'px', 'value': 34.55 }],
    'width': [{ 'unit': 'px', 'value': 345.58 }]
  },
  'registro--campos btn-registro': {
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.1 }]
  },
  'registro--campos btn-registro a': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 2.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 2.5 }],
    'background': '#01A6CF',
    'borderRadius': '10px',
    'color': 'white'
  },
  'footer': {
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 60 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': '#1E1E1E',
    'color': '#FAFAFA',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'display': 'flex',
    'justifyContent': 'space-around',
    'alignItems': 'center'
  },
  'agradecimiento': {
    'height': [{ 'unit': 'vh', 'value': 100 }]
  },
  'u-agradecimiento--white': {
    'width': [{ 'unit': 'em', 'value': 40 }],
    'height': [{ 'unit': 'em', 'value': 15 }]
  },
  'u-agradecimiento--white figure': {
    'width': [{ 'unit': 'em', 'value': 15 }]
  },
  'u-agradecimiento--white figure img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'u-agradecimiento--white linea': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  }
});
