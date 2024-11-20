import { revalidatePath } from "next/cache";

export default async function Refresh(link){
    await revalidatePath(link)
}