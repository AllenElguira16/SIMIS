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
import CategoryStore from "../../../Store/CategoryStore";
import moment from "moment";
import { Delete, Update } from "@material-ui/icons";

interface Props {
  openForm: () => void;
  setFormType: (formType: FormType) => void;
}

const List: FC<Props> = props => {
  const { fetchCategories, categories, populateForm } = useContext(
    CategoryStore
  );

  useEffect(() => {
    async function fetch() {
      await fetchCategories();
    }
    fetch();
  }, [fetchCategories]);

  const onClick = (key: FormType, category: Category) => () => {
    // form = category;
    populateForm(category);
    props.setFormType(key);
    props.openForm();
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Date Created</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {categories.length !== 0 ? (
          categories.map((category, i) => (
            <TableRow key={i}>
              <TableCell>{category.name}</TableCell>
              <TableCell>{moment(category.dateCreated).format("L")}</TableCell>
              <TableCell>
                <IconButton onClick={onClick("Edit", category)}>
                  <Update />
                </IconButton>
                <IconButton onClick={onClick("Delete", category)}>
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
