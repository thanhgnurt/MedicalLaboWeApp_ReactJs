const styles = (theme) => ({
  bottom: {
    // height: 75,
    flexGrow: 1,
    width: "100%",
    position: "relative",
    zIndex: 10,
    
  },
  background :{
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  content: {
    paddingTop: 20,
    display: "flex",
    color : "rgba(0, 0, 0)",
  },
  text: {
    fontSize: 15,
    fontFamily: "'Quicksand', sans-serif",
    fontWeight : "500",
    overflow: "hidden",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    display: "-webkit-box",
    color :"rgba(0, 0, 0, 0.767)"
  },
  paper: {
    textAlign: "left",
    "& ul": {
      listStyle: "none",
      display: "flex",
      paddingLeft: 0,
      "& li": {
        paddingRight: 20,
        fontSize: 15,
        fontFamily: "'Quicksand', sans-serif",
        overflow: "hidden",
        "-webkit-line-clamp": 1,
        "-webkit-box-orient": "vertical",
        display: "-webkit-box",
        fontWeight : "500"
      },
    },

  },

  "@media (max-width: 960px)": {
    content: {
      "& ul": {
        justifyContent: "center",
      },
    },
    text: {
      textAlign: "center",
    },
  },
  //   "@media (max-width: 960px)": {
  //     content: {

  //     },
  //   },
});
export default styles;
