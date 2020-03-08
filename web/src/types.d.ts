interface Category {
  id: string;
  name: string;
  isValid: boolean;
  dateCreated: Date;
}

interface User {
  id: string;
  firstname: string;
  lastname: string;
  address: string;
  mobile: string;
  category: string;
  remarks: string;
}

type FormType = "Add" | "Edit" | "Delete";
