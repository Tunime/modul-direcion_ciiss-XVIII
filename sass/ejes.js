import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'tematicos': {
    'fontFamily': ''Open Sans', sans-serif',
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'background': '#f5f5f5',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'flexDirection': 'column',
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'tematicos tematicos_title_frio': {
    'color': '#4d4d4d'
  },
  'tematicos tematicos_title_caliente': {
    'color': '#00aad4'
  },
  'tematicos ul': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'margin': [{ 'unit': 'em', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'tematicos ul li': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'flexDirection': 'column',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }],
    'width': [{ 'unit': 'em', 'value': 15 }]
  },
  'tematicos ul li h4': {
    'color': '#00aad4',
    'fontSize': [{ 'unit': 'px', 'value': 17 }],
    'textAlign': 'center',
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'tematicos ul li tematicos_contenido': {
    'textAlign': 'center'
  },
  'tematicos ul li div': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#079abc' }],
    'width': [{ 'unit': 'px', 'value': 110 }],
    'height': [{ 'unit': 'px', 'value': 110 }],
    'borderRadius': '50%',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'tematicos ul li div img': {
    'width': [{ 'unit': 'em', 'value': 3.5 }]
  }
});
