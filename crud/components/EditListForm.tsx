export default function EditListForm(){
    return (
        <form className="flex flex-col gap-3">
        <input
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Title"
        />
        <input
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Description"
        />
        <button className='bg-green-600 text-white font-semibold py-3 px-6 w-fit'>Update</button>
    </form>
    )
}