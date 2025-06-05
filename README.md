# prompttool-assets

A comprehensive collection of reusable prompt engineering assets including role descriptions, technical contexts, and analysis frameworks for AI-powered development workflows.

## Features

- 🎭 **Role Descriptions**: Pre-defined expert roles (Software Developer, QA Engineer, DevOps Engineer, etc.) with detailed requirements and instructions
- 🔍 **Analysis Frameworks**: Structured approaches for problem-solving including Chain-of-Thought prompting and custom frameworks
- 🛠️ **Technical Contexts**: Domain-specific technical contexts for various development scenarios
- 📝 **Default Descriptions**: Reusable baseline descriptions for common development tasks
- 🎯 **Analysis Cues**: Collection of prompting techniques (Zero-shot CoT, Few-shot CoT, ReAct, etc.)
- 🗺️ **Preset Frameworks**: Task-specific combinations of analysis cues for different development scenarios

## Installation

```bash
npm install prompttool-assets
```

## Usage

```typescript
import { 
  roleDescriptions,
  roleTechnicalContexts,
  defaultAnalysisFramework,
  analysisCues,
  presetFrameworks,
  defaultDescriptions,
  defaultContext
} from 'prompttool-assets';

// Get role description for a Software Developer
const devRole = roleDescriptions['Expert Software Developer'];

// Get analysis cues for Chain of Thought prompting
const zeroShotCot = analysisCues['Zero-shot CoT'];

// Get preset framework for UI development
const uiFramework = presetFrameworks['UI component or page'];

```

## TypeScript Support

The package includes TypeScript type definitions for better development experience:

```typescript
interface RoleContextMap {
  [key: string]: string;
}

interface AnalysisCues {
  [key: string]: string;
}

interface PresetFrameworks {
  [key: string]: string[];
}
```

## License

TRANSFORMATIONMATH