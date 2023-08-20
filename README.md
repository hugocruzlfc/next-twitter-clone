# Project setup

Usaremos Supabase



## Utils

#### Add linter: npx eslint --init
#### Add supabase conection:  pnpm install @supabase/auth-helpers-nextjs @supabase/supabase-js
    Doc: https://supabase.com/docs/guides/auth/auth-helpers/nextjs
#### Add nextui: yarn add @nextui-org/react framer-motion
    Doc: https://nextui.org/docs/guide/installation
#### Add tabler icons: yarn add @tabler/icons-react
    Doc: https://tabler-icons.io/


## About eslint error in server components

https://nextjs.org/docs/app/building-your-application/configuring/typescript

## Create types with supabase
  After npx supabase login and create the token:
  npx supabase gen types typescript --project-id project-id > ./src/app/types/database
