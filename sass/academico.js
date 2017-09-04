import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'actividades': {
    'fontFamily': ''Open Sans', sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'background': '#D2D2D2'
  },
  'actividades article': {
    'width': [{ 'unit': 'em', 'value': 25 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }]
  },
  'actividades article catividades_titulo': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'actividades article catividades_titulo color--pry': {
    'color': '#00aad4',
    'fontSize': [{ 'unit': 'em', 'value': 2 }]
  },
  'actividades article catividades_titulo color--seco': {
    'color': 'white',
    'fontSize': [{ 'unit': 'em', 'value': 2 }]
  },
  'actividades article atividades_contenido p': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 3 }, { 'unit': 'px', 'value': 0 }]
  },
  'actividades article a': {
    'margin': [{ 'unit': 'em', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'color': 'white',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 2.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 2.5 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'white' }],
    'borderRadius': '5px'
  },
  'actividades article a:hover': {
    'background': 'white',
    'color': '#00aad4'
  }
});
