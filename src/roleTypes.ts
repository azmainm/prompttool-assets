export enum RoleCategory {
  CODING = 'Coding',
  NON_CODING = 'Non-Coding'
}

export enum CodingRoles {
  SENIOR_SOFTWARE_DEVELOPER = 'Senior Software Developer',
  QA_TEST_AUTOMATION_ENGINEER = 'QA/Test Automation Engineer',
  DEVOPS_RELEASE_ENGINEER = 'DevOps/Release Engineer',
  SECURITY_ENGINEER = 'Security Engineer',
  ANALYTICS_DATA_ENGINEER = 'Analytics/Data Engineer',
  UI_UX_DESIGNER = 'UI/UX Designer',
  PRODUCT_MANAGER = 'Product Manager',
  PROJECT_MANAGER = 'Project Manager',
  ACCESSIBILITY_SPECIALIST = 'Accessibility Specialist'
}

export enum NonCodingRoles {
  TECHNICAL_WRITER = 'Technical Writer',
  GRANT_WRITER = 'Grant Writer',
  MARKETING_COMMUNICATIONS = 'Marketing & Communications',
  PROMPT_ENGINEER = 'Prompt Engineer'
}

// Union type for all roles
export type AllRoles = CodingRoles | NonCodingRoles;

// Type definitions
export type RoleDescriptions = Record<AllRoles, string>;
export type RoleTechnicalContexts = Record<CodingRoles, string>; // Only coding roles need technical contexts

// Helper to get category for any role
export const getRoleCategory = (role: AllRoles): RoleCategory => {
  if (Object.values(CodingRoles).includes(role as CodingRoles)) {
    return RoleCategory.CODING;
  }
  return RoleCategory.NON_CODING;
};

// Helper to check if role is coding role
export const isCodingRole = (role: AllRoles): role is CodingRoles => {
  return Object.values(CodingRoles).includes(role as CodingRoles);
}; 