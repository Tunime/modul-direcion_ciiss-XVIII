import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': 'url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i")',
  'direccion': {
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'height': [{ 'unit': 'vh', 'value': 100 }]
  },
  'direccion direccion_logos img': {
    'width': [{ 'unit': 'em', 'value': 18 }]
  },
  'direccion direccion_texto p': {
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }]
  },
  '*': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'li': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'a': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textDecoration': 'none'
  }
});
