import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Link } from "react-scroll";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import HouseIcon from "@material-ui/icons/House";
import TimelineIcon from "@material-ui/icons/Timeline";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import BusinessIcon from "@material-ui/icons/Business";

import myTheme, { theme } from "../MyTheme/MyTheme";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
    color: theme.palette.common.black,
  },
}))(MenuItem);

export default function MyMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const list: Array<{ title: string; ref: string; icon: any }> = [
    { ref: "alarmanlagen", title: "Alarmanlagen", icon: <HouseIcon /> },
    { ref: "edelmetalle", title: "Edelmetalle", icon: <TimelineIcon /> },
    { ref: "kontakt", title: "Beratung erhalten", icon: <PersonAddIcon /> },
    { ref: "datenschutz", title: "Datenschutz", icon: <BeachAccessIcon /> },
    { ref: "impressum", title: "Impressum", icon: <BusinessIcon /> },
  ];

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {list.map(({ title, ref, icon }, i) => {
          return (
            <Link
              onClick={() => {
                handleClose();
                window.location.href = `#${ref}`;
              }}
              color={theme.palette.common.white}
              style={{ backgroundColor: "white" }}
              key={i}
              offset={-myTheme.appBar.height - 30}
              to={ref}
              smooth={true}
              duration={100}
              delay={50}
            >
              <StyledMenuItem>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </StyledMenuItem>
            </Link>
          );
        })}
      </StyledMenu>
    </div>
  );
}
