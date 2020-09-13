import React from "react";
import styles from "./styles";
import {
  ADMIN_ROUTES,
  USER_ROUTES,
  LOGIN_SIGNUP_ROUTES,
  SET_SCHEDULE_ROUTE,
  VIEW_RESULT_ROUTE,
  HEATH_OF_LIFE_ROUTE,
  DETAIL_TEST_ROUTE
} from "../../constantPages/routes";
import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { themeLight, themeDark } from "../../commons/Theme";
import { Redirect, Route, Switch,
  //  Route, Redirect
   } from "react-router-dom";
import AdminLayoutRoute from "../../commons/Layout/AdminLayoutRoute";
import UserLayoutRoute from "../../commons/Layout/UserLayoutRoute";
import LoginSignupRoute from "../../commons/Layout/LoginSignupRoute";
import { connect } from "react-redux";
import { compose } from "redux";
import SetScheduleLayoutRoute from "./../../commons/Layout/SetScheduleLayoutRoute";
import ViewResultLayoutRoute from "../../commons/Layout/ViewResultLayoutRoute";

function AppContainer(props) {
  const { theme } = props;

  const renderAdminRoutes = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route) => {
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  };
  const renderUserRoutes = () => {
    let xhtml = null;
    xhtml = USER_ROUTES.map((route) => {
      return (
        <UserLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  };

  const renderLoginSignupRoutes = () => {
    let xhtml = null;
    xhtml = LOGIN_SIGNUP_ROUTES.map((route) => {
      return (
        <LoginSignupRoute
          key={route.path}
          path={route.path}
          component={route.component}
          // exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  };

  const renderSetScheduleRoutes = () => {
    return (
      <SetScheduleLayoutRoute
        path={SET_SCHEDULE_ROUTE.path}
        name={SET_SCHEDULE_ROUTE.name}
        component={SET_SCHEDULE_ROUTE.component}
      />
    );
  };
  const renderHeathOfLifeRoutes = () => {
    return (
      <SetScheduleLayoutRoute
        path={HEATH_OF_LIFE_ROUTE.path}
        name={HEATH_OF_LIFE_ROUTE.name}
        component={HEATH_OF_LIFE_ROUTE.component}
      />
    );
  };
  const renderDetailTestRoutes = () => {
    return (
      <SetScheduleLayoutRoute
        path={DETAIL_TEST_ROUTE.path}
        name={DETAIL_TEST_ROUTE.name}
        component={DETAIL_TEST_ROUTE.component}
      />
    );
  };
  const renderViewResult = () => {
    return (
      <ViewResultLayoutRoute
        path={VIEW_RESULT_ROUTE.path}
        name={VIEW_RESULT_ROUTE.name}
        component={VIEW_RESULT_ROUTE.component}
      />
    );
  };

  return (
    <ThemeProvider theme={theme ? themeLight : themeDark}>
      <CssBaseline />
      <Switch>
        {renderAdminRoutes()}
        {renderLoginSignupRoutes()}
        {renderSetScheduleRoutes()}
        {renderViewResult()}
        {renderHeathOfLifeRoutes()}
        {renderDetailTestRoutes()}
        {renderUserRoutes()}
        <Route path="/dat-lich">
          <Redirect to="/dat-lich/carousel"></Redirect>
        </Route>
        <Route path="">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withStyles(styles), withConnect)(AppContainer);
