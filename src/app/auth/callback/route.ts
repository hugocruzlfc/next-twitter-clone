import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'

// opcion de Next para evitar el cacheo de forma esatica de la ruta y siempre se ejecute en el servidor
export const dynamic = 'force-dynamic'

export async function GET (request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code != null) {
    const supabase = createRouteHandlerClient({ cookies })
    // usando el código que le hemos pasado en la url, supabase nos devuelve la sesion del usuario
    await supabase.auth.exchangeCodeForSession(code)
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin)
}
