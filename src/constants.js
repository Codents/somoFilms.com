export const breakpoints = {
  sm: 600,
  md: 1400,
  lg: Infinity,
};

export const menus = [
  {
    id: 'home',
    active: true,
    selected: true,
    route: '/',
    text: 'menu.home',
  },
  {
    id: 'team',
    active: true,
    selected: false,
    route: '/team',
    text: 'menu.team',
  },
  {
    id: 'works',
    active: true,
    selected: false,
    route: '/works',
    text: 'menu.works',
  },

  {
    id: 'clients',
    active: true,
    selected: false,
    route: '/clients',
    text: 'menu.clients',
  },
  {
    id: 'inprogress',
    active: true,
    selected: false,
    route: '/inprogress',
    text: 'menu.inprogress',
  },
  {
    id: 'contact',
    active: true,
    selected: false,
    route: '/contact',
    text: 'menu.contacts',
  },
  {
    id: 'about',
    active: true,
    selected: false,
    route: '/about',
    text: 'menu.about',
  },
];

export const team = [
  {
    id: 'david',
    name: 'team.bio.david.name',
    role: 'team.bio.david.role',
    text: 'team.bio.david.text',
    url: {
      sm: '/team/team_portrait_david_palacios.jpg',
      md: '/team/team_landscape_david_palacios.jpg',
      lg: '/team/team_landscape_david_palacios.jpg',
    },
  },
  {
    id: 'salome',
    name: 'team.bio.salome.name',
    role: 'team.bio.salome.role',
    text: 'team.bio.salome.text',
    url: {
      sm: '/team/team_portrait_salome_garcia.jpg',
      md: '/team/team_landscape_salome_garcia.jpg',
      lg: '/team/team_landscape_salome_garcia.jpg',
    },
  },
  {
    id: 'kike',
    name: 'team.bio.kike.name',
    role: 'team.bio.kike.role',
    text: 'team.bio.kike.text',
    url: {
      sm: '/team/team_portrait_kike_palacios.jpg',
      md: '/team/team_landscape_kike_palacios.jpg',
      lg: '/team/team_landscape_kike_palacios.jpg',
    },
  },
  {
    id: 'pedro',
    name: 'team.bio.pedro.name',
    role: 'team.bio.pedro.role',
    text: 'team.bio.pedro.text',
    url: {
      sm: '/team/team_portrait_pedro_r_soto.jpg',
      md: '/team/team_landscape_pedro_r_soto.jpg',
      lg: '/team/team_landscape_pedro_r_soto.jpg',
    },
  },
];
