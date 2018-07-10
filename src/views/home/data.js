const DATA = (navigation) =>  [
  {
    title: 'Animations',
    items: [
      {
        primary: 'red',
        secundary: 'orange',
        name: 'Swiping Cards',
        iconName: 'library-books',
        onPress: () => navigation.navigate('cards')
       },
      {
        primary: '#626DAE',
        secundary: '#C74A75',
        name: 'Touch Ball',
        iconName: 'developer-mode',
        onPress: () => navigation.navigate('ball')
       },
      // {
      //   primary: '#00CA86',
      //   secundary: '#622EF0',
      //   name: 'code',
      //   iconName: 'code',
      //   onPress: () => navigation.navigate('nice')
      //  },
      //  {
      //   primary: '#FFC186',
      //   secundary: '#9DACD6',
      //   name: 'code',
      //   iconName: 'code',
      //   onPress: () => navigation.navigate('nice')
      //  }  
    ]
  },
  {
    title: 'Social Networks',
    items: [
      {
        primary: '#FFC186',
        secundary: '#9DACD6',
        name: 'Buttons',
        iconName: 'blur-circular',
        onPress: () => navigation.navigate('social network')
       },
      {
        primary: '#00CA86',
        secundary: '#622EF0',
        name: 'Icons',
        iconName: 'code',
        onPress: () => navigation.navigate('social network')
       },
      //  {
      //   primary: '#FFC186',
      //   secundary: '#9DACD6',
      //   name: 'code',
      //   iconName: 'code',
      //   onPress: () => navigation.navigate('nice')
      //  }, 
      // {
      //   primary: 'red',
      //   secundary: 'orange',
      //   name: 'code',
      //   iconName: 'code',
      //   onPress: () => navigation.navigate('nice')
      //  },
    ]
  },
  {
    title: 'About',
    items: [
       {
        primary: '#CF885C',
        secundary: '#A46160',
        name: 'Dependencies',
        iconName: 'info',
        onPress: () => navigation.navigate('about')
       },  
      {
        primary: '#C6AA38',
        secundary: '#6BAF36',
        name: 'code',
        iconName: 'edit',
        onPress: () => navigation.navigate('about')
       },
      {
        primary: '#00CA86',
        secundary: '#622EF0',
        name: 'code',
        iconName: 'code',
        onPress: () => navigation.navigate('about')
       },
      {
        primary: '#626DAE',
        secundary: '#C74A75',
        name: 'code',
        iconName: 'code',
        onPress: () => navigation.navigate('about')
       },
    ]
  },

];

export default DATA;