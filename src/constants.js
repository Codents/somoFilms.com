export const breakpoints = {
  sm: 600,
  md: 768,
  lg: Infinity
};

export const menus = [
  {
    id: "home",
    active: true,
    selected: true,
    route: "/",
    text: "menu.home"
  },
  {
    id: "team",
    active: true,
    selected: false,
    route: "/team",
    text: "menu.team"
  },
  {
    id: "works",
    active: true,
    selected: false,
    route: "/works",
    text: "menu.works"
  },
  {
    id: "about",
    active: true,
    selected: false,
    route: "/about",
    text: "menu.about"
  },
  {
    id: "clients",
    active: true,
    selected: false,
    route: "/clients",
    text: "menu.clients"
  },
  {
    id: "contact",
    active: true,
    selected: false,
    route: "/contact",
    text: "menu.contacts"
  },
  {
    id: "inprogress",
    active: true,
    selected: false,
    route: "/inprogress",
    text: "menu.inprogress"
  }
];

export const team = [
  {
    id: "david",
    name: "team.bio.david.name",
    role: "team.bio.david.role",
    bioText: "team.bio.david.text",
    imgUrl: "/static/team/team_portrait_david_palacios.jpg"
  },
  {
    id: "salome",
    name: "team.bio.salome.name",
    role: "team.bio.salome.role",
    bioText: "team.bio.salome.text",
    imgUrl: "/static/team/team_portrait_salome_garcia.jpg"
  },
  {
    id: "kike",
    name: "team.bio.kike.name",
    role: "team.bio.kike.role",
    bioText: "team.bio.kike.text",
    imgUrl: "/static/team/team_portrait_kike_palacios.jpg"
  },
  {
    id: "pedro",
    name: "team.bio.pedro.name",
    role: "team.bio.pedro.role",
    bioText: "team.bio.pedro.text",
    imgUrl: "/static/team/team_portrait_pedro_r_soto.jpg"
  }
];
