import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";
import TvIcon from "@material-ui/icons/Tv";

const useStyles = makeStyles({
  root: {
    borderRadius: "0.8rem",
  },
  icon: {
    fontSize: "3.2rem",
  },
  iconBorder: {
    border: "2px solid black",
    borderRadius: "10000px",
    padding: "7px",
  },
  header: { fontSize: "3rem" },
  captions: {},
});

export default function NoPosts() {
  const EditButton = withStyles((theme) => ({
    root: {
      color: "#fafafa",
      backgroundColor: "#0095f6",
      textTransform: "none",
      padding: "0.3rem 2rem",

      "&:hover": {
        backgroundColor: "#0095f6",
      },
    },
  }))(Button);
  const classes = useStyles();
  return (
    <Container className="mt-3 rounded p-5">
      <Row>
        <Col>
          <Row className="justify-content-center align-items-center">
            <span className={classes.iconBorder}>
              <TvIcon className={classes.icon} />
            </span>
          </Row>
          <Row className="justify-content-center align-items-center">
            <span className={classes.header}>Upload a Video</span>
          </Row>
          <Row className="justify-content-center align-items-center">
            <span className={classes.caption}>
              Videos must be between 1 and 60 minutes long.
            </span>
          </Row>
          <Row className="justify-content-center align-items-center mt-4">
            <EditButton>Upload</EditButton>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
