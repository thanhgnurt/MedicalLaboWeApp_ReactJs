import { withStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import { bindActionCreators, compose } from "redux";
import LinePager from "../../components/UserModule/LinePager";
import { fetchListNewsRequest } from "../../redux/actions/newsHealthOfLife";
import CarouselContainer from "../CarouselContainer";
import FooterContainer from "../FooterContainer";
import HealthOfLifeContainer from "../HealthOfLifeContainer";
import ListGroupTestContainer from "../ListGroupTestContainer";
import NavbarContainer from "../NavbarContainer";
import RegistrationTutorialContainer from "../RegistrationTutorialContainer";
import { fetchListGroupTestRequest } from "./../../redux/actions/listGroupTest";
import { userLoginReset } from './../../redux/actions/userActions';
import * as userPageActionTypes from "./../../redux/actions/userPape";
import styles from "./styles";


function UserModuleContainer(props) {
  const { classes } = props;
  let location = useLocation();
  const { fetchListGroupTest, userLoginReset,fetchListNews } = props;
  useEffect(() => {
    // if (location.prepage) {
      switch (location.prepage) {
        case "/":
          setTimeout(() => {
            scroll.scrollTo(0);
          }, 1000);

          break;
        case "":
          setTimeout(() => {
            scroll.scrollTo(0);
          }, 1000);

          break;
        case undefined:
          
          setTimeout(() => {
            scroll.scrollTo(0);
          }, 800);
          break;
        case "/danh-muc-xet-nghiem":
          setTimeout(() => {
            scroller.scrollTo("CATEGORY_TEST", {
              duration: 500,
              delay: 100,
              smooth: true,
              offset: -55,
            });
          }, 200);
          break;
        case "/luu-y-khi-lay-mau":
          setTimeout(() => {
            scroller.scrollTo("NOTE", {
              duration: 500,
              delay: 100,
              smooth: true,
              offset: -55,
            });
          }, 200);
          break;
        case "/tin-tuc-y-khoa":
          setTimeout(() => {
            scroller.scrollTo("NEWS_MEDICAL", {
              duration: 500,
              delay: 100,
              smooth: true,
              offset: -70,
            });
          }, 200);
          break;

        default:
          break;
      }
    // }
    fetchListGroupTest();
    userLoginReset();
    fetchListNews();
  }, [fetchListGroupTest,location.prepage,userLoginReset, fetchListNews]);



  return (
    <div className={classes.userPaper}>
      {/* <Progess showProgess={props.showLoading} /> */}
      <NavbarContainer showProgess={props.showLoading} />
      <CarouselContainer showProgess={props.showLoading}/>
      <ListGroupTestContainer />
      <LinePager />
      <RegistrationTutorialContainer />
      <LinePager />
      <HealthOfLifeContainer />
      <FooterContainer />
    
    </div>
  );
}

const mapStateToProps = (state) => ({
  userPape: state.userPape,
  showLoading: state.ui.showLoading,
});
const mapDispatchToProps = (dispatch) => ({
  userPapeCreators: bindActionCreators(userPageActionTypes, dispatch),
  fetchListGroupTest: () => {
    dispatch(fetchListGroupTestRequest());
  },
  userLoginReset:()=>{
    dispatch(userLoginReset())
  },
  fetchListNews : ()=>{
    dispatch(fetchListNewsRequest())
  }
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withStyles(styles), withConnect)(UserModuleContainer);
