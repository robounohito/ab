
import { on, createReducer, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { Personas, Persona, Contact, ContactDto, PersonaDto, ConditionalKeywordsDto, ConditionalKeywords } from './personas.types';
import { loadContactsSuccess, loadPersonasSuccess, reorderPersonas, personaSelectionChange, Condition } from './personas.constants';
import { sortWith, ascend, prop, assoc, find, whereEq, evolve, always, lensIndex, findIndex, over, compose, lensPath, set } from 'ramda';
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

  on(personaSelectionChange, (state, { personaId, path, value }) => {
    const personaLens = lensPath([
      findIndex(whereEq({ id: personaId }))(state.personas ?? []),
      ...path
    ]);
    return evolve({
      personas: set(personaLens, value) as () => Persona[],
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
    contactsLocation: {
      city: dto.location.city,
      state: dto.location.state,
      country: dto.location.country,
      zipCode: dto.location.zipCode,
    },
    companyAttributes: {
      revenue: (dto.company.revenue),
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
    contactsLocation: 'location',
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
      city: persona.contactsLocation.city,
      state: persona.contactsLocation.state,
      country: persona.contactsLocation.country,
      zipCode: persona.contactsLocation.zipCode,
    },
    company: {
      industry: conditionalKeywordsToDto(persona.industry),
      revenue: persona.companyAttributes.revenue,
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
    return {
      [subsetMapper[subsetPath] as string]: dto[subsetMapper[subsetPath]!]
    };
  }
  return dto;
}

function conditionalKeywordsFromDto(dto: ConditionalKeywordsDto): ConditionalKeywords {
  if (dto.known) {
    return {
      condition: Condition.isKnown,
      keywords: [],
    };
  }
  if (dto.unKnown) {
    return {
      condition: Condition.isUnknown,
      keywords: [],
    };
  }
  if (dto.anyOf.length) {
    return {
      condition: Condition.isAnyOf,
      keywords: dto.anyOf,
    };
  }
  return {
    condition: Condition.isNoneOf,
    keywords: dto.noneOf,
  };
}

function conditionalKeywordsToDto(conditionalKeywords: ConditionalKeywords): ConditionalKeywordsDto {
  switch (conditionalKeywords.condition) {
    case Condition.isAnyOf:
      return {
        anyOf: conditionalKeywords.keywords,
        noneOf: [],
        known: false,
        unKnown: false,
      };
    case Condition.isNoneOf:
      return {
        anyOf: [],
        noneOf: conditionalKeywords.keywords,
        known: false,
        unKnown: false,
      };
    case Condition.isKnown:
      return {
        anyOf: [],
        noneOf: [],
        known: true,
        unKnown: false,
      };
    case Condition.isUnknown:
      return {
        anyOf: [],
        noneOf: [],
        known: false,
        unKnown: true,
      };
  }
}
