import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export function ComposePost({ avatarUrl }: { avatarUrl: string }) {


    const addPost = async (formData: FormData) => {
        'use server'

        const content = formData.get('content')

        if (content === null) return

        const supabase = createServerComponentClient({ cookies })
        const { data: { user } } = await supabase.auth.getUser()

        if(user === null) return

        await supabase.from('posts').insert({
            content,
            user_id: user.id,
        })
      
       
        revalidatePath('/')

    }
 

    // los actions estan en experimental aún, les queda permitir limpiar los campos del formulario

    return (
        <form action={addPost}
            className="flex flex-row p-3 border-white/20 border-b">
            <img className="rounded-full w-10 h-10 object-contain" src={avatarUrl} />
            <div className="flex flex-1 flex-col gap-y-4">
                <textarea
                    name="content"
                    rows={4}
                    className="w-full text-xl bg-black placeholder-gray-500 p-2"
                    placeholder="¿Qué está pasando?">
                </textarea>
                <button type="submit"
                    className="bg-sky-500 font-bold rounded-full px-5 py-2 self-end">
                    Postear
                </button>
            </div>
        </form>
    )
}