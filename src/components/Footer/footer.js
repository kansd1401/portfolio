import React, { Fragment } from "react";
import { Grid, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./footer.css";

const useCSSStyles = makeStyles(theme => ({
    icon: {

    },
    grid: {
        backgroundColor: '#8BC6EC',
        backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
        height: 80,
        padding: 10,
        boxShadow: '0 3px 5px 2px rgba(139, 198, 236, .8)',
    },
    gridItem: {
        textAlign: "center"
    },
    footerGrid: {
        height: '10vh'
    },
    para: {
        backgroundColor: '#8BC6EC'
    }

}));

export default function FloatingActionButtons() {
    const cssClasses = useCSSStyles();

    return (
        <Fragment>
            <Grid container spacing={0} className={cssClasses.grid} justify="center" alignItems="baseline" wrap="wrap">
                <Grid item>
                    <p>follow me on: </p>
                </Grid>
                <Grid item md={1} sm={1} xs={2} className={cssClasses.gridItem}>
                        <Fab variant="round" size="small" color="primary" href="https://github.com/kansd1401/" target="_blank">
                            <GitHubIcon ></GitHubIcon>
                        </Fab>
                </Grid>
                <Grid item md={1} sm={1} xs={2} className={cssClasses.gridItem}>
                        <Fab variant="round" size="small" color="primary" href="https://github.com/kansd1401/" target="_blank">
                            <GitHubIcon ></GitHubIcon>
                        </Fab>
                </Grid>
                <Grid item md={1} sm={1} xs={2} className={cssClasses.gridItem}>
                
                        <Fab variant="round" size="small" color="primary" href="https://www.linkedin.com/in/sanjeet-kang-4948b7198/" target="_blank">
                            <LinkedInIcon></LinkedInIcon>
                        </Fab>
                </Grid>
            </Grid>
        </Fragment>
    )
}
