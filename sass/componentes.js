import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'direccion': {
    'fontFamily': ''Open Sans', sans-serif',
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'height': [{ 'unit': 'vh', 'value': 100 }],
    '<w422': {
      'height': [{ 'unit': '%V', 'value': 1 }]
    }
  },
  'direccion direccion_logos img': {
    'width': [{ 'unit': 'em', 'value': 15 }],
    'margin': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }],
    '<w422': {
      'width': [{ 'unit': 'em', 'value': 12 }],
      'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
    }
  },
  'direccion direccion_texto': {
    'margin': [{ 'unit': 'em', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'direccion direccion_texto p': {
    'textAlign': 'center'
  },
  'direccion direccion_iconos': {
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'direccion direccion_iconos a': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'direccion direccion_iconos img': {
    'width': [{ 'unit': 'em', 'value': 2.5 }]
  },
  'direccion direccion_iconos img:hover': {
    'width': [{ 'unit': 'em', 'value': 2.8 }],
    'transition': 'width 0.5s'
  }
});
