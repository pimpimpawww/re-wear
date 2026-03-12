# Responsive Layout Guide

## Overview
Website RE WEAR sekarang sudah responsive dengan layout yang centered di desktop (tidak seperti tampilan HP penuh).

## Layout Structure

### Mobile (< 768px)
- Full width
- Native mobile experience

### Desktop (>= 768px)
- Max width: 448px (md breakpoint)
- Centered dengan shadow
- Background abu-abu untuk kontras

## Component: MobileContainer

Gunakan component ini untuk wrap semua pages:

```tsx
import MobileContainer from '@/components/MobileContainer';

export default function YourPage() {
  return (
    <MobileContainer>
      {/* Your content here */}
    </MobileContainer>
  );
}
```

## User Flow

1. **First Visit** → `/onboarding` (3 slides)
2. **After Onboarding** → `/login`
3. **After Login** → `/` (Home page)

### Flow Details:

#### Onboarding
- 3 slides dengan ilustrasi
- Skip button (top right)
- Next/Get Started button
- Sets cookie `hasSeenOnboarding=true`
- Redirects to `/login`

#### Login
- Responsive layout (mobile + desktop)
- Social login options (Facebook, Google)
- Link to register page
- After login → redirects to `/`

#### Register
- Similar layout to login
- Form validation
- Password confirmation
- After register → redirects to `/`

## Pages Updated

✅ `/` - Home page
✅ `/onboarding` - Onboarding screens
✅ `/login` - Login page
✅ `/register` - Register page
✅ `/trending` - Trending page

## To Update Other Pages

Wrap dengan `MobileContainer`:

```tsx
// Before
return (
  <div className="min-h-screen">
    {/* content */}
  </div>
);

// After
return (
  <MobileContainer>
    {/* content */}
  </MobileContainer>
);
```

## Testing

1. **Mobile**: Resize browser < 768px
2. **Desktop**: Full screen - should see centered container with shadow
3. **Flow**: Clear cookies → visit `/` → should redirect to `/onboarding`

## Clear Onboarding Cookie

To test onboarding flow again:
```js
// In browser console
document.cookie = 'hasSeenOnboarding=; path=/; max-age=0';
```

Then refresh page.
