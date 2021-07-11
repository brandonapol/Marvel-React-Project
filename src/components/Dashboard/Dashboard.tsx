import React, {useState} from 'react';
import my_image from '../../assets/babybrandon.jpg'
import not_my_image from '../../assets/inameyoukevin.png'
import { Link } from 'react-router-dom';
import {Paper} from '@material-ui/core';
import { Drawer as MUIDrawer, 
    ListItem, 
    List, 
    ListItemIcon, 
    ListItemText, 
    Theme,
    useTheme, 
    makeStyles, 
    createStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    Dialog, 
    DialogActions, 
    DialogContent,
    DialogContentText, 
    DialogTitle  ,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import clsx from 'clsx';
import { RouteComponentProps, withRouter, Switch, Route } from "react-router-dom";
import { DataTable } from '../../components/DataTable';
import { HeroForm } from '../../components/HeroForm'

interface DashProps{
    history: RouteComponentProps["history"];
    location: RouteComponentProps['location'];
    match: RouteComponentProps['match'];
  }

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${my_image});`,
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    h3: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        color: '#4ef3b4',
        textDecoration: 'none',
        backgroundColor: 'white',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_a: {
        color: '#4ef3b4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    toolbar:{
      display: 'flex',
      backgroundColor: 'rgb(72, 255, 200)',
      color: 'black',
    },
    toolbar_button: {
      marginLeft: 'auto'
    },
}))

// export const Dashboard = () => {
//     const classes = useStyles(); // this is a silly place pls explain

//     return (
//         <main className={classes.main}>
//             {/* why does useStyles() work and we still have to write 'classes' */}
//         <div className={useStyles().text}> 
//             <h1>Look at your fancy instruments</h1>
//             <p>I stole a meme from <a href="https://www.instagram.com/bandmemes666/">@bandmemes666</a> but now I can't make it fit with all this table content so now it is at the signin page</p>
//             <h3 className={`${classes.logo}`}>
//                 <Link to='/' className={`${ classes.logo_a } ${ classes.logo_navigation }`}>Brandon Brand Click <p className={`${ classes.h3 }`}>Here</p> to return home</Link>
//             </h3>
//             <h5>Styling this is TERRIBLE</h5>
//             <h4>a NIGHTMARE</h4>
//             <p className={`${ classes.h3 }`}>I was being dramatic I figured it out</p>
//             <button>Blow money at Chicago Music Exchange and add a new instrument</button>
//             <Paper variant="outlined">
//             <img src={`${not_my_image}`} alt="band meme"/>
//             </Paper>
//             {/* <DataTable />  */}
//         </div>
//         </main>
//     )
// }

export const Dashboard = withRouter(( props:DashProps ) => {
    console.log(props)
    const { history } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const [dialogOpen, setDialogOpen] = useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const handleDialogClickOpen = () => {
      setDialogOpen(true);
    }
  
    const handleDialogClickClose = () => {
      setDialogOpen(false);
    }
  
    const itemsList = [
      {
        text: 'Home',
        onClick: () => history.push('/')
      },
      {
        text: 'Sign In',
        onClick: () => history.push('/signin')
      }
    ]
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Collected Heroes
            </Typography>
            <Button className={classes.toolbar_button} onClick={handleDialogClickOpen}>Create New Hero</Button>

          {/*Dialog Pop Up begin */}
        <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add New Hero</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
              <HeroForm />
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleDialogClickClose} color="primary">Cancel</Button>
            <Button onClick={handleDialogClickClose} color = "primary">Done</Button> 
          </DialogActions>

        </Dialog>
          </Toolbar>
        </AppBar>
        <MUIDrawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
          {itemsList.map((item, index) => {
            const { text, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
          </List>
        </MUIDrawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
            <DataTable />
        </main>
      </div>
      )
  });