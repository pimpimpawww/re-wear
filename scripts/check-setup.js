// Check if Supabase is configured correctly
const fs = require('fs');
const path = require('path');

console.log('🔍 Checking Supabase setup...\n');

// Check if .env.local exists
const envPath = path.join(process.cwd(), '.env.local');
if (!fs.existsSync(envPath)) {
  console.error('❌ .env.local file not found!');
  console.log('📝 Create .env.local file in root directory');
  console.log('📖 See SETUP_INSTRUCTIONS.md for help\n');
  process.exit(1);
}

// Read .env.local
const envContent = fs.readFileSync(envPath, 'utf8');

// Check SUPABASE_URL
const urlMatch = envContent.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/);
const url = urlMatch ? urlMatch[1].trim() : '';

if (!url || url === 'your-project-url.supabase.co') {
  console.error('❌ NEXT_PUBLIC_SUPABASE_URL not configured!');
  console.log('📝 Update .env.local with your Supabase URL');
  console.log('📖 See SETUP_INSTRUCTIONS.md for help\n');
  process.exit(1);
}

// Check SUPABASE_ANON_KEY
const keyMatch = envContent.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY=(.+)/);
const key = keyMatch ? keyMatch[1].trim() : '';

if (!key || key === 'your-anon-key') {
  console.error('❌ NEXT_PUBLIC_SUPABASE_ANON_KEY not configured!');
  console.log('📝 Update .env.local with your Supabase anon key');
  console.log('📖 See SETUP_INSTRUCTIONS.md for help\n');
  process.exit(1);
}

// Validate URL format
if (!url.startsWith('https://') || !url.includes('.supabase.co')) {
  console.error('❌ Invalid Supabase URL format!');
  console.log('Expected: https://xxxxx.supabase.co');
  console.log('Got:', url);
  console.log('📖 See SETUP_INSTRUCTIONS.md for help\n');
  process.exit(1);
}

// Validate key format
if (!key.startsWith('eyJ')) {
  console.error('❌ Invalid Supabase anon key format!');
  console.log('Key should start with "eyJ"');
  console.log('📖 See SETUP_INSTRUCTIONS.md for help\n');
  process.exit(1);
}

console.log('✅ Supabase URL configured');
console.log('✅ Supabase anon key configured');
console.log('\n🎉 Setup looks good!');
console.log('\n📝 Next steps:');
console.log('1. Run database schema in Supabase SQL Editor');
console.log('2. Start dev server: npm run dev');
console.log('3. Register a user at http://localhost:3000/register');
console.log('\n📖 See TESTING_GUIDE.md for detailed testing steps\n');
