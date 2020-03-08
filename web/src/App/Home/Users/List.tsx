import React, { FC, useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  IconButton
} from "@material-ui/core";
import UserStore from "../../../Store/UserStore";
// import moment from "moment";
import { Delete, Update } from "@material-ui/icons";

interface Props {
  openForm: () => void;
  setFormType: (formType: FormType) => void;
}

const List: FC<Props> = props => {
  const { fetchUsers, users, populateForm } = useContext(UserStore);

  useEffect(() => {
    async function fetch() {
      await fetchUsers();
    }
    fetch();
  }, [fetchUsers]);

  const onClick = (key: FormType, user: User) => () => {
    // form = category;
    populateForm(user);
    props.setFormType(key);
    props.openForm();
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>Mobile no.</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Remarks</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.length !== 0 ? (
          users.map((user, i) => (
            <TableRow key={i}>
              <TableCell>{user.firstname}</TableCell>
              <TableCell>{user.lastname}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>{user.mobile}</TableCell>
              <TableCell>{user.category}</TableCell>
              <TableCell>{user.remarks}</TableCell>
              {/* <TableCell>{moment(category.dateCreated).format("L")}</TableCell> */}
              <TableCell>
                <IconButton onClick={onClick("Edit", user)}>
                  <Update />
                </IconButton>
                <IconButton onClick={onClick("Delete", user)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell>Loading</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default observer(List);
