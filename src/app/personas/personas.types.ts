import { Prospect } from '../app.types';
import { Condition } from './personas.constants';

export interface Personas {
  loading: boolean;
  personas: Persona[];
  currentContacts: Prospect[];
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
}

interface ContactAttributes {
  jobDepartment: string[];
  jobTitle: {
    condition: Condition;
    keywords: string[];
  };
  seniority: string[];
}
