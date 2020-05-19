<Grid container spacing={3} className={cssClasses.grid} justify="center" wrap="wrap">
<Grid item>
    <p>follow me on: </p>
</Grid>
<Grid item md={1} sm={1} xs={2} className={cssClasses.gridItem}>
    <a href="https://g"> {/* href in FAB does not redirect externally because of react router */}
    <Fab variant="round" size="small" color="primary">
        <GitHubIcon ></GitHubIcon>
    </Fab>
    </a>
</Grid>
<Grid item md={1} sm={1} xs={2} className={cssClasses.gridItem}>
    <a href="https://www.linkedin.">
    <Fab variant="round" size="small" color="primary">
        <LinkedInIcon></LinkedInIcon>
    </Fab>
    </a>
</Grid>
<Grid item md={1} sm={1} xs={2} className={cssClasses.gridItem}>
    <a href="https://twitter.co">
    <Fab variant="round" size="small" color="primary">
        <TwitterIcon></TwitterIcon>
    </Fab>
    </a>
</Grid>
</Grid>