// Setup script for initializing the project

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  reset: '\x1b[0m',
  cyan: '\x1b[36m',
};

console.log(`${colors.cyan}Receipt Reimbursement System - Setup Script${colors.reset}`);
console.log('----------------------------------------------\n');

try {
  // Check if .env file exists
  const envExists = fs.existsSync(path.join(__dirname, '.env'));
  if (!envExists) {
    console.log(`${colors.yellow}Creating .env file from .env.example...${colors.reset}`);
    fs.copyFileSync(
      path.join(__dirname, '.env.example'),
      path.join(__dirname, '.env')
    );
    console.log(`${colors.green}Created .env file.${colors.reset}`);
  } else {
    console.log(`${colors.yellow}.env file already exists. Skipping creation.${colors.reset}`);
  }

  // Install dependencies
  console.log(`\n${colors.yellow}Installing dependencies...${colors.reset}`);
  execSync('npm install', { stdio: 'inherit' });

  // Create uploads directory
  const uploadsDir = path.join(__dirname, 'public', 'uploads');
  if (!fs.existsSync(uploadsDir)) {
    console.log(`\n${colors.yellow}Creating uploads directory...${colors.reset}`);
    fs.mkdirSync(uploadsDir, { recursive: true });
    console.log(`${colors.green}Created uploads directory.${colors.reset}`);
  }

  // Generate Prisma client
  console.log(`\n${colors.yellow}Generating Prisma client...${colors.reset}`);
  execSync('npx prisma generate', { stdio: 'inherit' });

  console.log(`\n${colors.green}Setup completed successfully!${colors.reset}`);
  console.log(`\n${colors.cyan}Next steps:${colors.reset}`);
  console.log(`1. Update the .env file with your database credentials if needed`);
  console.log(`2. Run ${colors.yellow}npx prisma db push${colors.reset} to create the database schema`);
  console.log(`3. Run ${colors.yellow}npm run dev${colors.reset} to start the development server`);
  console.log(`4. Open ${colors.cyan}http://localhost:3000${colors.reset} in your browser\n`);

} catch (error) {
  console.error(`\n${colors.red}Error during setup:${colors.reset}`, error);
  process.exit(1);
} 