# prompttool-assets

A comprehensive collection of reusable prompt engineering assets including role descriptions, technical contexts, and analysis frameworks for AI-powered development workflows.

## Features

- 🎭 **Role Descriptions**: Pre-defined expert roles with detailed requirements and instructions, categorized into coding and non-coding roles
- 🔍 **Analysis Frameworks**: Structured approaches for problem-solving including Chain-of-Thought prompting and custom frameworks
- 🛠️ **Technical Contexts**: Domain-specific technical contexts for coding roles
- 📝 **Default Descriptions**: Reusable baseline descriptions for common development tasks
- 🎯 **Analysis Cues**: Collection of prompting techniques (Zero-shot CoT, Few-shot CoT, ReAct, etc.)
- 🗺️ **Preset Frameworks**: Task-specific combinations of analysis cues for different development scenarios
- 🏷️ **Type-Safe Enums**: Enum-based role definitions for better developer experience and consistency

## Installation

```bash
npm install prompttool-assets
```

## Role Categories

### Coding Roles (8)
Roles that involve software development, technical implementation, and coding tasks:

- Senior Software Developer
- QA/Test Automation Engineer
- DevOps/Release Engineer
- Security Engineer
- Analytics/Data Engineer
- UI/UX Designer
- Product Manager
- Project Manager

### Non-Coding Roles (5)
Roles focused on content creation, communication, and non-technical tasks:

- Technical Writer
- Grant Writer
- Marketing & Communications
- Accessibility Specialist
- Prompt Engineer

## Usage

### Basic Usage with Enums

```typescript
import { 
  CodingRoles,
  NonCodingRoles,
  RoleCategory,
  roleDescriptions,
  roleTechnicalContexts,
  getRoleCategory,
  isCodingRole
} from 'prompttool-assets';

// Get role description using enum
const devRole = roleDescriptions[CodingRoles.SENIOR_SOFTWARE_DEVELOPER];
const writerRole = roleDescriptions[NonCodingRoles.TECHNICAL_WRITER];

// Get technical context (only available for coding roles)
const devContext = roleTechnicalContexts[CodingRoles.SENIOR_SOFTWARE_DEVELOPER];

// Check role category
const category = getRoleCategory(CodingRoles.QA_TEST_AUTOMATION_ENGINEER);
console.log(category); // "Coding"

// Check if role is coding-related
const isCoding = isCodingRole(NonCodingRoles.GRANT_WRITER);
console.log(isCoding); // false
```

### Analysis Frameworks and Cues

```typescript
import {
  defaultAnalysisFramework,
  analysisCues,
  presetFrameworks,
  defaultDescriptions,
  defaultContext
} from 'prompttool-assets';

// Get analysis cues for Chain of Thought prompting
const zeroShotCot = analysisCues['Zero-shot CoT'];

// Get preset framework for UI development
const uiFramework = presetFrameworks['UI component or page'];
```

### Working with All Roles

```typescript
import { CodingRoles, NonCodingRoles, AllRoles } from 'prompttool-assets';

// Get all available roles
const allCodingRoles = Object.values(CodingRoles);
const allNonCodingRoles = Object.values(NonCodingRoles);

// Type-safe role selection
function selectRole(role: AllRoles) {
  return roleDescriptions[role];
}
```

## TypeScript Support

The package includes comprehensive TypeScript support with enums and type definitions:

```typescript
// Enums for type safety
enum RoleCategory {
  CODING = 'Coding',
  NON_CODING = 'Non-Coding'
}

enum CodingRoles {
  SENIOR_SOFTWARE_DEVELOPER = 'Senior Software Developer',
  QA_TEST_AUTOMATION_ENGINEER = 'QA/Test Automation Engineer',
  // ... etc
}

enum NonCodingRoles {
  TECHNICAL_WRITER = 'Technical Writer',
  GRANT_WRITER = 'Grant Writer',
  // ... etc
}

// Type definitions
type AllRoles = CodingRoles | NonCodingRoles;
type RoleDescriptions = Record<AllRoles, string>;
type RoleTechnicalContexts = Record<CodingRoles, string>;

// Helper functions
function getRoleCategory(role: AllRoles): RoleCategory;
function isCodingRole(role: AllRoles): role is CodingRoles;
```

## Migration from v1.x

If you're upgrading from version 1.x, you'll need to update your imports:

```typescript
// Before (v1.x)
const role = roleDescriptions['Senior Software Developer'];

// After (v2.x)
import { CodingRoles } from 'prompttool-assets';
const role = roleDescriptions[CodingRoles.SENIOR_SOFTWARE_DEVELOPER];
```

## API Reference

### Exports

- `CodingRoles` - Enum of all coding-related roles
- `NonCodingRoles` - Enum of all non-coding roles  
- `RoleCategory` - Enum for role categories (Coding/Non-Coding)
- `roleDescriptions` - Object mapping all roles to their descriptions
- `roleTechnicalContexts` - Object mapping coding roles to technical contexts
- `getRoleCategory(role)` - Helper to get category for any role
- `isCodingRole(role)` - Helper to check if role is coding-related
- `analysisCues` - Collection of prompting techniques
- `presetFrameworks` - Task-specific framework combinations
- `defaultAnalysisFramework` - Default analysis approach
- `defaultDescriptions` - Baseline descriptions
- `defaultContext` - Default context settings

## License

TRANSFORMATIONMATH