import React, { FC, useState } from "react";
import { ListItem, ListItemText, Collapse, List } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

interface Props {
  title: string;
}

const ExpandedListItem: FC<Props> = props => {
  const [isOpen, toggleOpen] = useState(false);

  const toggle = () => toggleOpen(!isOpen);

  return (
    <>
      <ListItem button key={props.title} onClick={toggle}>
        <ListItemText primary={props.title} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.children}
        </List>
      </Collapse>
    </>
  );
};

export default ExpandedListItem;
