import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': 'url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i")',
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
  },
  'actividades': {
    'background': 'url(../img/fondo-articl.png)',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
    'backgroundAttachment': 'fixed',
    'fontFamily': ''Open Sans', sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'height': [{ 'unit': 'em', 'value': 30 }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    '<w777': {
      'height': [{ 'unit': '%V', 'value': 1 }],
      'flexDirection': 'column'
    }
  },
  'actividades article': {
    'width': [{ 'unit': 'em', 'value': 25 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }],
    '<w777': {
      'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 3 }, { 'unit': 'em', 'value': 2 }]
    },
    '<w466': {
      'width': [{ 'unit': '%H', 'value': 1 }]
    }
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
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 3 }, { 'unit': 'px', 'value': 0 }],
    'color': 'white'
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
  },
  'tematicos': {
    'fontFamily': ''Open Sans', sans-serif',
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'background': '#f5f5f5',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'flexDirection': 'column',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    '<w991': {
      'height': [{ 'unit': '%V', 'value': 1 }]
    }
  },
  'tematicos h2': {
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
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
    'margin': [{ 'unit': 'em', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'flexWrap': 'wrap'
  },
  'tematicos ul li': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'flexDirection': 'column',
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 2 }],
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
