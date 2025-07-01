const { 
  CodingRoles, 
  NonCodingRoles, 
  RoleCategory, 
  roleDescriptions, 
  roleTechnicalContexts,
  getRoleCategory,
  isCodingRole
} = require('./dist/index.js');

console.log('✅ Enum Import Test');
console.log('===================');

// Test enum values
console.log('\n📝 Coding Roles:');
Object.values(CodingRoles).forEach(role => console.log(`  - ${role}`));

console.log('\n📝 Non-Coding Roles:');
Object.values(NonCodingRoles).forEach(role => console.log(`  - ${role}`));

console.log('\n📂 Categories:');
Object.values(RoleCategory).forEach(cat => console.log(`  - ${cat}`));

// Test that all role descriptions exist
console.log('\n✅ Role Descriptions Test');
console.log('==========================');
const allRoles = [...Object.values(CodingRoles), ...Object.values(NonCodingRoles)];
const missingDescriptions = allRoles.filter(role => !roleDescriptions[role]);
if (missingDescriptions.length === 0) {
  console.log('✅ All roles have descriptions');
} else {
  console.log('❌ Missing descriptions for:', missingDescriptions);
}

// Test that technical contexts only exist for coding roles
console.log('\n✅ Technical Contexts Test');
console.log('===========================');
const codingRoles = Object.values(CodingRoles);
const missingContexts = codingRoles.filter(role => !roleTechnicalContexts[role]);
if (missingContexts.length === 0) {
  console.log('✅ All coding roles have technical contexts');
} else {
  console.log('❌ Missing technical contexts for:', missingContexts);
}

// Test helper functions
console.log('\n✅ Helper Functions Test');
console.log('=========================');
const testRole = CodingRoles.SENIOR_SOFTWARE_DEVELOPER;
console.log(`Category for ${testRole}: ${getRoleCategory(testRole)}`);
console.log(`Is coding role: ${isCodingRole(testRole)}`);

const testNonCodingRole = NonCodingRoles.TECHNICAL_WRITER;
console.log(`Category for ${testNonCodingRole}: ${getRoleCategory(testNonCodingRole)}`);
console.log(`Is coding role: ${isCodingRole(testNonCodingRole)}`);

console.log('\n🎉 All tests completed!'); 