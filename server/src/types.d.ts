// type ClientForm = BasicForm & InsuranceForm;
interface ClientForm extends BasicForm, InsuranceForm {
  id?: string;
  status?: number;
}

interface BasicForm {
  fullName: string;
  address: string;
  date: number;
  policyID: string;
}

interface DynamicForm {
  key: string;
  input1: string;
  input2: string;
}

interface InsuranceForm {
  dynamicForm: DynamicForm[];
  DS: string;
  VAT: string;
  LGT: string;
  OTHERS: string;
  MODEL: string;
  YEARMODEL: string;
  PLATENO: string;
  MOTORNO: string;
  CHASISNO: string;
}

interface EmployeeForm {
  id?: string;
  username: string;
  password: string;
}

interface ServerResponse {
  error?: string;
  success?: string;
}