import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumbs as MBreadcrumbs,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
  },
}));

export const Breadcrumbs = () => {
  const classes = useStyles();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <Container className={classes.root}>
      <MBreadcrumbs separator={<NavigateNextIcon />} aria-label="breadcrumb">
        {pathnames.length > 0 ? (
          <Link className="link" to={{ pathname: "/" }}>
            teft
          </Link>
        ) : (
          <Typography> Teft </Typography>
        )}
        {/** */}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography key={name}>{name}</Typography>
          ) : (
            <Link className="link" key={name} to={routeTo}>
              {name}
            </Link>
          );
        })}
      </MBreadcrumbs>
    </Container>
  );
};
export default Breadcrumbs;
