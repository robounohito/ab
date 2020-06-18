
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
    return `${min}-${max} employees`;
  } else {
    return `${min}+ employees`;
  }
}

export function personaMapper(dto: PersonaDto): Persona {
  return {
    id: dto.id,
    name: dto.name,
    active: dto.active,
    order: dto.order,
    contactsAttributes: {
      jobDepartment: dto.job.department,
      jobTitle: conditionalKeywordsInit(dto.job.title),
      seniority: dto.job.seniority,
    },
    contactsLocation: null!,
    companyAttributes: {
      revenue: (dto.company.revenue),
      fundingStage: dto.company.fundingStage,
      numberOfEmployees: [numberOfEmployeesMapper(dto.company.employees)]
    },
    companyLocation: null!,
    industry: conditionalKeywordsInit(dto.company.industry),
    technologies: conditionalKeywordsInit(dto.company.technologies),
    contactsCount: 0,
  };
}

function conditionalKeywordsInit(dto: ConditionalKeywordsDto): ConditionalKeywords {
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
