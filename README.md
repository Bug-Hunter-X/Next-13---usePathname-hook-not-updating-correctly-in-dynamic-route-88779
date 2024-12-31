# Next 13 - usePathname Hook Issue in Dynamic Route

This repository demonstrates a bug encountered when using the `usePathname` hook from `next/navigation` within a dynamic route in Next.js 13.  The `pathname` value doesn't update as expected after navigation.

## Bug Description

The `usePathname` hook in `pages/about.js` is intended to display the current pathname. However, after navigating to `/about` from `/`, the pathname remains empty or incorrect, despite the successful navigation.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about` from the home page.
5. Observe that the pathname displayed in the `About` page is not `/about` as expected.

## Expected Behavior

The `usePathname` hook should accurately reflect the current pathname after navigation, displaying `/about` in this case.

## Actual Behavior

The `usePathname` hook displays an empty string or an incorrect pathname, indicating that the state update is not functioning correctly in the context of dynamic routing.

## Solution

The solution involves updating the client component to use the `useSearchParams` hook to read pathname from the search params.  Refer to the solution file `aboutSolution.js` for details.