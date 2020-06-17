import { Condition } from './personas.constants';

export interface Personas {
  loading: boolean;
  personas: Persona[] | null;
  selectOptions: {
    fundingStage: SelectOptions;
    seniority: SelectOptions;
    jobDepartment: SelectOptions;
    numberOfEmployees: SelectOptions;
  };
}

export interface Persona {
  id: string;
  order: number;
  active: boolean;
  name: string;
  contactsAttributes: ContactsAttributes;
  contactsLocation: Location;
  companyAttributes: CompanyAttributes;
  companyLocation: Location;
  industry: ConditionalKeywords;
  technologies: ConditionalKeywords;
  contacts?: Contact[];
  contactsCount: number;
}

interface ContactsAttributes {
  jobDepartment: string[];
  jobTitle: ConditionalKeywords;
  seniority: string[];
}

interface CompanyAttributes {
  revenue: {
    condition: Condition;
    min: number;
    max: number;
  };
  fundingStage: string[];
  numberOfEmployee: string[];
}

export interface Contact {
  id: string;
  image: string;
  fullName: string;
  jobTitle: string;
  lastActivityDate: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  companyLocation: string;
  technologies: string[];
  contactLocation: string;
  fundingStage: string;
  numberOfEmployees: number;
}

export interface ContactDto {
  id: string;
  image: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  job: {
    department: string[];
    seniority: string[];
    title: string;
  };
  location: {
    city: string;
    country: string;
    state: string;
    zipCode: string;
  };
  phoneNumber: string;
}

export type SelectOptions = string[];

type ConditionalKeywords = {
  condition: Condition;
  keywords: string[];
};

interface Location {
  city: string[];
  state: string[];
  country: string[];
  zipCode: string[];
}
