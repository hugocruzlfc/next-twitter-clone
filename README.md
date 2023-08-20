# Project setup

```Usaremos Supabase

```

## Utils

add linter: npx eslint --init
add supabase conection:  pnpm install @supabase/auth-helpers-nextjs @supabase/supabase-js
   --doc: https://supabase.com/docs/guides/auth/auth-helpers/nextjs
add nextui: yarn add @nextui-org/react framer-motion
   --https://nextui.org/docs/guide/installation
add tabler icons: yarn add @tabler/icons-react
   --https://tabler-icons.io/


## About eslint error in server components

https://nextjs.org/docs/app/building-your-application/configuring/typescript

## Create types with supabase
  After npx supabase login and create the token:
  npx supabase gen types typescript --project-id project-id > ./src/app/types/database
