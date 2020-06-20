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
  contactLocation: Location;
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
  revenue: ConditionalRevenue;
  fundingStage: string[];
  numberOfEmployees: string[];
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

export type SelectOptions = string[];

export type ConditionalKeywords = {
  condition: Condition;
  keywords: string[];
};

export type ConditionalRevenue = {
  condition: Condition;
  min: string;
  max: string;
};

interface Location {
  city: string[];
  state: string[];
  country: string[];
  zipCode: string[];
}

export type PersonaSubsetPath = [
  keyof Persona,
] | [
    keyof Persona,
    keyof Persona['contactsAttributes']
    | keyof Persona['companyAttributes']
    | keyof Location
    | keyof ConditionalKeywords,
  ] | [
    keyof Persona,
    keyof Persona['contactsAttributes']
    | keyof Persona['companyAttributes'],
    keyof ConditionalKeywords
    | keyof Persona['companyAttributes']['revenue']
  ];

export interface PersonaDto {
  id: string;
  order: number;
  active: boolean;
  name: string;
  job: {
    title: ConditionalKeywordsDto;
    department: string[];
    seniority: string[];
  };
  location: {
    city: string[];
    state: string[];
    country: string[];
    zipCode: string[];
  };
  company: {
    industry: ConditionalKeywordsDto;
    revenue: ConditionalRevenueDto;
    fundingStage: string[];
    employees: any;
    location: {
      city: string[];
      state: string[];
      country: string[];
      zipCode: string[];
    };
    technologies: ConditionalKeywordsDto;
  };
}

export interface ConditionalKeywordsDto {
  type: Condition;
  keywords: string[];
}

export interface ConditionalRevenueDto {
  type: Condition;
  min: string;
  max: string;
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
