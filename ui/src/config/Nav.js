import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 130;

const styles = theme => ({
    drawerPaper: {
        position: 'absolute',
        width: drawerWidth,
    }
})
class Menu extends Component {
    state = {
        open: false
    }

    toggleDrawer = () => () => {
        this.setState({
            open: !this.state.open,
        });
    };
    render () {
        const { classes } = this.props;
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={this.toggleDrawer()} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                <Drawer open={this.state.open}
                        onClose={this.toggleDrawer()}
                        anchor='left'
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                >
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/chars">Characters</Link>
                        </li>
                        <li>
                            <Link to="/items">Items</Link>
                        </li>
                    </ul>
                </Drawer>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Menu);