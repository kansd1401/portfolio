import React from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import RoomIcon from "@material-ui/icons/Room";
import Fade from "react-reveal/Fade";

const Info = (props) => {
  return (
    <Fade left>
      <Grid container direction="row" justify="flex-start" spacing={3}>
        <Grid item md={12}>
          <Typography component={"span"} variant="h4">
            <Box fontWeight="fontWeightLight">About me</Box>
          </Typography>
        </Grid>
        <Grid item md={11}>
          <Typography component={"span"} variant="body1" gutterBottom>
            <Box fontWeight={"300"}>
              My name is Sanjeet Kang a full-stack developer with a flair for
              creating elegant solutions in the least amount of time. With a
              passion for building software and a love of learning and working
              with cutting-edge web technologies, I bring an energetic and
              communicative personality to the team.
              <br />
              <br />
              Actively seeking a position where I can make meaningful
              contribution and grow as a developer.
            </Box>
          </Typography>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Typography component={"span"} variant="h5">
            <Box fontWeight="fontWeightLight" paddingLeft="20px">
              Contact
            </Box>
          </Typography>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Typography
            component={"span"}
            variant="body2"
            style={{ display: "flex", alignItems: "center" }}
          >
            <PhoneIphoneIcon /> &ensp; +1604-704-0636
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Typography
            variant="body2"
            style={{ display: "flex", alignItems: "center" }}
          >
            <RoomIcon /> &ensp; Vancouver, BC Canada
          </Typography>
        </Grid>
        <Grid item md={12} sm={12}>
          <Typography
            component={"span"}
            variant="body2"
            style={{ display: "flex", alignItems: "center" }}
          >
            <MailOutlineIcon /> &ensp; kang.sanjeet1401@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default Info;
