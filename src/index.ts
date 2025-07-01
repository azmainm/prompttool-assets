// Export role types and enums
export { 
  RoleCategory, 
  CodingRoles, 
  NonCodingRoles, 
  getRoleCategory, 
  isCodingRole 
} from './roleTypes';
export type { 
  AllRoles, 
  RoleDescriptions, 
  RoleTechnicalContexts 
} from './roleTypes';

// Export role data
export { roleTechnicalContexts } from './roleTechnicalContexts';
export { roleDescriptions } from './roleDescriptions';

// Export other modules
export { defaultDescriptions } from './defaultDescriptions';
export { defaultContext } from './defaultContext';
export { 
  analysisCues, 
  presetFrameworks, 
  defaultAnalysisFramework 
} from './defaultAnalysisFramework';

// Legacy type definitions for backward compatibility
export interface AnalysisCues {
  [key: string]: string;
}

export interface PresetFrameworks {
  [key: string]: string[];
}