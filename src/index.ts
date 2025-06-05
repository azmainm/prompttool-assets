export { roleTechnicalContexts } from './roleTechnicalContexts';
export { roleDescriptions } from './roleDescriptions';
export { defaultDescriptions } from './defaultDescriptions';
export { defaultContext } from './defaultContext';
export { 
  analysisCues, 
  presetFrameworks, 
  defaultAnalysisFramework 
} from './defaultAnalysisFramework';

// Type definitions for better TypeScript support
export interface RoleContextMap {
  [key: string]: string;
}

export interface AnalysisCues {
  [key: string]: string;
}

export interface PresetFrameworks {
  [key: string]: string[];
}