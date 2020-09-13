const styles = theme =>({
    carouselItem:{
        position :"relative",
    },
    divImage :{
        height : 470,
        zIndex : 2

    },
    image :{
        objectFit :"cover",
        position:"absolute",
        zIndex : 1,
        borderRadius : "10px",
    },
    backgroundLayer:{
        position:"absolute",
        zIndex:2,
        backgroundColor : "rgba(0, 0, 0, 0.4)",
        top:0,
        bottom:0,
        left : 0,
        right : 0,
        borderRadius : "10px",
    },
    content :{
        position :"absolute",
        zIndex : 100,
        top : 30,
        color : "white",
        textAlign : "center",
        margin : "0 auto",
        // top: "50%",
        left: "50%",
        transform: "translate(-50%, 0)"
        
    },

});
export default styles;