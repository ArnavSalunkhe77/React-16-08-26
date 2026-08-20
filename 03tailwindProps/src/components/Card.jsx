import React from 'react';

function Card({username, title}) {

    return (  
        <div class="flex flex-col items-center p-7 rounded-2xl">
            <div>
                <img class="size-48 shadow-xl rounded-md" alt="" src="https://i.pinimg.com/736x/59/ba/ed/59baede986e5a61537915351b998e96a.jpg" />
            </div>
            <div class="flex items-center">
                <span class="text-2xl font-medium">{username}</span>
                <span class="font-medium text-sky-500">{title}</span>
                <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                </span>
            </div>
        </div>
    );
}

export default Card;