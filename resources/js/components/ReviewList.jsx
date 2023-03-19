import React from 'react';
import moment from 'moment';

export default function ReviewList({reviews}){
    console.log(reviews)
    return (
        <>
            <h3 className="font-semibold text-lg mb-1 text-gray-200">Avaliações:</h3>
            <ul className="flex flex-col gap-2 text-gray-800">
                {reviews.length === 0
                    ? <p className='text-gray-200'>O produto ainda não possui avaliações</p>
                    : reviews?.map(review => (
                        <li key={review.id} className="flex flex-col text-gray-200">
                            <div className="border border-gray-200 rounded-lg px-2 ">
                                <p>Nota: {review.rating}</p>
                                <p>{review.content}</p>
                            </div>
                            <small className="text-xs ml-auto px-4">
                                {moment(review.created_at, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY HH:mm:ss')}
                            </small>
                        </li>
                ))}
            </ul>
        </>
    );
}
