import { Condition } from './personas.constants';

export interface Personas {
  loading: boolean;
  personas: Persona[] | null;
}

export interface Persona {
  id: string;
  order: number;
  name: string;
  contactAttributes: ContactAttributes;
  companyAttributes: any;
  industry: any;
  location: any;
  technologies: any;
  contacts?: Contact[];
  contactsCount: number;
}

interface ContactAttributes {
  jobDepartment: string[];
  jobTitle: {
    condition: Condition;
    keywords: string[];
  };
  seniority: string[];
}

export interface Contact {
  id: string;
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
