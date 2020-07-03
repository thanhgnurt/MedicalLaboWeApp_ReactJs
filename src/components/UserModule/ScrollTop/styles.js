
const styles = (theme) => ({
  root: {
    position: "fixed",
   
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex : 9999,
  },
  backToTop : {
    backgroundColor : theme.palette.primary.backToTop,
    color : theme.palette.secondary.textColor,
    "&:hover": {
      backgroundColor: theme.palette.primary.hoverColor,
      boxShadow: `0 0 0 0.2rem ${theme.palette.secondary.boxShadow}`,
    },
  },
  
 
  appBarQueryScroll: {
  
  },

  grow: {
   
  },
  menuButton: {

  },

  paper: {
   
  },

  listMenuMobile: {

  },

  // responsive

  iconLogin: {
 
  },
  buttonLogin: {

  },
  menu_list: {
 
  },

  sectionDesktop: {
 
  },

  sectionMobile: {
 
  },


 
});
export default styles;