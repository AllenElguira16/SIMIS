type ClientForm = BasicForm & InsuranceForm;

interface BasicForm {
  name: string;
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
