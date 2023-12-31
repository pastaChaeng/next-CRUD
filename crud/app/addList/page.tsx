import React from 'react';

const AddList: React.FC = () => {
    return (
        <form className="flex flex-col gap-3">
            <input
                className="border border-[#004E98] px-8 py-2 bg-[#F2F2F2] rounded-md text-[#333333]"
                type="text"
                placeholder="Title"
            />
            <input
                className="border border-[#004E98] px-8 py-2 bg-[#F2F2F2] rounded-md text-[#333333]"
                type="text"
                placeholder="Description"
            />
            <button className='bg-green-600 text-[#F5F5F5] text-base font-semibold py-2 px-6 w-fit rounded-md'>Add</button>
        </form>
    );
};

export default AddList;
