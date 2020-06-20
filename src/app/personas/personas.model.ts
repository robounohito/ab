
import { on, createReducer, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { Personas, Persona, Contact, ContactDto, PersonaDto, ConditionalKeywordsDto, ConditionalKeywords, ConditionalRevenueDto, ConditionalRevenue } from './personas.types';
import {
  loadContactsSuccess, loadPersonasSuccess, reorderPersonas, personaChange, personaCreateSuccess,
  Condition, removePersona
} from './personas.constants';
import {
  sortWith, ascend, prop, assoc, find, whereEq, evolve, always, lensIndex, findIndex, over, compose,
  lensPath, set, append, reject
} from 'ramda';
import { selectRouteParam } from '../app.model';

const initialState: Personas = {
  loading: false,
  personas: null,
  selectOptions: {
    fundingStage: [],
    seniority: [],
    jobDepartment: [],
    numberOfEmployees: [],
  },
};

const personasReducer = createReducer(initialState,

  on(loadPersonasSuccess, (_, { personas, dataSets }) => {
    return {
      loading: false,
      personas: sortPersonas(personas),
      selectOptions: dataSets,
    };
  }),

  on(reorderPersonas, (state, { moved }) => {
    return assoc('personas', moved)(state);
  }),

  on(personaChange, (state, { personaId, path, value }) => {
    const personaLens = lensPath([
      findIndex(whereEq({ id: personaId }))(state.personas ?? []),
      ...path
    ]);
    return evolve({
      personas: set(personaLens, value) as () => Persona[],
    })(state);
  }),

  on(personaCreateSuccess, (state, { persona }) => {
    return evolve({
      personas: append(persona) as () => Persona[]
    })(state);
  }),

  on(removePersona, (state, { personaId }) => {
    return evolve({
      personas: reject(whereEq({ id: personaId })) as () => Persona[]
    })(state);
  }),

  on(loadContactsSuccess, (state, { personaId, contacts, contactsCount }) => {
    const personaLens = lensIndex(
      findIndex(whereEq({ id: personaId }))(state.personas ?? [])
    );
    return evolve({
      loading: always(false),
      personas: over(
        personaLens,
        compose(
          assoc('contactsCount', contactsCount),
          assoc('contacts', contacts)
        )
      ) as () => Persona[],
    })(state);
  }),

);

export function reducer(state: Personas, action: Action) {
  return personasReducer(state, action);
}

export const selectPersonas = createFeatureSelector<Personas>('personas');

export const selectCurrentPersona = createSelector(
  selectRouteParam('personaId'),
  selectPersonas,
  (personaId, { personas }) => find(whereEq({ id: personaId }), personas ?? [])
);

const sortPersonas = sortWith<Persona>([
  ascend(prop('order'))
]);

export function contactMapper(dto: ContactDto): Contact {
  return {
    id: dto.id,
    image: dto.image,
    fullName: dto.firstName + ' ' + dto.lastName,
    jobTitle: dto.job.title || 'Mock job title',
    lastActivityDate: '' || 'Mock date',
    email: dto.email,
    phone: dto.phoneNumber || 'mock 111 11 11',
    company: dto.company || 'Mock company',
    industry: '' || 'Mock industry',
    companyLocation: '' || 'Mock company location',
    technologies: ['Mock technology'],
    contactLocation: '' || 'Mock contact location',
    fundingStage: '' || 'Mock funding stage',
    numberOfEmployees: 0,
  };
}

export function numberOfEmployeesMapper(
  { min, max }: { min: number; max: number; }
): string {
  if (max !== -1) {
    return `${min}-${max}`;
  } else {
    return `${min}+`;
  }
}

export function personaFromDtoMapper(dto: PersonaDto): Persona {
  return {
    id: dto.id,
    name: dto.name,
    active: dto.active,
    order: dto.order,
    contactsAttributes: {
      jobDepartment: dto.job.department,
      jobTitle: conditionalKeywordsFromDto(dto.job.title),
      seniority: dto.job.seniority,
    },
    contactLocation: {
      city: dto.location.city,
      state: dto.location.state,
      country: dto.location.country,
      zipCode: dto.location.zipCode,
    },
    companyAttributes: {
      revenue: conditionalRevenueFromDto(dto.company.revenue),
      fundingStage: dto.company.fundingStage,
      numberOfEmployees: [numberOfEmployeesMapper(dto.company.employees)]
    },
    companyLocation: {
      city: dto.company.location.city,
      state: dto.company.location.state,
      country: dto.company.location.country,
      zipCode: dto.company.location.zipCode,
    },
    industry: conditionalKeywordsFromDto(dto.company.industry),
    technologies: conditionalKeywordsFromDto(dto.company.technologies),
    contactsCount: 0,
  };
}

export function personaToDtoMapper(
  persona: Persona,
  subsetPath?: keyof Persona
): Partial<PersonaDto> {
  const subsetMapper: {
    [key in keyof Partial<Persona>]: keyof PersonaDto
  } = {
    contactsAttributes: 'job',
    contactLocation: 'location',
    companyAttributes: 'company',
    companyLocation: 'company',
    industry: 'company',
    technologies: 'company',
  };
  const dto: PersonaDto = {
    id: persona.id,
    name: persona.name,
    active: persona.active,
    order: persona.order,
    job: {
      title: conditionalKeywordsToDto(persona.contactsAttributes.jobTitle),
      department: persona.contactsAttributes.jobDepartment,
      seniority: persona.contactsAttributes.seniority
    },
    location: {
      city: persona.contactLocation.city,
      state: persona.contactLocation.state,
      country: persona.contactLocation.country,
      zipCode: persona.contactLocation.zipCode,
    },
    company: {
      industry: conditionalKeywordsToDto(persona.industry),
      revenue: conditionalRevenueToDto(persona.companyAttributes.revenue),
      fundingStage: persona.companyAttributes.fundingStage,
      employees: persona.companyAttributes.numberOfEmployees,
      location: {
        city: persona.companyLocation.city,
        state: persona.companyLocation.state,
        country: persona.companyLocation.country,
        zipCode: persona.companyLocation.zipCode,
      },
      technologies: conditionalKeywordsToDto(persona.technologies),
    },
  };
  if (subsetPath) {
    if (subsetMapper[subsetPath]) {
      return {
        [subsetMapper[subsetPath] as keyof PersonaDto]:
          dto[subsetMapper[subsetPath] as keyof PersonaDto]
      };
    }
    return {
      [subsetPath]: dto[subsetPath as keyof PersonaDto]
    };
  }
  return dto;
}

export function createPersona(order: number): Persona {
  return {
    id: '',
    order,
    active: true,
    name: 'Your new persona',
    contactsAttributes: {
      jobDepartment: [],
      jobTitle: {
        condition: Condition.isUnknown,
        keywords: []
      },
      seniority: [],
    },
    contactLocation: {
      city: [],
      state: [],
      country: [],
      zipCode: [],
    },
    companyAttributes: {
      revenue: {
        condition: Condition.isUnknown,
        min: '',
        max: '',
      },
      fundingStage: [],
      numberOfEmployees: [],
    },
    companyLocation: {
      city: [],
      state: [],
      country: [],
      zipCode: [],
    },
    industry: {
      condition: Condition.isUnknown,
      keywords: []
    },
    technologies: {
      condition: Condition.isUnknown,
      keywords: []
    },
    contactsCount: 0,
  };
}

function conditionalKeywordsFromDto(
  dto: ConditionalKeywordsDto
): ConditionalKeywords {
  return {
    condition: dto.type,
    keywords: dto.keywords,
  };
}

function conditionalKeywordsToDto(
  conditionalKeywords: ConditionalKeywords
): ConditionalKeywordsDto {
  return {
    type: conditionalKeywords.condition,
    keywords: conditionalKeywords.keywords,
  };
}

function conditionalRevenueFromDto(
  dto: ConditionalRevenueDto
): ConditionalRevenue {
  return {
    condition: dto.type,
    min: dto.min,
    max: dto.max,
  };
}

function conditionalRevenueToDto(
  revenue: ConditionalRevenue
): ConditionalRevenueDto {
  return {
    type: revenue.condition,
    min: revenue.min,
    max: revenue.max,
  };
}
